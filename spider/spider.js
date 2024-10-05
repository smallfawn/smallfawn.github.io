import * as cheerio from "cheerio";
import tools from "./tools.js";

const formattedDate = tools.getDate();
let newHtml = ``;
let crawledLinks = [];  // 用于存储爬取的链接和日期
const passTitle = ["无人直播", "无人带货", "变现", "0基础", "月入过万", "月入过千", "创作者平台", "源码", "无人卖货", "创业", "自媒体", "主题小组件", "做生意", "AI", "一键生成", "实战", "文案", "网名", "头像", "背景图"];
function isTitleValid(title) {

    return passTitle.some(keyword => title.includes(keyword));
}

// 公用请求头
const defaultHeaders = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "priority": "u=1, i",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "upgrade-insecure-requests": "1",
};

// 简化工具函数调用，减少重复
const fetchPage = async (url, headers = defaultHeaders, config = {}) => {
    try {
        return await tools.request({ url, headers, ...config });
    } catch (err) {
        console.error(`抓取页面 ${url} 出错：`, err);
    }
};

// 通用处理图片防盗链问题
const processImages = ($, selector) => {
    $(selector).find("img").each((index, img) => {
        const src = $(img).attr("src");
        $(img).attr({
            src: `https://image.smallfawn.work/?url=${src}`,
            referrerpolicy: "no-referrer"
        });
    });
};

// 处理 qqhjy6 链接
async function qqhjy6() {
    const res = await fetchPage("https://www.qqhjy6.xyz/hdzx");
    if (!res) return;

    const $ = cheerio.load(res);
    const promises = $(".list-ul li").map(async (index, element) => {
        const title = $(element).find(".soft-title").text().trim();
        const link = $(element).find(".soft-title").attr("href");
        let date = $(element).find(".list-ca").text().trim().replace("发布时间：", "");

        if (date === formattedDate) {
            const pageRes = await fetchPage(link);
            const $1 = cheerio.load(pageRes);
            const articleContent = $1(".article-content");
            const title = $1(".yp-name").text().trim();
            if (isTitleValid(title)) {
                console.log(`跳过标题为 ${title} 的链接，因为在屏蔽列表中`);
            } else {
                crawledLinks.push({ title, link, date });  // 保存爬取的链接和日期

                processImages($1, articleContent);
                newHtml += `## ${title}\n${articleContent.html()}\n\n`;
            }

        }
    }).get();

    await Promise.all(promises);
}

// 处理 iqnew 链接
async function iqnew() {
    const res = await fetchPage("https://www.iqnew.com/activity/", defaultHeaders, { isArrayBuffer: true });
    if (!res) return;

    const $ = cheerio.load(res);
    const urlArr = [];

    $("ul.list-item li").each((_, element) => {
        const date = $(element).find("span.time").text();
        const href = $(element).find("a").attr("href");

        if (date === formattedDate) {
            if (isTitleValid($(element).find("a").attr("title"))) {
                console.log(`跳过标题为 ${$(element).find("a").attr("title")} 的链接，因为在屏蔽列表中`);
            } else {
                const link = `https://www.iqnew.com${href}`;
                urlArr.push(link);
                crawledLinks.push({ title: $(element).find("a").attr("title"), link, date });  // 保存爬取的链接和日期

            }
        }
    });

    await Promise.all(
        urlArr.map(async (url) => {
            const pageRes = await fetchPage(url, defaultHeaders, { isArrayBuffer: true });
            const $ = cheerio.load(pageRes);
            const articleContent = $(".content-intro.typo");
            articleContent.find(".time-count-down, .keyword.clearfix").remove();

            processImages($, articleContent);
            const title = articleContent.find("strong").text().trim();
            newHtml += `## ${title}\n${articleContent.html()}\n\n`;
        })
    );
}

// 处理 kumao 链接
async function kumao() {
    // 请求第一个链接
    const res1 = await fetchPage(
        "https://api.kumao6.com/metas/selectContents?searchParams=%7B%22type%22:%22post%22,%22mid%22:2%7D&page=1&limit=15&order=created",
        { ...defaultHeaders, method: "POST" }
    );
    if (!res1?.code) return;

    // 处理第一个请求的返回数据
    await processResponse(res1);

    // 请求第二个链接
    const res2 = await fetchPage(
        "https://api.kumao6.com/metas/selectContents?searchParams=%7B%22type%22:%22post%22,%22mid%22:1%7D&page=1&limit=15&order=created",
        { ...defaultHeaders, method: "POST" }
    );
    if (!res2?.code) return;

    // 处理第二个请求的返回数据
    await processResponse(res2);
}

// 处理返回数据的函数
async function processResponse(res) {
    for (let item of res.data) {
        const time = tools.getDate(item.created * 1000);
        if (time !== formattedDate) break;

        const pageRes = await fetchPage(`https://www.kumao6.com/article/${item.cid}`);
        const $ = cheerio.load(pageRes);
        const articleContent = $("article");
        const title = $("title").text();
        if (isTitleValid(title)) {
            console.log(`跳过标题为 ${title} 的链接，因为在屏蔽列表中`);
        } else {
            // 保存爬取的链接和日期
            crawledLinks.push({ title, link: `https://www.kumao6.com/article/${item.cid}`, date: time });
            processImages($, articleContent);

            // 处理爬取到的 HTML 内容
            newHtml += `## ${title}\n${articleContent.html().replace(/\t/g, "")}\n\n`;
        }

    }
}
// 主函数
async function main() {
    //时间戳改为昨天的时间戳
    const yesterday = formattedDate - 24 * 60 * 60 * 1000
    const yesterdayDate = tools.getDate(yesterday)
    const yesterdayArticle = tools.readArticle(yesterdayDate)
    let sticky = 999
    if (yesterdayArticle) {
        console.log(`存在昨天的日志`);
        let yesterdaySticky = tools.getSticky(yesterdayArticle)
        if (yesterdaySticky) {
            sticky = Number(yesterdaySticky) + 1
        } else {
            console.log(`未获取到昨天sticky值`);
        }
    }
    newHtml += `---\nsticky: ${sticky}\n---\n# 爬取日期: ${formattedDate}\n`
    await iqnew();
    await qqhjy6();
    await kumao();
    crawledLinks.forEach(link => {
        console.log(`日期: ${link.date}, 标题: ${link.title}, 链接: ${link.link}`);
    });
    tools.saveArticle(formattedDate, newHtml)
}

main();

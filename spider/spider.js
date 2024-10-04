import * as cheerio from "cheerio";
import fs from "fs";
import tools from "./tools.js";
const formattedDate = tools.getDate();
let newHtml =
    `---\nsticky: 999\n---` + "\n" + "# 爬取日期: " + formattedDate + "\n";
async function qqhjy6() {
    // 10位时间戳
    let timestamp = Date.now().toString().slice(0, 10);
    const options = {
        url: "https://www.qqhjy6.xyz/hdzx",
        headers: {
            Accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            Connection: "keep-alive",
            Cookie: `Hm_lvt_d60e542115f2ca02adf147d409bb5f6b=1727485753,1727744959,1727861290,1727916622; Hm_lpvt_d60e542115f2ca02adf147d409bb5f6b=${tools.timestamp10()}`,
            Host: "www.qqhjy6.xyz",
            Referer: "https://www.qqhjy6.xyz/hdzx",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent":
                tools.randomUserAgent(),
        }

    };

    try {
        // 使用 fetch 发起请求
        let res = await tools.request(options);
        const $ = cheerio.load(res);
        /*if (res.length < 500) {
                console.log("页面内容太少，可能被反爬虫了，尝试重试...");
                //获取SCRIPT 标签的内容
                const scriptTags = $('script').text();
                eval(scriptTags);
                console.log(window.location);
                //请求链接
                const newUrl = "https://x6d.com" + window.location;
                response = await fetch(newUrl, { headers });
                //console.log(response);
    
            }*/

        // 收集所有 fetch 请求的 Promise
        const promises = $(".list-ul li")
            .map(async (index, element) => {
                const title = $(element).find(".soft-title").text().trim(); // 提取标题
                const link = $(element).find(".soft-title").attr("href"); // 提取链接
                let date = $(element).find(".list-ca").text().trim(); // 提取发布时间

                date = date.replace("发布时间：", "");
                //console.log(`发布时间: ${date}`);
                //console.log(`今日日期: ${formattedDate}`);
                //console.log(date == formattedDate);

                if (date !== formattedDate) {
                    return;
                }
                console.log(`标题: ${title}`);
                console.log(`链接: ${link}`);
                console.log("---------------------");
                let newlink = link;

                try {
                    // 使用 fetch 抓取新链接的内容
                    const pageRes = await tools.request({
                        url: newlink,
                        headers: {
                            Accept:
                                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                            Connection: "keep-alive",
                            Cookie: `Hm_lvt_d60e542115f2ca02adf147d409bb5f6b=1727485753,1727744959,1727861290,1727916622; Hm_lpvt_d60e542115f2ca02adf147d409bb5f6b=${timestamp}`,
                            Host: "www.qqhjy6.xyz",
                            Referer: "https://www.qqhjy6.xyz/hdzx",
                            "Upgrade-Insecure-Requests": "1",
                            "User-Agent":
                                tools.randomUserAgent(),
                        },

                    });
                    const $1 = cheerio.load(pageRes);
                    let articleContent = $1(".article-content");
                    let title = $1(".yp-name").text().trim();
                    // 遍历并替换所有图片的 src
                    /*articleContent.find('img').each((i, img) => {
                              let oldSrc = $1(img).attr('src');
                              let newSrc = "https://x6d.com" + oldSrc;  // 更改 img src
                              $1(img).attr('src', newSrc);  // 更新 img 的 src 属性
                          });*/

                    // 生成新的 HTML 内容
                    newHtml += "## " + title + "\n" + articleContent.html() + "\n\n";
                } catch (err) {
                    console.error("抓取新链接出错：", err);
                }
            })
            .get(); // 由于 cheerio 返回的是类数组对象，需调用 .get() 将其转换为数组

        // 等待所有请求完成
        await Promise.all(promises);
        // 去掉 newHtml 里面所有的制表符
    } catch (err) {
        console.error("抓取页面出错：", err);
    }
}
async function iqnew() {

    let url = "https://www.iqnew.com/activity/";
    const headers = {
        accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cache-control": "no-cache", // Prevent caching
        // "if-modified-since": "", // Remove this line
        // "if-none-match": "", // Remove this line
        priority: "u=0, i",
        "sec-ch-ua":
            '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "Content-Type": "text/plain; charset=gbk",
    };
    let urlArr = [];
    try {
        let res = await tools.request({ url, headers, isArrayBuffer: true });
        const $2 = cheerio.load(res);
        // 遍历 ul.list-item 内的每个 li
        $2("ul.list-item li").each(function () {
            const date = $2(this).find("span.time").text(); // 获取发布日期
            const title = $2(this).find("a").attr("title"); // 获取标题
            const href = $2(this).find("a").attr("href"); // 获取 href 链接

            if (date !== formattedDate) {
                return;
            }
            console.log(`日期: ${date}, 标题: ${title}, 链接: ${href}`);

            urlArr.push("https:///www.iqnew.com" + href);
        });

        await Promise.all(
            urlArr.map(async (url) => {
                let res = await tools.request({ url, headers ,isArrayBuffer: true});
                const $3 = cheerio.load(res);
                console.log(res);
                let articleContent = $3(".content-intro.typo");
                articleContent.find(".time-count-down, .keyword.clearfix").remove();

                // 获取剩余元素的 HTML
                // 添加 referrer 属性到所有的 <img> 标签
                articleContent.find("img").each((index, img) => {
                    //图片会防盗链 所以这个暂时不要用了  等着下载下来加载到本地再说
                    $3(img).attr("src", "https://image.smallfawn.work/?url=" + $3(img).attr("src"));
                    $3(img).attr("referrerpolicy", "no-referrer");
                });
                let remainingContent = articleContent.html();
                //转换为字符串
                remainingContent = remainingContent
                    .replace(/\t/g, "")
                    .replaceAll("*//*", "");
                let title = $3(".content-intro.typo strong").text(); // 获取 strong 标签的文本

                newHtml += "## " + title + "\n" + remainingContent + "\n\n";
            })
        );
    } catch (err) {
        console.error("抓取页面出错：", err);
    }
}
async function kumao() {
    const headers = {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
    }
    let res = await tools.request({
        url: "https://api.kumao6.com/contents/contentsList?searchParams=%7B%22type%22:%22post%22,%22istop%22:0%7D&page=1&limit=15&order=created",
        headers: headers,
        method: "POST"
    });
    if (res?.code == 1) {
        for (let i of res?.data) {
            let id = i?.cid
            let time
            if (String(i?.created).length == 10) {

                time = tools.getDate(Number(i?.created + "000"))
            } else {
                time = tools.getDate(i?.created)
            }

            if (time !== formattedDate) {
                break
            }
            let res = await tools.request({
                url: "https://www.kumao6.com/article/" + id,
                headers: headers
            })
            const $ = cheerio.load(res)
            //找到标签为article的标签
            let articleContent = $("article")
            //获取里面的html
            //获取页面TITLE
            let title = $("title").text()
            let html = articleContent.html()
            console.log("title", title);
            html = html.replace(/\t/g, "")

            newHtml += "## " + title + "\n" + html + "\n\n";
        }
    }
    //kumao6.com
    //详情页
    /*<article class="py-5"><p>【活动介绍】和平精英抽红包
<br>【活动日期】未知
<br>【活动规则】进去完成任务领取次数
<br>【参与方式】qq打开<a href="https://youxi.gamecenter.qq.com/m/act/b6082753c8c2e8b0_10245682.html?_wv=1&amp;pvsrc=310&amp;ADTAG=adtag.share.zujian&amp;plg_auth=1">https://youxi.gamecenter.qq.com/m/act/b6082753c8c2e8b0_10245682.html?_wv=1&amp;pvsrc=310&amp;ADTAG=adtag.share.zujian&amp;plg_auth=1</a>
<br>【其他说明】[玫瑰][玫瑰][玫瑰]
<br>【活动截图 </p>
<div class="el-image"><img src="http://cdn.u1.huluxia.com/g4/M02/70/C8/rBAAdmb_iumARGG_AANn17xHiEA045.jpg" alt="【现金红包】和平精英抽红包" title="【现金红包】和平精英抽红包" class="el-image__inner el-image__preview"></div> 
<div class="el-image"><img src="http://cdn.u1.huluxia.com/g4/M02/70/C8/rBAAdmb_iuqABZ5tAANlkocxx0A028.jpg" alt="【现金红包】和平精英抽红包" title="【现金红包】和平精英抽红包" class="el-image__inner el-image__preview"></div></article>*/
}
async function main() {
    await iqnew();
    await qqhjy6();
    await kumao();
    
    tools.savaArticle(formattedDate, newHtml)
}
main();

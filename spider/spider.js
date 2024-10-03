import * as cheerio from 'cheerio'
import fs from 'fs'
const today = new Date();
const year = today.getFullYear(); // 获取年份
const month = String(today.getMonth() + 1).padStart(2, '0'); // 补零
const day = String(today.getDate()).padStart(2, '0'); // 补零
const formattedDate = `${year}-${month}-${day}`;

async function main() {
    global['window'] = {}
    // 10位时间戳
    let timestamp = Date.now().toString().slice(0, 10);
    const headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Connection": "keep-alive",
        "Cookie": `Hm_lvt_d60e542115f2ca02adf147d409bb5f6b=1727485753,1727744959,1727861290,1727916622; Hm_lpvt_d60e542115f2ca02adf147d409bb5f6b=${timestamp}`,
        "Host": "www.qqhjy6.xyz",
        "Referer": "https://www.qqhjy6.xyz/hdzx",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    };

    const url1 = "https://www.qqhjy6.xyz/hdzx";

    try {
        // 使用 fetch 发起请求
        let response = await fetch(url1, { headers });
        const res = await response.text(); // 获取文本内容
        const $ = cheerio.load(res);
        //console.log(res);
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

        let newHtml = `---\nsticky: 999\n---` + "" + '# 爬取日期: ' + formattedDate + '\n';

        // 收集所有 fetch 请求的 Promise
        const promises = $('.list-ul li').map(async (index, element) => {
            const title = $(element).find('.soft-title').text().trim();  // 提取标题
            const link = $(element).find('.soft-title').attr('href');     // 提取链接
            let date = $(element).find('.list-ca').text().trim();       // 提取发布时间

            console.log(`标题: ${title}`);
            console.log(`链接: ${link}`);
            date = date.replace("发布时间：", "");
            console.log(`发布时间: ${date}`);
            console.log(`今日日期: ${formattedDate}`);

            if (date !== formattedDate) {
                return;
            }

            console.log('---------------------');
            let newlink = link;

            try {
                // 使用 fetch 抓取新链接的内容
                const pageResponse = await fetch(newlink, { headers });
                const pageRes = await pageResponse.text();
                const $1 = cheerio.load(pageRes);
                let articleContent = $1('.article-content');
                let title = $1('.yp-name').text().trim();
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
        }).get();  // 由于 cheerio 返回的是类数组对象，需调用 .get() 将其转换为数组

        // 等待所有请求完成
        await Promise.all(promises);

        // 去掉 newHtml 里面所有的制表符
        newHtml = newHtml.replace(/\t/g, '');

        // 最终写入文件
        fs.writeFileSync(`spider/${formattedDate}.md`, newHtml);
        console.log(`所有内容已写入 ${formattedDate}.md文件`);
    } catch (err) {
        console.error("抓取页面出错：", err);
    }
}

main();

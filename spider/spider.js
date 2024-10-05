import * as cheerio from "cheerio";
import tools from "./tools.js";

class Scraper {
    constructor() {
        this.newHtml = `---\nsticky: 999\n---\n# 爬取日期: ${tools.getDate()}\n`;
        this.formattedDate = tools.getDate();
    }

    async fetchPage(options) {
        try {
            return await tools.request(options);
        } catch (err) {
            console.error("请求失败：", err);
            return null;
        }
    }

    async saveArticle() {
        tools.saveArticle(this.formattedDate, this.newHtml);
    }
}

class QQHJY6Scraper extends Scraper {
    async scrape() {
        const options = {
            url: "https://www.qqhjy6.xyz/hdzx",
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "zh-CN,zh;q=0.9",
                Connection: "keep-alive",
                Cookie: `Hm_lvt_d60e542115f2ca02adf147d409bb5f6b=${tools.timestamp10()}; Hm_lpvt_d60e542115f2ca02adf147d409bb5f6b=${tools.timestamp10()}`,
                "User-Agent": tools.randomUserAgent(),
            },
        };

        const res = await this.fetchPage(options);
        if (!res) return;

        const $ = cheerio.load(res);

        const promises = $(".list-ul li").map(async (index, element) => {
            const title = $(element).find(".soft-title").text().trim();
            const link = $(element).find(".soft-title").attr("href");
            let date = $(element).find(".list-ca").text().trim().replace("发布时间：", "");

            if (date !== this.formattedDate) return;

            try {
                const pageRes = await this.fetchPage({ url: link, headers: options.headers });
                const $1 = cheerio.load(pageRes);
                const articleContent = $1(".article-content");
                const newTitle = $1(".yp-name").text().trim();

                this.newHtml += `## ${newTitle}\n${articleContent.html()}\n\n`;
            } catch (err) {
                console.error("抓取新链接出错：", err);
            }
        }).get();

        await Promise.all(promises);
    }
}

class IQNewScraper extends Scraper {
    async scrape() {
        const url = "https://www.iqnew.com/activity/";
        const headers = {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "Content-Type": "text/plain; charset=gbk",
        };

        let urlArr = [];
        const res = await this.fetchPage({ url, headers, isArrayBuffer: true });
        if (!res) return;

        const $ = cheerio.load(res);
        $("ul.list-item li").each((_, element) => {
            const date = $(element).find("span.time").text();
            const title = $(element).find("a").attr("title");
            const href = $(element).find("a").attr("href");

            if (date !== this.formattedDate) return;

            urlArr.push(`https:///www.iqnew.com${href}`);
        });

        await Promise.all(
            urlArr.map(async (link) => {
                const pageRes = await this.fetchPage({ url: link, headers, isArrayBuffer: true });
                const $1 = cheerio.load(pageRes);
                const articleContent = $1(".content-intro.typo").remove(".time-count-down, .keyword.clearfix");

                articleContent.find("img").each((_, img) => {
                    $1(img).attr("src", `https://image.smallfawn.work/?url=${$1(img).attr("src")}`);
                    $1(img).attr("referrerpolicy", "no-referrer");
                });

                const remainingContent = articleContent.html().replace(/\t/g, "");
                const newTitle = $1(".content-intro.typo strong").text().trim();

                this.newHtml += `## ${newTitle}\n${remainingContent}\n\n`;
            })
        );
    }
}

class KumaoScraper extends Scraper {
    async scrape() {
        const headers = {
            accept: "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            priority: "u=1, i",
            "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Chromium\";v=\"129\"",
        };

        const res = await this.fetchPage({
            url: "https://api.kumao6.com/contents/contentsList?searchParams=%7B%22type%22:%22post%22,%22istop%22:0%7D&page=1&limit=15&order=created",
            headers,
            method: "POST"
        });

        if (!res?.code === 1) return;

        for (let i of res.data) {
            let time = tools.getDate(i.created * 1000);
            if (time !== this.formattedDate) break;

            const pageRes = await this.fetchPage({ url: `https://www.kumao6.com/article/${i.cid}`, headers });
            const $ = cheerio.load(pageRes);
            const articleContent = $("article");

            articleContent.find("img").each((_, img) => {
                $(img).attr("src", `https://image.smallfawn.work/?url=${$(img).attr("src")}`);
                $(img).attr("referrerpolicy", "no-referrer");
            });

            const html = articleContent.html().replace(/\t/g, "");
            const newTitle = $("title").text().trim();

            this.newHtml += `## ${newTitle}\n${html}\n\n`;
        }
    }
}

class MainScraper {
    constructor() {
        this.scrapers = [
            new IQNewScraper(),
            new QQHJY6Scraper(),
            new KumaoScraper()
        ];
    }

    async run() {
        for (let scraper of this.scrapers) {
            await scraper.scrape();
        }
        await this.scrapers[0].saveArticle();
    }
}

const mainScraper = new MainScraper();
mainScraper.run();

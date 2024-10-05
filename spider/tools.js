
import fs from 'fs';
import axios from 'axios';
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomUserAgent() {
    const windowsVersion = `Windows NT ${randomInt(6, 10)}.${randomInt(0, 3)}`;
    const webKitVersion = `537.36`;
    const chromeVersion = `${randomInt(70, 129)}.0.${randomInt(0, 9999)}.${randomInt(0, 999)}`;
    const edgeVersion = `${randomInt(70, 129)}.0.${randomInt(0, 9999)}.${randomInt(0, 999)}`;

    return `Mozilla/5.0 (${windowsVersion}; Win64; x64) AppleWebKit/${webKitVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Safari/${webKitVersion} Edg/${edgeVersion}`;
}
function timestamp10() {
    return Math.floor(Date.now() / 1000);
}
function timestamp13() {
    return Date.now();
}
async function request(options) {
    try {
        // 设置请求类型为arraybuffer
        if (options['isArrayBuffer']) {
            const response = await axios.request({
                ...options,
                responseType: 'arraybuffer' // 指定响应类型为arraybuffer
            });

            // 获取响应的arrayBuffer
            const buffer = response.data;

            // 使用 TextDecoder 解码为字符串，编码设置为 'gbk'
            const decoder = new TextDecoder("gbk");
            const res = decoder.decode(buffer);

            return res; // 返回解码后的字符串
        } else {
            const response = await axios.request(options);
            return response.data;
        }

    } catch (error) {
        console.error('Request failed:', error);
        throw error; // 抛出错误
    }
}
function getDate(time = "") {
    let today;
    if (time) {
        today = new Date(time);
    }
    else {
        today = new Date();
    }
    const year = today.getFullYear(); // 获取年份
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 补零
    const day = String(today.getDate()).padStart(2, "0"); // 补零
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}
function saveArticle(name, data) {


    fs.writeFileSync(`spider/${name}.md`, data, { encoding: 'utf8' });
}
function readArticle(name) {
    //如果存在则读取 否则返回null
    if (!fs.existsSync(`src/posts/${name}.md`)) return null;
    return fs.readFileSync(`src/posts/${name}.md`, { encoding: 'utf8' });
}
function getSticky(inputText) {
    const match = inputText.match(/sticky:\s*(\d+)/);

    if (match) {
        const stickyValue = match[1]; // match[1] 包含了提取的值
        console.log('sticky 的值为：', stickyValue); // 输出: sticky 的值为： 999
        return stickyValue;

    } else {
        console.log('没有找到 sticky 的值');

        return null;
    }
}
const tools = {
    randomUserAgent, saveArticle, timestamp10, timestamp13, request, randomInt, getDate, readArticle, getSticky
}
export default tools
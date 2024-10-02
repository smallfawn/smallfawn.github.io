# vuepress-plugins

vuepress 插件集合 自写加收集

# 谷歌广告

```shell
npm install -D @smallfawn/vuepress-plugin-googleadsense
```

```js
import busuanziPlugin from "@smallfawn/vuepress-plugin-busuanzi";
export default defineUserConfig({
  plugins: [
    googleAdSensePlugin({
      id: "ca-pub-xxxxxx",
    }),
  ],
});
```

# 数据统计

```shell
npm install -D @smallfawn/vuepress-plugin-busuanzi
```

```js
import busuanziPlugin from "@smallfawn/vuepress-plugin-busuanzi";
export default defineUserConfig({
  plugins: [busuanziPlugin()],
});
<busuanzi />; //busuanzi数据统计  组件
```

# 音乐播放器

```shell
npm install -D @smallfawn/vuepress-plugin-music
```

```js
import musicPlugin from "@smallfawn/vuepress-plugin-music";
export default defineUserConfig({
  plugins: [
    musicPlugin({
      src: "MP3_URL或者静态资源地址", //必填
      title: "音乐标题", //非必填
      artist: "作者", //非必填
    }),
  ],
});
```

# 随机一言 hitokoto

```shell
npm install -D @smallfawn/vuepress-plugin-hitokoto
```

```js
import hitokotoPlugin from "@smallfawn/vuepress-plugin-hitokoto";
export default defineUserConfig({
  plugins: [
    hitokotoPlugin({
      type: "", //非必填 详情https://developer.hitokoto.cn/sentence/
    }),
  ],
});
<hitokoto />; //随机一言 组件
```

# 数据统计 google cloudflare 51.la baidu

```shell
npm install -D @smallfawn/vuepress-plugin-analytics
```

```js
import analyticsPlugin from "@smallfawn/vuepress-plugin-analytics";
export default defineUserConfig({
  plugins: [
    analyticsPlugin({
      type: "", // 必填值 cloudflare-analytics 51la-v6 51la-v5  google-analytics baidu-tongji
      key: "", //必填值 参考部署代码中的唯一值  51la-v6的ID和CK为同一个
    }),
  ],
});
```

# 水印 / 转载 footer 版权保护

```shell
npm install -D @smallfawn/vuepress-plugin-copyright
```

```js
import copyrightPlugin from "@smallfawn/vuepress-plugin-copyright";
export default defineUserConfig({
  plugins: [
    copyrightPlugin({
      copyrightText: "\n\n转载自: XXXXX 地址: https://www.example.com",
    }),
  ],
});
//text // 必填值 例如 版权所有
//fontSize //非必填 必须为数字 字体大小
//gap //非必填 必须为数字 间距
<watermark text="版权所有" fontSize="40" gap="20">
  ////内容 图片 视频 文字等
</watermark>;
```


这里是演示 ---

<watermark text="版权所有" :fontSize="40" :gap="20">
        <div>插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容插槽内容</div>
      </watermark>

这里是演示 ---

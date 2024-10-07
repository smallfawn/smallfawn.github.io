import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import googleAdSensePlugin from "@smallfawn/vuepress-plugin-googleadsense";
import busuanziPlugin from "@smallfawn/vuepress-plugin-busuanzi";
import hitokotoPlugin from "@smallfawn/vuepress-plugin-hitokoto";
//import analyticsPlugin from "@smallfawn/vuepress-plugin-analytics";
import copyrightPlugin from "@smallfawn/vuepress-plugin-copyright";
export default defineUserConfig({
  base: "/",
  head: [
    ["meta", { name: "google-adsense-account", content: "ca-pub-2247483547544632" }],
  ],
  lang: "zh-CN",
  title: "smallfawn",
  description: "smallfawn",
  plugins: [
    googleAdSensePlugin({
      id: "ca-pub-2247483547544632",
    }),
    busuanziPlugin({
      server: "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
    }),
    //musicPlugin({ src: "https://download.samplelib.com/mp3/sample-15s.mp3" }),
    hitokotoPlugin({ type: "a" }),
    //analyticsPlugin({ type: "51la-v5", key: "21922161" }),
    copyrightPlugin({
      copyrightText: "\n\n转载自: smallfawn 地址: https://smallfawn.github.io",
    }),
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

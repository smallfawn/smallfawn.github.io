import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import googleAdSensePlugin from "@smallfawn/vuepress-plugin-googleadsense";
import busuanziPlugin from "@smallfawn/vuepress-plugin-busuanzi";
//import googleAdSensePlugin from 'vuepress-plugin-google-adsense2';
import musicPlugin from "@smallfawn/vuepress-plugin-music";
import hitokotoPlugin from "@smallfawn/vuepress-plugin-hitokoto";
import analyticsPlugin from "@smallfawn/vuepress-plugin-analytics";
import copyrightPlugin from "@smallfawn/vuepress-plugin-copyright";
export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  plugins: [
    googleAdSensePlugin({
      id: "ca-pub-2247483547544632",
    }),
    busuanziPlugin(),
    musicPlugin({ src: "https://download.samplelib.com/mp3/sample-15s.mp3" }),
    hitokotoPlugin({ type: "a" }),
    analyticsPlugin({ type: "51la-v5", key: "21922161" }),
    copyrightPlugin({
      copyrightText: "\n\n转载自: smallfawn 地址: https://smallfawn.github.io",
    }),
  ],
  /*locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
  },*/

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

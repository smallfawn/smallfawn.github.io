import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import hitokotoPlugin from "@smallfawn/vuepress-plugin-hitokoto";
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
    hitokotoPlugin({ type: "a" }),
    copyrightPlugin({
      copyrightText: "\n\n转载自: smallfawn 地址: https://smallfawn.github.io",
    }),
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

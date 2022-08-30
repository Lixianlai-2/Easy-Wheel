// vite.config.js
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";

export default {
  // 公共基础路径
  base: "./",
  // 放置生成的静态资源（js/css/img/fonts)目录
  assetsDir: "assets",
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
  ],
};

import { createApp } from "vue";

import App from "./app.vue";

import "./assets/css/reset.css";

console.log("应用构建环境：", process.env.NODE_ENV);
console.log("应用运行环境：", RUN_ENV); // eslint-disable-line
createApp(App).mount("#root");
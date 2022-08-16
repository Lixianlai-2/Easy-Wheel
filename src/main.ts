// 注意要先引入css，再使用组件，不然覆盖顺序就错误了
import "./index.scss";
import "./lip/gulu.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");

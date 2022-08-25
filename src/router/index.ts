import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import Intro from "../views/Intro.vue";
import Install from "../views/Install.vue";
import Start from "../views/Start.vue";
import Switch from "../components/SwitchDemo.vue";
import Button from "../components/ButtonDemo.vue";
import Dialog from "../components/DialogDemo.vue";
import Tabs from "../components/TabsDemo.vue";
import DocContent from "../components/DocContent.vue";

let history = createWebHashHistory();

let router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "switch",
          component: Switch,
        },
        {
          path: "button",
          component: Button,
        },
        {
          path: "dialog",
          component: Dialog,
        },
        {
          path: "tabs",
          component: Tabs,
        },
        {
          path: "",
          component: Intro,
        },
        {
          path: "intro",
          component: Intro,
        },
        {
          path: "start",
          component: Start,
        },
        {
          path: "install",
          component: Install,
        },
      ],
    },
  ],
});

export default router;

<template>
  <!-- <router-link to="/">导航到Home页面</router-link>
    <br>
    <router-link to="/doc">导航到Doc页面</router-link>
    <hr> -->
  <router-view></router-view>
</template>

<script lang="ts">
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import { ref } from "@vue/reactivity";
import { provide } from "@vue/runtime-core";
import router from "./router";

export default {
  name: "App",
  components: { Home, Doc },
  setup() {
    let viewportWidth = document.documentElement.clientWidth;

    let asideVisible = ref(viewportWidth > 500 ? true : false);
    router.afterEach((to, from, failure) => {
      if (viewportWidth <= 500) {
        asideVisible.value = false;
      }
    });

    provide("asideVisible", asideVisible);
  },
};
</script>

<style scoped></style>

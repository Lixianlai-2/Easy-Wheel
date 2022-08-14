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
export default {
  name: "App",
  components: { Home, Doc },
  setup() {
    let viewportWidth = document.documentElement.clientWidth;

    let asideVisible = ref(viewportWidth > 500 ? true : false);

    provide("asideVisible", asideVisible);
  },
};
</script>

<style scoped></style>

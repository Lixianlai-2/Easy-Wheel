<template>
  <!-- <router-link to="/">导航到Home页面</router-link>
    <br>
    <router-link to="/doc">导航到Doc页面</router-link>
    <hr> -->
  <router-view></router-view>
</template>

<script>
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
export default {
  name: "App",
  components: { Home, Doc },
};
</script>

<style scoped></style>

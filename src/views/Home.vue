<template>
  <div class="topNavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>gulu UI</h1>
      <h2>一个容易理解的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/Lixianlai-2/gulu-Wheel">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  name: "Home",
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
.topNavAndBanner {
  background: linear-gradient(
    118deg,
    rgba(87, 146, 233, 1) 0%,
    rgba(124, 136, 243, 1) 100%
  );
}
.topnav {
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background: rgb(237, 240, 250);
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>

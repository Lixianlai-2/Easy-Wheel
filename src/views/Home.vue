<template>
  <div>
    <div class="tapnav">
      <div class="logo">logo</div>
      <div class="menu">menu</div>
    </div>
    <div class="banner">
      <h1>Easy UI</h1>
      <h2>一个容易理解的 UI 框架</h2>
      <p class="actions">
        <a href="#">GitHub</a>
        <a href="#">开始</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.tapnav {
  color: skyblue;
  .logo {
    color: red;
  }
}
</style>

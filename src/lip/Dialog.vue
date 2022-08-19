<template>
  <!-- 这部分内容是做mask-->
  <div class="overlay"></div>
  <div class="wrapper">
    <header>标题</header>
    <main>
      <p>第一行内容</p>
      <p>第二行内容</p>
    </main>
    <footer>
      <Button>确认</Button>
      <Button>取消</Button>
    </footer>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default { components: { Button } };
</script>

<style lang="scss" scoped></style>

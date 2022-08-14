<template>
  <div>
    <Tapnav />
    <div class="content">
      <aside>边栏</aside>
      <main>主要内容</main>
      <h1>goodd</h1>
    </div>
  </div>
</template>

<script>
import Tapnav from "../components/Tapnav.vue";
export default {
  name: "Doc",
  components: { Tapnav },
};
</script>

<style scoped></style>

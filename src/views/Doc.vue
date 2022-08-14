<template>
  <div>
    <Tapnav />
    <div class="content">
      <aside>
        <h2>组件列表</h2>
        <ol>
          <li><router-link to="/doc/switch">Switch 组件</router-link></li>
          <li><router-link to="/doc/button">Button 组件</router-link></li>
          <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
          <li><router-link to="/doc/tabs">Tabs 组件</router-link></li>
        </ol>
      </aside>
      <main>主要内容</main>
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

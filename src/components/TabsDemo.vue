<template>
  <div class="demo">
    <h2>示例一</h2>
    <div class="demo-component">
      <Tabs v-model:selectedAttr="x">
        <Tab title="导航一">内容1</Tab>
        <Tab title="导航二">内容2</Tab>
      </Tabs>
    </div>
    <div class="demo-actions">
      <Button @click="visibleCode1 = !visibleCode1">代码</Button>
    </div>
    <div class="demo-code show1" v-show="visibleCode1">
      <tabsMd />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Tab from "../lip/Tab.vue";
import Tabs from "../lip/Tabs.vue";
import Button from "../lip/Button.vue";
import tabsMd from "../markdown/tabs.md";
export default {
  components: { Tab, Tabs, Button, tabsMd },
  setup() {
    let x = ref("导航一");
    let visibleCode1 = ref(true);
    return {
      x,
      visibleCode1,
    };
  },
};
</script>

<style></style>

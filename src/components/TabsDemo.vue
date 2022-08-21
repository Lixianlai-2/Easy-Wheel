<template>
  <div>
    <!-- 给Tabs绑定属性selectedAttr,注意这里用的不是v-bind,所以写字符串是可以的 -->
    <Tabs v-model:selectedAttr="x">
      <Tab title="导航一">内容1</Tab>
      <Tab title="导航二">内容2</Tab>
    </Tabs>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Tab from "../lip/Tab.vue";
import Tabs from "../lip/Tabs.vue";
export default {
  components: { Tab, Tabs },
  setup() {
    let x = ref("导航二");
    return {
      x,
    };
  },
};
</script>

<style scoped></style>

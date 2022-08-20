<template>
  <div>
    <Tabs>
      <Tab title="导航一">内容1</Tab>
      <Tab title="导航二">内容2</Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from "../lip/Tab.vue";
import Tabs from "../lip/Tabs.vue";
export default {
  components: { Tab, Tabs },
};
</script>

<style scoped></style>

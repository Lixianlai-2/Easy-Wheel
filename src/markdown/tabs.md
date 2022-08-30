```javascript
<template>
  <div>
    <Switch v-model:value="bool" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Tab from "../lip/Tab.vue";
import Tabs from "../lip/Tabs.vue";
import Button from "../lip/Button.vue";
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

<style scoped></style>

```

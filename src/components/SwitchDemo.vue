<template>
  <div>
    <Switch :value="y" @input="y = $event" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Switch from "../lip/Switch.vue";
export default {
  components: { Switch },
  setup() {
    // 设置初始值，但是这个y有什么用呢？
    const y = ref(false);
    return { y };
  },
};
</script>

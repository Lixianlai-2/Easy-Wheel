<template>
  <div>
    <!-- 通过input事件传入值 -->
    <Switch :value="x" @input="x = $event" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Switch from "../lip/Switch.vue";
export default {
  components: { Switch },
  setup() {
    let x = ref(true);
    return {
      x,
    };
  },
};
</script>

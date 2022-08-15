<template>
  <div>
    <!-- 通过input事件传入值 -->
    <!-- <Switch :value="bool" @input="bool = $event" /> -->
    <Switch v-model:value="bool" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Switch from "../lip/Switch.vue";
export default {
  components: { Switch },
  setup() {
    let bool = ref(false);
    return {
      bool,
    };
  },
};
</script>

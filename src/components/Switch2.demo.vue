<template>
  <div>
    <Switch v-model:value="bool" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Switch from "../lip/Switch.vue";
export default {
  components: { Switch },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>

<style scoped></style>

<template>
  <div>
    Dialog 示例
    <h1>示例一</h1>
    <Button @click="toggle">切换</Button>
    <Dialog v-model:visible="x" />
  </div>
</template>

<script>
import Dialog from "../lip/Dialog.vue";
import Button from "../lip/Button.vue";
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    let x = ref(false);
    const toggle = function () {
      x.value = !x.value;
      console.log("works", x.value);
    };
    return {
      x,
      toggle,
    };
  },
  components: { Dialog, Button },
};
</script>

<style scoped></style>

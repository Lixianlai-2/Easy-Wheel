<template>
  <div>
    Dialog 示例
    <h1>示例一</h1>
    <Button @click="toggle">切换</Button>
    <Dialog
      v-model:visible="x"
      :closeDialogMaskOrNot="true"
      :okDialog="fn1"
      :cancelDialog="fn2"
    >
      <template v-slot:content>
        <strong>内容</strong>
        <div>hello</div>
      </template>

      <template v-slot:title>
        <strong>标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "../lip/Dialog.vue";
import Button from "../lip/Button.vue";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let x = ref(false);
    const toggle = function () {
      x.value = !x.value;
      console.log("works", x.value);
    };

    const fn1 = () => {
      return true;
    };
    const fn2 = () => {};
    return {
      x,
      toggle,
      fn1,
      fn2,
    };
  },
  components: { Dialog, Button },
};
</script>

<style scoped></style>

<template>
  <div>
    <div>Dialog 示例</div>
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
    <h1>示例2</h1>
    <Button @click="showDialog">切换2</Button>
  </div>
</template>

<script>
import Dialog from "../lip/Dialog.vue";
import Button from "../lip/Button.vue";
import { ref } from "@vue/reactivity";
import openDialog from "../lip/openDialog";
import { h } from "@vue/runtime-core";
export default {
  setup() {
    let x = ref(false);
    const toggle = function () {
      x.value = !x.value;
    };

    const fn1 = () => {
      return true;
    };

    const fn2 = () => {};

    // 点击这一个，就实现功能
    const showDialog = () => {
      openDialog({
        title: h("strong", null, "标题"),
        content: "你好",
        okButton() {
          console.log("ok");
        },
        cancelButton() {
          console.log("cancel");
        },
      });
    };

    return {
      x,
      toggle,
      fn1,
      fn2,
      showDialog,
    };
  },
  components: { Dialog, Button },
};
</script>

<style scoped></style>

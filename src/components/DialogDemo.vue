<template>
  <div class="demo">
    <h2>示例五</h2>
    <div class="demo-component">
      <Button @click="toggle">对话框</Button>
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

    <div class="demo-actions">
      <Button @click="visibleCode1 = !visibleCode1">查看代码</Button>
    </div>
    <div class="demo-code show1" v-show="visibleCode1">
      <switch1 />
    </div>
  </div>
</template>

<script>
import Dialog from "../lip/Dialog.vue";
import Button from "../lip/Button.vue";
import { ref } from "@vue/reactivity";
import openDialog from "../lip/openDialog";
import { h } from "@vue/runtime-core";
import switch1 from "../markdown/Dialogs/dialog1.md";
export default {
  setup() {
    let visibleCode1 = ref(true);
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
      visibleCode1,
    };
  },
  components: { Dialog, Button, switch1 },
};
</script>

<style scoped></style>

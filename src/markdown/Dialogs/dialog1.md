```javascript
<template>
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
</template>

<script>
import Dialog from "../lip/Dialog.vue";
import Button from "../lip/Button.vue";
export default {
  components: { Button,Dialog },
};
</script>
```

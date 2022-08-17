<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <!-- 添加大中小按钮 -->
    <Button size="big">大</Button>
    <Button>普通</Button>
    <Button size="small">小</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lip/Button.vue";

export default {
  components: { Button },
  setup() {
    let onClick = function () {
      console.log("works");
    };
    return {
      onClick,
    };
  },
};
</script>

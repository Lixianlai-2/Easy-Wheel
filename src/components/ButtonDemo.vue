<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <!-- 绑定了三个事件，调用onClick函数 -->
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" :size="15"
      >这是button按钮</Button
    >
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

<!-- 为什么函数不需要用ref或者reactive，因为我们要弄得是响应式数据啊 -->
<!-- 怎么在vscode中设置快捷键，打印出console.log -->

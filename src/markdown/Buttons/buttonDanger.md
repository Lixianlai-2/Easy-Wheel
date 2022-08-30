```javascript
<template>
  <div>
    <!-- 普通按钮等级设置 -->
    <Button level="main" theme="button">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger" theme="button">危险按钮</Button>
  </div>

  <div>
    <!-- 文本按钮等级设置 -->
    <Button theme="text" level="main">主要文本</Button>
    <Button theme="text">普通文本</Button>
    <Button theme="text" level="danger">危险文本</Button>
  </div>

  <div>
    <!-- 链接按钮登记设置 -->
    <Button theme="link" level="main">主要链接</Button>
    <Button theme="link">普通链接</Button>
    <Button theme="link" level="danger">危险链接</Button>
  </div>
</template>

<script>
import Button from "../lip/Button.vue";
export default {
  components: { Button },
};
</script>
```

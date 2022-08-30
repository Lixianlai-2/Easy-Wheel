```javascript
<template>
  <div>
    <!-- 添加大中小 普通按钮 -->
    <Button size="big">大大大</Button>
    <Button>普普普</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <!-- 添加大中小 文本按钮 -->
    <Button theme="text" size="big">大大大</Button>
    <Button theme="text">普普普</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
  <div>
    <!-- 添加大中小 链接按钮 -->
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普普</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
</template>

<script>
import Button from "../lip/Button.vue";
export default {
  components: { Button },
};
</script>
```

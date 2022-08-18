<template>
  <div>Button 示例</div>
  <!------------------------------>
  <h1>示例1</h1>
  <div>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
  <!------------------------------>
  <h1>示例2</h1>
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
  <!------------------------------>
  <h1>示例3</h1>
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
  <!------------------------------>
  <h1>示例4</h1>
  <div>
    <!-- 注意，这个disabled不要通过props接收，不然在组件上就找不到了，跑到props里面去了 -->
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接</Button>
    <Button theme="text" disabled>禁用文本</Button>
  </div>
  <!------------------------------>
  <h1>示例5</h1>
  <div>
    <Button :loading="true">加载中</Button>
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

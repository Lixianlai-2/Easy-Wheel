<template>
  <h1>Button组件</h1>
  <div class="demo">
    <h2>示例一</h2>
    <div class="demo-component">
      <Button theme="button">按钮</Button>
      <Button theme="link">链接</Button>
      <Button theme="text">文本</Button>
    </div>
    <div class="demo-actions">
      <Button @click="visibleCode1 = !visibleCode1">查看代码</Button>
    </div>
    <div class="demo-code show1" v-show="visibleCode1">
      <buttonThemeMd />
    </div>
  </div>

  <div class="demo">
    <h2>示例二</h2>
    <div class="demo-component">
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
    </div>
    <div class="demo-actions">
      <Button @click="visibleCode2 = !visibleCode2">查看代码</Button>
    </div>
    <div class="demo-code show1" v-show="visibleCode2">
      <buttonSize />
    </div>
  </div>

  <div class="demo">
    <h2>示例三</h2>
    <div class="demo-component">
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
    </div>
    <div class="demo-actions">
      <Button @click="visibleCode3 = !visibleCode3">查看代码</Button>
    </div>
    <div class="demo-code show1" v-show="visibleCode3">
      <buttonDanger />
    </div>
  </div>

  <div class="demo">
    <h2>示例四</h2>
    <div class="demo-component">
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接</Button>
      <Button theme="text" disabled>禁用文本</Button>
    </div>
    <div class="demo-actions">
      <Button @click="visibleCode4 = !visibleCode4">查看代码</Button>
    </div>
    <div class="demo-code show1" v-show="visibleCode4">
      <buttonDisable />
    </div>
  </div>

  <div class="demo">
    <h2>示例五</h2>
    <div class="demo-component">
      <Button :loading="true">加载中</Button>
      <Button>加载完毕</Button>
    </div>
    <div class="demo-actions">
      <Button @click="visibleCode5 = !visibleCode5">查看代码</Button>
    </div>
    <div class="demo-code show1" v-show="visibleCode5">
      <buttonLoading />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Button from "../lip/Button.vue";
import buttonThemeMd from "../markdown/Buttons/buttonTheme.md";
import buttonDanger from "../markdown/Buttons/buttonDanger.md";
import buttonSize from "../markdown/Buttons/buttonSize.md";
import buttonLoading from "../markdown/Buttons/buttonLoading.md";
import buttonDisable from "../markdown/Buttons/buttonDisable.md";

export default {
  components: {
    Button,
    buttonThemeMd,
    buttonDanger,
    buttonSize,
    buttonLoading,
    buttonDisable,
  },
  setup() {
    let visibleCode1 = ref(false);
    let visibleCode2 = ref(false);
    let visibleCode3 = ref(false);
    let visibleCode4 = ref(false);
    let visibleCode5 = ref(false);
    let onClick = function () {
      console.log("works");
    };
    return {
      onClick,
      visibleCode1,
      visibleCode2,
      visibleCode3,
      visibleCode4,
      visibleCode5,
      buttonThemeMd,
    };
  },
};
</script>

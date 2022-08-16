<template>
  <button class="gulu-button" :class="classObj">
    <!-- <button class="gulu-button" :class="{ [`gulu-theme-${theme}`]: theme }"> -->
    <slot />
  </button>
</template>

<script lang="ts">
import { reactive } from "@vue/reactivity";
export default {
  props: ["theme"],
  setup(props) {
    const classObj = reactive({
      [`gulu-theme-${props.theme}`]: props.theme,
    });
    return {
      classObj,
    };
  },
};
</script>

<style lang="scss">
// $h是什么？指定变量，方便复用
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.gulu-button {
  border: 1px solid $border-color;
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  // 让行内元素也可以使用flex布局
  display: inline-flex;
  justify-content: center;
  align-items: center;
  // white-space 属性设置如何处理元素内的空白，now-rap代表，有剩余空白页不会换行，文本会再同一行上继续
  white-space: nowrap;
  background: white;
  color: $color;
  border-radius: $radius;

  box-shadow: 0 1px 0 fade-out(black, 0.95);
  // &代表当前处理的元素，这里是gulu-button
  //  + 代表相邻的选择器，所以这里的意思是，如果当前元素gulu-button，遇到了相邻的，同样也是gulu-button,就设置margin-left
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    // 不写这句的话，focus的时候会出现默认的黑边，而不是我设置的蓝边
    outline: none;
  }
  // 这段代码就是上面对focus的处理，这里是为乐兼容火狐浏览器
  &::-moz-focus-inner {
    border: 0;
  }
  // 设置链接按钮样式
  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &focus {
      color: lighten($blue, 10%);
    }
  }

  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
}
</style>

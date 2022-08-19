<template>
  <!-- 通过props接收的数据，就不会出现在attrs里面了 -->
  <button class="gulu-button" :class="classObj">
    <!-- span并没有随着我设置的默认值而变化 -->
    <div v-if="loading" class="gulu-loadingIndicator"></div>
    <slot />
  </button>
</template>

<script lang="ts">
import { reactive } from "@vue/reactivity";
// import { computed } from "@vue/runtime-core";
export default {
  // #region
  // props 完整写法，可设置默认值，指定类型，指定是否强制需要
  props: {
    theme: {
      default: "button",
    },
    size: {
      default: "normal",
    },
    level: {
      default: "normal",
    },
    loading: {
      default: false,
    },
  },
  //#endregion

  //props的数组接收方式
  // props: ["theme", "size", "level"],
  setup(props) {
    // 动态绑定class的对象写法
    const classObj = reactive({
      [`gulu-theme-${props.theme}`]: props.theme,
      [`gulu-size-${props.size}`]: props.size,
      [`gulu-level-${props.level}`]: props.level,
    });
    // 动态绑定class用计算属性，实际上还是对象写法
    // const classObj = computed(() => {
    //   return {
    //     [`gulu-theme-${props.theme}`]: props.theme,
    //     [`gulu-size-${props.size}`]: props.size,
    //   };
    // });

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
$red: red;
$grey: grey;
// -------------------------------------
// .gulu-button是共有的属性
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
  // 这行代码有什么用？
  transition: background 250ms;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  // &代表当前处理的元素，这里是gulu-button
  // + 代表相邻的选择器，所以这里的意思是，如果当前元素gulu-button，遇到了相邻的，同样也是gulu-button,就设置margin-left
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

  // 设置文本按钮样式
  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  // -----------下方为大小按钮-------------------
  // 这里的意思是，.gulu-button的同时，还时下面的class，进行以下操作
  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  // -----------下方为级别按钮------------------
  //  针对普通按钮类型

  // 为什么按钮类型，没有生效？因为我在父组件传数据的时候，么有写theme="button"，所以没有这个class
  &.gulu-theme-button {
    &.gulu-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  //  针对链接按钮类型
  &.gulu-theme-link {
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darden($red, 10%);
      }
    }
  }
  // 针对文本按钮类型
  &.gulu-theme-text {
    &.gulu-level-main {
      color: rgb(61, 220, 61);
      &:hover,
      &:focus {
        color: darken(rgb(247, 149, 21), 20%);
      }
    }
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darden($red, 10%);
      }
    }
  }
  // -----------下方为禁用按钮------------------
  &.gulu-theme-button {
    // 选择带有disable属性的所有元素
    &[disabled] {
      // 禁用cursor;
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }

  &.gulu-theme-link,
  &.gulu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  // -----------下方为加载中-----------------
  .gulu-loadingIndicator {
    width: 14px;
    height: 14px;
    margin-right: 4px;
    border-radius: 8px;
    display: block;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
  }
}
@keyframes gulu-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

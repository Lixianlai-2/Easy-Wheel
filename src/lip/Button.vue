<template>
  <!-- 添加相同的样式,然后添加动态样式 -->
  <button class="easy-button" :class="theme">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  // props接收数据的完整写法
  props: {
    theme: {
      // 指定接收类型
      type: String,
      // 指定默认值
      default: "button",
    },
  },
  // setup(props, context) {
  //   // 这里用到了展开运算符和剩余运算符,得到从父组件传递来的属性
  //   const { size, ...rest } = context.attrs;
  //   console.log(`rest`, rest);
  //   //context.attrs得到的是写什么数据？得到的是，未经过Props接收的，从父组件传递过来的属性
  //   console.log(`context.attrs@@`, context.attrs);
  //   return {
  //     size,
  //     rest,
  //   };
  // },
};
</script>

<style lang="scss">
// $h是什么？指定变量，方便复用
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.easy-button {
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
  // &代表当前处理的元素，这里是easy-button
  //  + 代表相邻的选择器，所以这里的意思是，如果当前元素easy-button，遇到了相邻的，同样也是easy-button,就设置margin-left
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
}
// .easy-button {
//   box-sizing: border-box;
//   height: $h;
//   padding: 0 12px;
//   cursor: pointer;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   white-space: nowrap;
//   background: white;
//   color: $color;
//   border: 1px solid $border-color;
//   border-radius: $radius;
//   box-shadow: 0 1px 0 fade-out(black, 0.95);
//   & + & {
//     margin-left: 8px;
//   }
//   &:hover,
//   &:focus {
//     color: $blue;
//     border-color: $blue;
//   }
//   &:focus {
//     outline: none;
//   }
//   &::-moz-focus-inner {
//     border: 0;
//   }

//   div {
//     border: 4px solid blue;
//     background-color: skyblue;
//   }

//   button {
//     padding: 10px;
//     border: 2px solid lightgreen;
//   }
// }
</style>

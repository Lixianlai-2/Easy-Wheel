<template>
  <!-- 添加相同的样式,然后添加动态样式 -->
  <button class="gulu-button" :class="theme">
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

<style scoped>
div {
  border: 4px solid blue;
  background-color: skyblue;
}

button {
  padding: 10px;
  border: 2px solid lightgreen;
}
</style>

<!-- v-bind的缩写是: 那么v-bind='rest' 代表着什么？ :rest ? -->

<template>
  <!-- 绑定动态属性size -->
  <div :size="size">
    <!-- 直接绑定从父组件传来的属性和事件 -->
    <button v-bind="$attrs">
      <!-- <button v-bind="rest"> -->
      <slot />
    </button>
  </div>

  <!-- <div class="这里是根元素">
    <button>
      <slot />
    </button>
  </div> -->
</template>

<script lang="ts">
export default {
  // 用于判断根元素继承属性,设置为否，继承的是从父组件传入的
  inheritAttrs: false,
  // props: ["onMouseover"],
  setup(props, context) {
    // 这里用到了展开运算符和剩余运算符,得到从父组件传递来的属性
    const { size, ...rest } = context.attrs;
    console.log(`rest`, rest);
    //context.attrs得到的是写什么数据？得到的是，未经过Props接收的，从父组件传递过来的属性
    console.log(`context.attrs@@`, context.attrs);
    return {
      size,
      rest,
    };
  },
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

<template>
  <!-- title是属性构成的数组，t就是单个属性 -->
  <div v-for="(t, index) in title" :key="index">
    {{ t }}
  </div>

  <!-- c就是defaults数组里面的对象，每一个c就代表一个标签，而:is='c'就是让这个component成为Tab组件 -->
  <component v-for="(c, index) in defaults" :key="index" :is="c"></component>
</template>

<script>
// 引入子组件
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    // defaults是一个包含对象的数组
    const defaults = context.slots.default();
    // 遍历数组，得到其中的对象，然后通过对象.type判断是否为某个Tab组件
    defaults.forEach((tag) => {
      // 判断Tabs组件中含有的标签，是否都是Tab
      if (tag.type !== Tab) {
        throw new Error("Tabs里面必须是Tab类型");
      }
    });

    // 得到子组件的属性,再得到其中的title(数组包含着)
    const title = defaults.map((item) => item.props.title);

    console.log(defaults);

    return {
      defaults,
      title,
    };
  },
};
</script>

<style scoped></style>

<template>
  <div class="gulu-tabs">
    <!-- 导航部分 -->
    <div class="gulu-tabs-nav">
      <!-- title是属性构成的数组，t就是单个title属性 -->
      <!-- 绑定class的对象写法，对象中的属性值的true代表class生效，false代表class不生效 -->
      <div
        :class="{ selected: t === selectedAttr }"
        class="gulu-tabs-nav-item"
        v-for="(t, index) in title"
        :key="index"
        @click="getTitle(t)"
      >
        这里是t:{{ t }}
      </div>
    </div>

    <div class="gulu-tabs-content">
      <!-- c就是defaults数组里面的对象，每一个c就代表一个标签，而:is='c'就是让这个component成为Tab组件，这里也相当于在使用自定义的插槽 -->
      <component
        v-for="(c, index) in defaults"
        :key="index"
        :is="c"
      ></component>
    </div>
  </div>

  <h2>selectedAttr{{ selectedAttr }}</h2>
</template>

<script>
// 引入子组件
import Tab from "./Tab.vue";
export default {
  props: ["selectedAttr"],
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

    const getTitle = (t) => {
      console.log(`getTitle:`, t);
      context.emit("changeSelectAttr", t);
    };

    return {
      defaults,
      title,
      getTitle,
    };
  },
};
</script>

<style lang="scss" scoped>
// 设置变量，方便复用
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
// -----------------------------
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>

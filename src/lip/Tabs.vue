<template>
  <div class="gulu-tabs">
    <!-- 导航部分 -->
    <div class="gulu-tabs-nav">
      <!-- 想要获得v-for遍历形成的html标签，ref声明时要用[] -->
      <div
        :class="{ selected: t === selectedAttr }"
        class="gulu-tabs-nav-item"
        v-for="(t, index) in title"
        ref="itemRefs"
        :key="index"
        @click="getTitle(t)"
      >
        {{ t }}
      </div>
      <!-- 想要获得这个HTML标签，可以用ref -->
      <div class="gulu-tabs-nav-indicator" ref="refIndicator"></div>
    </div>

    <div class="gulu-tabs-content">
      <!-- 使用component插槽 -->
      <component
        class="gulu-tabs-content-item"
        :is="current"
        :key="current.props.title"
      ></component>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
// 引入子组件
import Tab from "./Tab.vue";
export default {
  props: ["selectedAttr"],
  setup(props, context) {
    // 获得形成下划线的那个div标签
    const refIndicator = ref(null);
    // 获得v-for形成的引用对象，引用对象的value里面是遍历形成的html标签
    const itemRefs = ref([]);
    onMounted(() => {
      console.log(`itemRefs!!`, itemRefs);

      // 得到v-for所遍历形成的对象，这里面是html标签，也就是说，这里面有多个div
      const divs = itemRefs.value;

      // 找到被选中的那个div
      const selectedDiv = divs.filter((div) =>
        div.classList.contains("selected")
      )[0];

      // 得到被选中的那个导航Div的长度
      const { width } = selectedDiv.getBoundingClientRect();

      // 让下划线div的长度等于导航部分的长度
      refIndicator.value.style.width = width + "px";
    });

    // defaults是一个包含对象的数组
    const defaults = context.slots.default();
    // 遍历数组，得到其中的对象，然后通过对象.type判断是否为某个Tab组件
    defaults.forEach((tag) => {
      // 判断Tabs组件中含有的标签，是否都是Tab
      if (tag.type !== Tab) {
        throw new Error("Tabs里面必须是Tab类型");
      }
    });

    // 找到被点击的那个组件
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selectedAttr;
      })[0];
    });

    // 得到子组件的属性,再得到其中的title(数组包含着)
    const title = defaults.map((item) => item.props.title);

    // 得到title，把值传回TabsDemo组件
    const getTitle = (t) => {
      context.emit("update:selectedAttr", t);
    };

    return {
      defaults,
      title,
      getTitle,
      current,
      itemRefs,
      refIndicator,
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
    position: relative;
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
    &-indicator {
      // 相对nav定位
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>

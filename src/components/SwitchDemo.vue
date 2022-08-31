<template>
  <h1>Switch组件</h1>
  <div class="demo">
    <h2>普通切换</h2>
    <div class="demo-component">
      <Switch1Demo />
    </div>
    <div class="demo-actions">
      <Button @click="visibleCode1 = !visibleCode1">代码</Button>
    </div>
    <div class="demo-code show1" v-show="visibleCode1">
      <SwitchMd />
    </div>
  </div>

  <div class="demo">
    <h2>禁止切换</h2>
    <div class="demo-component">
      <Switch2Demo></Switch2Demo>
    </div>
    <div class="demo-actions">
      <Button @click="visibleCode2 = !visibleCode2">代码</Button>
    </div>
    <div class="demo-code show2" v-show="visibleCode2">
      <switchDisableMd />
    </div>
  </div>
</template>

<script>
import Button from "../lip/Button.vue";
import { ref } from "@vue/reactivity";
import Switch from "../lip/Switch.vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import SwitchMd from "../markdown/switch.md";
import switchDisableMd from "../markdown/switchDisable.md";

export default {
  components: {
    Switch,
    Button,
    Switch1Demo,
    Switch2Demo,
    SwitchMd,
    switchDisableMd,
  },
  setup() {
    let bool = ref(false);
    let visibleCode1 = ref(true);
    let visibleCode2 = ref(true);

    return {
      bool,
      // toggleCode,
      visibleCode1,
      visibleCode2,
    };
  },
};
</script>

<style lang="scss">
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    // 设置虚线
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>

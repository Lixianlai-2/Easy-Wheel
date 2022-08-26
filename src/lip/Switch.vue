<template>
  <!-- 增加一个有前缀的class -->
  <button
    class="gulu-switch"
    @click="toggle"
    :class="{ 'gulu-checked': value }"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
    disable: Boolean,
  },
  // emits: ["input"],
  setup(props, context) {
    let toggle = () => {
      if (props.disable) return;
      context.emit("update:value", !props.value);
    };
    return {
      toggle,
    };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  height: $h;
  width: $h * 2;
  border-radius: $h / 2;
  position: relative;
  border: none;
  background-color: #bfbfbf;
  // background-color: #0d8cff;
  &.gulu-checked {
    background-color: #0d8cff;
  }

  &.gulu-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }

  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.gulu-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
span {
  height: $h2;
  width: $h2;
  border-radius: $h2 / 2;
  background-color: #fefefe;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: all 250ms;
}
</style>

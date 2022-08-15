<template>
  <div>
    <button @click="toggle" :class="{ checked: value }"><span></span></button>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";

export default {
  props: {
    value: Boolean,
  },
  // emits: ["input"],
  setup(props, context) {
    let toggle = () => {
      // context.emit("input", !props.value);
      context.emit("update:value", !props.value);
    };
    return {
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border-radius: $h / 2;
  position: relative;
  border: none;
  background-color: #bfbfbf;
  // background-color: #0d8cff;
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
button.checked {
  background-color: #0d8cff;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}

button:focus {
  outline: none;
}
button:active {
  > span {
    width: $h2 + 4px;
  }
}
button.checked:active {
  > span {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}
</style>

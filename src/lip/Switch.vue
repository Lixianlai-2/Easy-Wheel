<template>
  <div>
    <button @click="toggle" :class="{ checked }"><span></span></button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let checked = ref(false);
    let toggle = () => {
      checked.value = !checked.value;
    };
    return {
      checked,
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
  background-color: grey;
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
}
button.checked {
  background-color: #0d8cff;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
</style>

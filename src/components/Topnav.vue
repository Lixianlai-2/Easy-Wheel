<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-chashan"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>文档</li>
    </ul>
    <svg
      v-show="toggleMenuVisible"
      class="toggleAside icon"
      @click="asideVisible = !asideVisible"
      aria-hidden="true"
    >
      <use xlink:href="#icon-cc-menu-circle"></use>
    </svg>
  </div>
</template>

<script>
import { inject, ref } from "@vue/runtime-core";
export default {
  name: "Topnav",
  props: ["toggleMenuVisible"],
  setup() {
    let asideVisible = inject("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss">
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }

    .toggleAside {
      display: inline-block;
    }
  }
}

.icon {
  font-size: 30px;
}
</style>

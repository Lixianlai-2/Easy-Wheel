<template>
  <div class="layout">
    <Topnav toggleMenuVisible="true" class="nav" />
    <div class="content">
      <aside v-show="asideVisible">
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/start">快速上手</router-link>
          </li>
          <h2 class="componentList">组件列表</h2>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li><router-link to="/doc/button">Button 组件</router-link></li>
          <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
          <li><router-link to="/doc/tabs">Tabs 组件</router-link></li>
        </ol>
      </aside>
      <main><router-view></router-view></main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "@vue/runtime-core";
import Topnav from "../components/Topnav.vue";
export default {
  name: "Doc",
  components: { Topnav },
  setup() {
    let asideVisible = inject<Ref<boolean>>("asideVisible");
    return {
      asideVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: #eeebee;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 1;
  .componentList {
    margin-top: 15px;
  }
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: #ffffff;
  }
}
main {
  overflow: auto;
}

.router-link-active {
  font-size: 18px;
  font-weight: bold;
  color: #42b883;
}
</style>

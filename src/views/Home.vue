<template>
  <div>
    <div class="topNavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Easy UI</h1>
        <h3>一个易学易用的 UI 框架</h3>
        <p class="actions">
          <a href="https://github.com/Lixianlai-2/Easy-Wheel" class="github"
            >GitHub</a
          >
          <router-link class="start" to="/doc/intro">开始</router-link>
        </p>
      </div>
    </div>
    <div class="feature">
      <ul>
        <li>
          <h3>基于Vue3</h3>
          <p>使用了Vue3 Component Api</p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Vue"></use>
          </svg>
        </li>
        <li>
          <h3>使用了Typescript</h3>
          <p>采用TypeScript书写</p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-typescript-def"></use>
          </svg>
        </li>
        <li>
          <h3>可读性强</h3>
          <p>代码清晰干净，容易理解</p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiajiabaojie-tubiao-"></use>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  name: "Home",
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
.topNavAndBanner {
  background: linear-gradient(
    118deg,
    rgba(241, 234, 236, 1) 0%,
    rgba(232, 238, 242, 1) 100%
  );

  // border-bottom-left-radius: 50% 60px;
  // border-bottom-right-radius: 50% 60px;
  clip-path: ellipse(80% 60% at 50% 40%);
}
.topnav {
  display: flex;
  padding: 16px;

  @media (min-width: 800px) {
    // background-color: #efebed3a;
    transition: border-color 0.5s, background-color 0.5s;
  }

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
  // #e7e7e7
  box-shadow: rgba(27, 31, 35, 0.11) 0px 1px 0px,
    rgb(255, 255, 255) 0px 1px 0px inset;
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3,
  .actions {
    margin-top: 20px;
  }

  h3 {
    color: #767676;
  }

  // background: rgb(237, 240, 250);
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 13px;
    }
  }
}

.actions .start {
  background-color: #43b97f;
  border: none;
  color: #e1fff9;
  font-weight: 600;
  &:hover,
  &:focus {
    background: darken(#43b97f, 5%);
  }
  // box-shadow: #e1fff9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}

.github {
  background-color: #fefbff9c;
  border: none;
  color: #476582;
  &:hover,
  &:focus {
    background: darken(#f1f1f1, 1%);
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.feature {
  margin: 64px auto;
  padding: 20px;
  width: 260px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 375px;
      margin: 16px 0;
      // padding-right: 20px;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}

.feature svg {
  font-size: 64px;
}
</style>

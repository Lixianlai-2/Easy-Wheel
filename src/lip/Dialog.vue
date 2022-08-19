<template>
  <div v-if="visible">
    <teleport to="body">
      <!-- 这部分内容是做mask-->
      <div class="gulu-dialog-overlay" @click="closeDialogMaskFn"></div>
      <div class="gulu-dialog-wrapper">
        <div class="gulu-dialog">
          <header>
            <slot name="title" />
            <span class="gulu-dialog-close" @click="closeDialog"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="main" @click="okDialog">确认</Button>
            <Button @click="cancelDialog">取消</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  // props: ["visible"],
  props: {
    visible: {
      default: false,
    },
    closeDialogMaskOrNot: {
      type: Boolean,
    },
    okDialog: {
      type: Function,
    },
    cancelDialog: {
      type: Function,
    },
  },
  components: { Button },

  setup(props, context) {
    let closeDialog = () => {
      // 通过这个自动更新事件，传递新的值给visible，这个值的改变是在DialogDemo里面进行操作的，我并没有在这里直接修改Props
      context.emit("update:visible", false);
    };

    // 用于点击遮罩层时关闭对话框
    let closeDialogMaskFn = () => {
      // 通过在DiaLogDemo中设置closeDialogMaskOrNot是true还是false,来决定点击遮罩层时是否关闭对话框
      if (props.closeDialogMaskOrNot) {
        console.log(`props.closeDialogMask@@`, props.closeDialogMask);
        closeDialog();
      }
    };

    let okDialog = () => {
      // 当这个方法存在，且执行之后的返回值不为false，才关闭弹窗
      if (props.okDialog && props.okDialog() !== false) {
        closeDialog();
      }
    };

    let cancelDialog = () => {
      // 注意跟attrs的区别，这里的作用是什么？
      // context.emit("cancelDialog");
      closeDialog();
    };
    return {
      closeDialog,
      closeDialogMaskFn,
      okDialog,
      cancelDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
// 设置基本变量，方便复用
$radius: 4px;
$border-color: #d9d9d9;
// ----------------------------------
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  // 设置遮罩层
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 1;
  }
  // 将弹窗相对viewport居中
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    // :before 选择器向选定的元素前插入内容。
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>

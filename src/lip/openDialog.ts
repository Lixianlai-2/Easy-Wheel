import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";

const openDialog = (options) => {
  // options是我在DialogDemo使用openDialog传入的参数
  const { title, content, okButton, cancelButton } = options;
  // 创造一个新的节点div
  const div = document.createElement("div");
  // 往文档中的body里，添加刚刚创建的div
  document.body.appendChild(div);

  const close = () => {
    // 卸载vue实例
    app.unmount(div);
    // 删除节点
    div.remove();
  };
  // 新建一个app实例
  const app = createApp({
    // 需要返回一个节点
    render() {
      // 这个h就相当于createElement
      return h(
        Dialog,
        // 第二个参数代表传递的props，模板中会用到
        {
          visible: true,
          // 事件监听器应以 onXxx 的形式书写
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          okButton,
          cancelButton,
        },
        // 第三个参数是子节点
        {
          title,
          content,
        }
      );
    },
  });
  // 把app实例挂载到div这个节点上，这样页面才会渲染
  app.mount(div);
};

export default openDialog;

/* eslint-disable no-param-reassign */

// 导入
import toast from './toast';
import notify from './notify';
import dialogs from './dialogs';
import Dialog from './dialogs/Dialogs.vue';

// 导入组件
const general = (Vue) => {
  Vue.prototype.$toast = toast;
  Vue.prototype.$notify = notify;
  Vue.prototype.$dialogs = dialogs;
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  general(window.Vue);
}

// export Dialog;

export {
  Dialog,
  general,
};

export default general;

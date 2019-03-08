/* eslint-disable no-param-reassign */

// 导入
import toast from './toast';
import notify from './notify';
import dialogs from './dialogs';

// 导入组件
const general = {};
general.install = (Vue) => {
  if (general.installed) return;
  general.installed = true;
  Vue.prototype.$toast = toast;
  Vue.prototype.$notify = notify;
  Vue.prototype.$dialogs = dialogs;
};
if (typeof window !== 'undefined' && window.Vue) {
  general.install(window.Vue);
}

export default general;

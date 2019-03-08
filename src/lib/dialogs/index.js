/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import Dialogs from './Dialogs.vue';

// 导入组件
function open(propsData) {
  const DialogsConstructor = Vue.extend(Dialogs);
  return new DialogsConstructor({
    el: document.createElement('div'),
    propsData,
  });
}
const dialogs = (params) => {
  const config = {
    ...params,
  };
  return open(config);
};
export default dialogs;

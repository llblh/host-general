/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import Notify from './Notify.vue';

// 导入组件
function open(propsData) {
  const NotifyConstructor = Vue.extend(Notify);
  return new NotifyConstructor({
    el: document.createElement('div'),
    data: propsData,
  });
}

const info = (content, duration = 2000) => {
  const config = {
    content,
    duration,
  };
  return open(config);
};

export default info;

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import Toast from './Toast.vue';

// 导入组件
function toast(propsData) {
  const ToastConstructor = Vue.extend(Toast);
  return new ToastConstructor({
    el: document.createElement('div'),
    data: propsData,
  });
}

const success = (content, duration = 2000) => {
  const config = {
    state: true,
    iconType: 'general-success',
    content,
    duration,
  };
  return toast(config);
};

const error = (content, duration = 2000) => {
  const config = {
    state: true,
    iconType: 'general-error',
    content,
    duration,
  };
  return toast(config);
};

const loading = (content) => {
  const config = {
    state: true,
    iconType: 'general-loading',
    content,
  };
  return toast(config);
};

const close = () => {
  const config = {
    state: false,
  };
  return toast(config);
};

export default {
  success,
  error,
  loading,
  close,
};

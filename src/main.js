/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import App from './App.vue';
import { Dialog, general } from './lib';

Vue.config.productionTip = false;
Vue.use(general);
Vue.component('DialogBox', Dialog);

new Vue({
  render: h => h(App),
}).$mount('#app');

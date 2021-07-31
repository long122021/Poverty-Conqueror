// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'

//import './assets/js/background.js'
import 'bfe-ui/lib/theme/index.css'
import './assets/common.css'

import BfeUI from 'bfe-ui'
import BfeCharts from 'bfe-charts'

import router from './router'
import utils from './utils'
import axios from 'axios'

//import VueI18n from 'vue-i18n'
//import messages from './i18n'
import VueJsonp from 'vue-jsonp'

Vue.use(BfeCharts)
//Vue.use(VueI18n)
Vue.use(VueJsonp)

Vue.prototype.$http = axios;
Vue.prototype.$utils = utils;

let Bus = new Vue();
Vue.prototype.$bus = Bus;

// const i18n = new VueI18n({
//   locale: 'zh',
//   messages
// })
// Vue.use(BfeUI, {
//   i18n: (key, opt) => {
//     i18n.t(key, opt)
//   }
// })
import locale from 'bfe-ui/lib/locale/lang/en.js'
Vue.use(BfeUI, {locale})

Vue.prototype.$message = function(msg) {
  return BfeUI.Message({
    ...msg,
    duration: 5000
  })
};
Vue.prototype.$message.error = function(msg) {
  return BfeUI.Message.error({
    message: msg,
    duration: 5000
  })
};
Vue.prototype.$message.errorAuto = function(msg) {
  return BfeUI.Message.error({
    message: msg,
    duration: 0,
    showClose: true,
    customClass: "err-msg-scroll",
    type: 'error'
  })
};
Vue.prototype.$message.warning = function(msg) {
  return BfeUI.Message.warning({
    message: msg,
    duration: 5000
  })
};
Vue.prototype.$message.info = function(msg) {
  return BfeUI.Message.info({
    message: msg,
    duration: 5000
  })
};
Vue.prototype.$message.success = function(msg) {
  return BfeUI.Message.success({
    message: msg,
    duration: 5000
  })
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //i18n,
  ...App
})

// vm.$watch(function() {
//   return this.$i18n.locale
// }, function(newVal) {
// })

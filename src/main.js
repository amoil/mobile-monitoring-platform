// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import 'babel-polyfill'
import axios from './api/apiConfig.js'
import FastClick from 'fastclick'
import './styles/index.scss'
import Echarts from 'vue-echarts'
Vue.component('chart', Echarts)
FastClick.attach(document.body)

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

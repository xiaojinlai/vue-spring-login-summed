import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router' //引入路由配置
import store from './store' //引入 Vuex 状态管理

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //使用路由配置
  store //使用 Vuex 进行状态管理
}).$mount('#app')
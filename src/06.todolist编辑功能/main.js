import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype

new Vue({
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this // 设置全局事件总线事件
  }
}).$mount('#app')

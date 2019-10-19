import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import './assets/css/normalize.css'
import './assets/css/border.css'



Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  render: h => h(App),
}).$mount('#app')

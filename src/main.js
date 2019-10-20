import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import 'style/reset.css'
import 'style/border.css'





Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  render: h => h(App),
}).$mount('#app')

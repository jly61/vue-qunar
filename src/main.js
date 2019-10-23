import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import 'style/reset.css'
import 'style/border.css'
import {Swiper, Slide} from 'vue-swiper-component'
import store from './store'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.component('Swiper', Swiper)
Vue.component('Slide', Slide)
new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')

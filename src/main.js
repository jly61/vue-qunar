import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import 'style/reset.css'
import 'style/border.css'
import {Swiper, Slide} from 'vue-swiper-component'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.component('Swiper', Swiper)
Vue.component('Slide', Slide)
new Vue({
  render: h => h(App),
}).$mount('#app')

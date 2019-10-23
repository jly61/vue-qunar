import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '成都'
    },
    mutations: {
        changeCity(state, city) {
            state.city = city
        }
    },
    actions: {
        actionChangeCity(context, city) {
            context.commit('changeCity', city)
        }
    }
})
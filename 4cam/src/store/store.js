import Vue from 'vue'
import Vuex from 'vuex'
import serviceAxios from '@/api/serviceAxios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        markets: []
    },
    mutations: {
        GET_MARKETS(state, markets) {
            state.markets = markets
        }
    },
    actions: {
        async getMarkets({commit}) {
            const res = await serviceAxios.getMarkets()
            const {data} = res
            commit('GET_MARKETS', data)
        }
    },
    getters: {
        getMarkets: (state) => state.markets
    }
})
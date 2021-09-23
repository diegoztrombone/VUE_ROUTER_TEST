import { createStore } from 'vuex'
import api from '../api/index'

export default createStore({
  state: {
    products: [
      
      
    ]
  },
  mutations: {
    setProducts(state, products) {
      console.log("setProducts", products)
      state.products = [...state.products, ...products]
    },

  },
  actions: {
    async getApi({ commit }) {
      const result = await api()
      console.log(">>>>", result)
      commit('setProducts', result)
    }
  },
  modules: {
  }
})

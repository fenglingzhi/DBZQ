import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    planeList: []
  },
  mutations: {
    planeList(state, vals) {
      state.planeList = vals
    }
  },
  actions: {

  }
})

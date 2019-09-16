import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    planeList: [],
    selectedTarget: null
  },
  mutations: {
    planeList(state, vals) {
      state.planeList = vals
    },
    selectedTarget(state, val) {
      state.selectedTarget = val
    },
    setSomeState(state, kval) {
      let [keyname, val] = kval
      if (typeof state[keyname] === 'undefined') throw new Error(`State:${keyname} should be defined before set`)
      state[keyname] = val
    }
  },
  actions: {

  }
})

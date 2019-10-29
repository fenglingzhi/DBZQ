import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    targetList: [],
    waringList: [],
    selectedTarget: null,
    selectinfoTarget: [],
    boundaryList:[],
    selectedArea:{
      air:'',
      sea:'',
      self:''
    }
  },
  mutations: {
    targetList(state, vals) {
      state.targetList = vals
    },
    warningList(state,val) {
      state.warningList = val
    },
    selectedTarget(state, val) {
      state.selectedTarget = val
    },
    setSomeState(state, kval) {
      let [keyname, val] = kval
      if (typeof state[keyname] === 'undefined') throw new Error(`State:${keyname} should be defined before set`)
      state[keyname] = val
    },
    selectinfoTarget(state, sival) {
      state.selectinfoTarget = sival
    },
    boundaryList(state, valB) {
      state.boundaryList = valB
    },
    selectedArea(state , valS){
      let data = Object.assign({},state.selectedArea,valS); 
      
      if(valS.air){
        data.air = valS.air
      }else if(valS.sea){
        data.sea = valS.sea
      }else{
        data.self = valS.self
      }
      state.selectedArea = data;
    }
  },
  actions: {

  }
})

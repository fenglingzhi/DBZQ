<template>
  <div id="app">
    <mapcan name="mainmap" :center="[100,31]" :zoom="4" style="height:100%">
      <tilelayer slot="baselayer" :id="`googlelayer`" url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=s&x={x}&y={y}&z={z}"></tilelayer>
      <uicomponent :position={top:10,left:10}>
        <filterwrap></filterwrap>
      </uicomponent>
      <uicomponent :position={top:10,right:10}>
        <button>{{test}}</button>
      </uicomponent>
      <uicomponent :position={bottom:10,left:10}>
        <button>{{test}}</button>
      </uicomponent>
    </mapcan>
  </div>
</template>

<script>
import ax from 'axios'
import Mapcan from './components/MapControl'
import Tilelayer from './components/Tilelayer'
import Uicomponent from './components/UIComponent'
import filterwrap from './components/filter.vue'
export default {
  name: 'app',
  components: { Mapcan, Tilelayer, Uicomponent, filterwrap },
  data() {
    return {
      test: false,
      title: '',
      list1: [],
      get_obj: {}
    }
  },
  methods: {
  },
  mounted () {
    let vm = this
    ax.post('/graphql', {
      query: `{
        test(){}
      }`
    }).then(r => {
      let resp = r.data.query
      this.test = r.data.query.test
      vm.title = resp.title
      vm.list1 = resp.arr
    })
  }
}
</script>

<style>

html,body{
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
}
</style>

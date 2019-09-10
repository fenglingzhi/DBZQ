<template>
  <div id="app">
    <mapcan name="mainmap" :center="[100,31]" :zoom="4" style="height:100%">
      <tilelayer slot="baselayer" :id="`googlelayer`" url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=s&x={x}&y={y}&z={z}"></tilelayer>
      <uicomponent :position={top:10,left:10}>
        <filterwrap></filterwrap>
      </uicomponent>
      <uicomponent :position={top:10,right:10}>
        <RelevantInformation></RelevantInformation>
      </uicomponent>
      <uicomponent :position={bottom:10,left:10}>
        <button  v-if="!show_TargetrDetail_boolean" @click="show_TargetrDetail">展开弹窗</button>
        <TargetrDetail v-if="show_TargetrDetail_boolean" @close_TargetrDetail = "close_TargetrDetail"></TargetrDetail>
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
import TargetrDetail from './components/TargetrDetail/TargetrDetail'
import RelevantInformation from './components/RelevantInformation/RelevantInformation'
export default {
  name: 'app',
  components: { Mapcan, Tilelayer, Uicomponent, filterwrap, TargetrDetail, RelevantInformation },
  data() {
    return {
      test: false,
      title: '',
      list1: [],
      get_obj: {},
      show_TargetrDetail_boolean: true
    }
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
.ivu-collapse>.ivu-collapse-item>.ivu-collapse-header{
  color: #fff !important;
}
.ivu-collapse-content{
  background-color: transparent !important;
}
</style>

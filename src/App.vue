<template>
  <div id="app">
    <mapcan name="mainmap" :center="[100,31]" :zoom="4" style="height:100%">
      <tilelayer slot="baselayer" :id="`googlelayer`" url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}"></tilelayer>
      <vectorlayer :id="`featurelayer`">
        <geometry v-for="plane in planeList" :id="plane.feature.id" :key="plane.id"
        :json="plane" :symbol="makeSymbol(plane.symbol)" @click="setSelected(plane)"/>
      </vectorlayer>
      <uicomponent :position={top:10,left:10}>
        <filterwrap></filterwrap>
      </uicomponent>
      <uicomponent :position={top:10,right:10}>
        <RelevantInformation v-if="show_RelevantInformation_boolean" :targetr_type="targetr_type" :targetr_id="targetr_id"></RelevantInformation>
      </uicomponent>
      <uicomponent :position={bottom:10,left:10}>
        <TargetrDetail v-if="show_TargetrDetail_boolean" :targetr_type="targetr_type" :targetr_id="targetr_id" @close_TargetrDetail = "close_TargetrDetail"></TargetrDetail>
        <!--<div>-->
          <!--<button @click="show_TargetrDetail('airplane')">飞机</button>-->
          <!--<button @click="show_TargetrDetail('ship')">船舶</button>-->
          <!--<button @click="show_TargetrDetail('satellite')">卫星</button>-->
          <!--<button @click="show_TargetrDetail('buoy')">浮标</button>-->
        <!--</div>-->
      </uicomponent>
    </mapcan>
  </div>
</template>

<script>
// import ax from 'axios'
import Mapcan from './components/MapControl'
import Tilelayer from './components/Tilelayer'
import Vectorlayer from './components/Vectorlayer'
import Geometry from './components/Geometry'
import Uicomponent from './components/UIComponent'
import filterwrap from './components/filter.vue'
import TargetrDetail from './components/TargetrDetail/TargetrDetail'
import RelevantInformation from './components/RelevantInformation/RelevantInformation'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'app',
  components: { Mapcan, Tilelayer, Vectorlayer, Geometry, Uicomponent, filterwrap, TargetrDetail, RelevantInformation },
  data() {
    return {
      show_TargetrDetail_boolean: true,
      show_RelevantInformation_boolean: true,
      targetr_type: 'airplane', // 下弹窗展示类型
      targetr_id: '0' // 下弹窗展示类型的id
    }
  },
  computed: {
    ...mapState(['planeList'])
  },
  methods: {
    ...mapMutations(['setSomeState']),
    setSelected(t) {
      this.setSomeState(['selectedTarget', t])
      this.show_TargetrDetail_boolean = true
      this.show_RelevantInformation_boolean = true
    },
    makeSymbol(symb) {
      Object.assign(symb, {
        markerFile: require('./assets/images/plane.png'),
        markerVerticalAlignment: 'middle',
        markerHorizontalAlignment: 'middle'
      })
      return [{
        'markerType': 'ellipse',
        'markerFill': 'rgb(235,0  ,24)',
        'markerFillOpacity': 0.4,
        'markerLineColor': '#34495e',
        'markerWidth': 20,
        'markerHeight': 20,
        'markerOpacity': 1
      }, symb]
    },
    // 关闭下弹窗
    close_TargetrDetail() {
      this.show_TargetrDetail_boolean = false
    },
    // 展开弹窗
    show_TargetrDetail(type) {
      this.targetr_type = type
      this.targetr_id = this.targetr_id + '-1'
      this.show_TargetrDetail_boolean = true
      this.show_RelevantInformation_boolean = true
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">

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
  /*.ivu-tag-geekblue .ivu-tag-text {*/
    /*color: #fff !important;*/
  /*}*/
}
.ivu-tabs-nav .ivu-tabs-tab-active{
  color: #fff !important;
}
.ivu-tabs-ink-bar{
  background-color: #fff !important;
}
.ivu-tabs-tab{
  color: #fff;
  background: transparent !important;
}

.ivu-tabs-nav .ivu-tabs-tab:hover {
  color: #FFF !important;
}
</style>

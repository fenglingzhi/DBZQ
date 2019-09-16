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
        <div>
          <button @click="show_TargetrDetail('airplane')">飞机</button>
          <button @click="show_TargetrDetail('ship')">船舶</button>
          <button @click="show_TargetrDetail('satellite')">卫星</button>
          <!-- <button @click="show_TargetrDetail('airplane')">浮标</button> -->
        </div>
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
      show_TargetrDetail_boolean: false,
      show_RelevantInformation_boolean: false,
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
    },
    makeSymbol(symb) {
      Object.assign(symb, {
        markerFile: require('./assets/images/plane.png'),
        // markerPath: [{path:"M995.679767 237.181951c-8.943231 1.490539-23.848617 2.981077-44.716157 4.471615-73.03639 8.943231-207.184862 26.829694-295.126638 38.754003l-19.377001 5.962154h-2.981077l-44.716157 13.414848c-4.471616-90.922853-10.43377-166.94032-17.886463-225.071325v-10.43377l22.358078-10.43377 70.055313-32.791849c2.981077-1.490539 4.471616-4.471616 4.471616-7.452693l1.490539-55.149927v-4.471615c0-2.981077-1.490539-5.962154-4.471616-4.471616l-114.77147 19.377001c-8.943231-22.358079-17.886463-34.282387-31.30131-35.772925h-1.490539c-13.414847 0-23.848617 11.924309-31.30131 35.772925l-114.77147-17.886463c-2.981077 0-4.471616 1.490539-4.471616 4.471616v4.471616l1.490539 55.149927c0 2.981077 1.490539 5.962154 4.471615 7.452693l70.055313 32.791849 22.358079 10.43377V76.203785c-5.962154 58.131004-10.43377 134.148472-14.905386 225.071324l-46.206696-13.414847h-4.471615l-19.377002-4.471616c-87.941776-10.43377-222.090247-26.829694-295.126637-35.772925-20.86754-2.981077-35.772926-4.471616-44.716158-4.471616-23.848617-2.981077-25.339156 26.829694-7.452692 37.263464 2.981077 1.490539 56.640466 29.810771 123.714701 67.074236v38.754003c0 14.905386 11.924309 26.829694 26.829695 26.829694s26.829694-11.924309 26.829694-26.829694v-8.943232c40.244541 20.86754 81.979622 43.225619 119.243086 64.093159v44.716157c0 14.905386 11.924309 26.829694 26.829694 26.829695s26.829694-11.924309 26.829694-26.829695v-14.905385c23.848617 11.924309 43.225619 23.848617 56.640466 31.30131-1.490539 174.393013 11.924309 308.541485 61.112082 332.390101 2.981077 1.490539 4.471616 1.490539 7.452693 2.981078 1.490539 0 4.471616 0 5.962154 1.490538h5.962154c1.490539 0 4.471616 0 5.962154-1.490538 2.981077 0 4.471616-1.490539 7.452693-2.981078 49.187773-23.848617 62.60262-157.997089 58.131005-332.390101 13.414847-7.452693 32.791849-17.886463 55.149927-29.810772v14.905386c0 14.905386 11.924309 26.829694 26.829694 26.829694s26.829694-11.924309 26.829695-26.829694v-44.716157c37.263464-20.86754 78.998544-43.225619 119.243085-65.583698V389.216885c0 14.905386 11.924309 26.829694 26.829695 26.829694s26.829694-11.924309 26.829694-26.829694v-44.716157c68.564774-37.263464 122.224163-67.074236 123.714702-68.564775 25.339156-10.43377 23.848617-41.73508-1.490539-38.754002z"}],
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

<template>
  <div id="app">
    <mapcan name="mainmap" :center="[100,31]" :zoom="4" style="height:100%">
      <tilelayer slot="baselayer" :id="`googlelayer`" :url-template="googleUrl"></tilelayer>
      <tilelayer :id="`googleLabellayer`" :url-template="gglLabelUrl"></tilelayer>
      <uicomponent :position={top:10,left:0}>
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
      show_TargetrDetail_boolean: false,
      show_RelevantInformation_boolean: false,
      targetr_type:'airplane',  //下弹窗展示类型
      targetr_id:'0',           //下弹窗展示类型的id
    }
  },
  methods: {
    googleUrl(x, y, z, s) {
      var burl = '/googlemap/vt?lyrs=s@852&gl=cn'
      // console.log(`${burl}&x=${x}&y=${y}&z=${z}`)
      // return `/googlemap/vt/pb=!1m4!1m3!1i${z}!2i${x}!3i${y}!2m2!1e5!2sshading!2m2!1e6!2scontours!2m3!1e0!2sm!3i480190268!3m8!3scn!5e1105!12m1!1e67!12m1!1e63!12m1!1e3!4e0!5m2!5f2!6b1`
      return `${burl}&x=${x}&y=${y}&z=${z}`
    },
    gglLabelUrl(x, y, z) {
      return `/googlemap/vt?lyrs=h@852&gl=cn&x=${x}&y=${y}&z=${z}`
    },
    // 关闭下弹窗
    close_TargetrDetail() {
      this.show_TargetrDetail_boolean = false
    },
    // 展开弹窗
    show_TargetrDetail(type) {
      this.targetr_type = type;
      this.targetr_id = this.targetr_id+"-1";
      this.show_TargetrDetail_boolean = true;
      this.show_RelevantInformation_boolean = true;
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
/*.ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {*/
  /*border-color: #57a3f3!important;*/
/*}*/
.ivu-tabs-nav .ivu-tabs-tab:hover {
  color: #FFF !important;
}
</style>

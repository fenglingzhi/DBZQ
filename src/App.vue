<template>
  <div id="app">
    <mapcan v-if="warning" name="mainmap" :center="[100,31]" :zoom="4" style="height:100%">
      <tilelayer slot="baselayer" :id="`googlelayer`" url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}"></tilelayer>
      <vectorlayer :id="`featurelayer`">
        <geometry v-for="target in targetList" :id="target.feature.id" :key="target.id"
        :json="target" :symbol="makeSymbol(target)" @click="setSelected(target)"/>
      </vectorlayer>
    </mapcan>
    <mapcan v-else name="mainmap" :center="[100,31]" :zoom="4" style="height:100%">
      <tilelayer slot="baselayer" :id="`googlelayer`" url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}"></tilelayer>
      <vectorlayer :id="`featurelayer`">
        <geometry v-for="target in targetList" :id="target.feature.id" :key="target.id"
        :json="target" :symbol="makeSymbol(target)" @click="setSelected(target)"/>
      </vectorlayer>
      <Routeplayer v-if="route" :symbol="route.symbol" :start="route.start" :end="route.end" @finished="playOver"/>
      <uicomponent :position={top:10,left:10}>
        <filterwrap></filterwrap>
      </uicomponent>
      <uicomponent :position={top:10,right:10}>
        <RelevantInformation v-if="show_RelevantInformation_boolean"
                             :targetr_type="selectedTarget && selectedTarget.targetType"
                             :targetr_id="targetr_id"
                             :targetr_info="targetr_info"
                             :spinShow="spinShow"></RelevantInformation>
      </uicomponent>
      <uicomponent :position={bottom:10,left:10}>
        <!-- <TargetrDetail v-if="show_TargetrDetail_boolean" :targetr_type="targetr_type" :targetr_id="targetr_id" @close_TargetrDetail = "close_TargetrDetail"></TargetrDetail> -->
        <TargetrDetail v-if="show_TargetrDetail_boolean"
                       :targetr_type="selectedTarget && selectedTarget.targetType"
                       :targetr_id="targetr_id"
                       :targetr_info="targetr_info"
                       :spinShow="spinShow"
                       @close_TargetrDetail = "close_TargetrDetail"></TargetrDetail>
        <!--<div>-->
          <!--<button @click="show_TargetrDetail('airplane')">飞机</button>-->
          <!--<button @click="show_TargetrDetail('ship')">船舶</button>-->
          <!--<button @click="show_TargetrDetail('satellite')">卫星</button>-->
          <!--<button @click="show_TargetrDetail('buoy')">浮标</button>-->
        <!--</div>-->
      </uicomponent>
    </mapcan>
    <div class="warning" :class="{'warning_true':warning === true}">
      <div class="title" v-if="warning" @click="change_warning()">预警模式</div>
      <div class="title" v-if="!warning" @click="change_warning()">正常模式</div>
    </div>
  </div>
</template>

<script>
// import ax from 'axios'
import Mapcan from './components/MapControl'
import Tilelayer from './components/Tilelayer'
import Vectorlayer from './components/Vectorlayer'
import Routeplayer from './components/Routeplayer'
import Geometry from './components/Geometry'
import Uicomponent from './components/UIComponent'
import filterwrap from './components/filter.vue'
import TargetrDetail from './components/TargetrDetail/TargetrDetail'
import RelevantInformation from './components/RelevantInformation/RelevantInformation'
import { mapState, mapMutations } from 'vuex'
import { SVG, executeGQL } from './commons'
const GQL = {
  queryPlaneByID: { query: `query($pid:ID!){
    target(id:$pid){
      ... on Plane{
        targetType: __typename,
        id,
        name,
        ICAO,
        kind { label },
        usage{ label },
        registration,
        ORG {
          cname,
          ename,
          abbr,
          code,
          type,
          country{
            cname
          },
          business,
          superior { cname },
          leader {
            name,
            nation,
            gender,
            birthday,
            nickname,
            country { cname },
            faith,
            job,
            EDU,
            city
          },
          homepage
        },
        radar{
          model
          responseCode
        },
        action{
          originated {
            name,
            code,
            type,
            address {
              position,
              country { cname }
             },
            openDate,
            level,
            area,
            parkCount
          }
          landing{
            name,
            address {
              position,
              country { cname }
            }
          },
          ETD,
          ETA,
          lon,
          lat,
          alt,
          horSpeed,
          vetSpeed,
          azimuth
        },
        history{
          originated {
            name,
            code,
            type,
            address {
              position,
              country { cname }
             },
            openDate,
            level,
            area,
            parkCount
          }
          landing{
            name,
            address {
              position,
              country { cname }
            },
          },
          ETD,
          ETA,
          lon,
          lat,
          alt,
          horSpeed,
          vetSpeed,
          azimuth,
          track {
            lon, lat, alt, horSpeed, vetSpeed, timestamp, azimuth
          }
        }
      }
      ... on Ship{
        targetType: __typename,
        id,
        name,
        usage { typeid },
        MMSI,
        ORG { cname },
        country { cname },
        status,
        tonnage,
        width,
        length,
        height,
        maxSpeed,
        phone
      }
      ... on Satellite{
        name,
        country { cname },
        usage { label },
        manufacturer { cname },
        NORAD,
        perigee,
        apogee,
        launchDate,
        launchSite { city },
        drySass
      }
    }
  }`
  }
}
export default {
  name: 'app',
  components: { Mapcan, Tilelayer, Vectorlayer, Geometry, Routeplayer, Uicomponent, filterwrap, TargetrDetail, RelevantInformation },
  data() {
    return {
      show_TargetrDetail_boolean: false,
      show_RelevantInformation_boolean: false,
      targetr_type: 'airplane', // 下弹窗展示类型
      targetr_id: '0', // 下弹窗展示类型的id
      targetr_info: {},
      spinShow: true,
      route: null,
      warning: false // 预警标志
    }
  },
  computed: {
    ...mapState(['targetList']),
    ...mapState(['selectedTarget'])
  },
  watch: {
    targetr_id() {
      this.get_info()
    },
    selectedTarget() {
      this.get_info()
    }
  },
  methods: {
    ...mapMutations(['setSomeState']),
    setSelected(t) {
      this.setSomeState(['selectedTarget', t])
      this.show_TargetrDetail_boolean = true
      this.show_RelevantInformation_boolean = true
      this.get_info()
    },
    makeSymbol(target) {
      let symb = target.symbol
      Object.assign(symb, {
        markerType: 'path',
        markerPathWidth: 1024,
        markerPathHeight: 1024,
        markerFill: '#6fa8dc',
        markerWidth: 20,
        markerHeight: 20,
        markerPath: SVG[target.targetType],
        markerVerticalAlignment: 'middle',
        markerHorizontalAlignment: 'middle'
      })
      return [symb]
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
    },
    // 获取目标
    get_info() {
      this.spinShow = true
      executeGQL(GQL.queryPlaneByID, { pid: this.selectedTarget.id }).then(r => {
        this.spinShow = false
        this.targetr_info = r.target
      })
    },
    playOver() {
      this.route = null
    },
    change_warning(){
      this.warning = !this.warning
      if(this.warning === false){
        location.reload()
      }

    }
  },
  mounted() {
    this.$root.mq.$on('routePlay', (e) => {
      let start = e.originated.address.position
      let end = e.landing.address.position
      this.route = { start, end, symbol: {
        markerType: 'path',
        markerPathWidth: 1024,
        markerPathHeight: 1024,
        markerFill: '#ffff00',
        markerWidth: 30,
        markerHeight: 30,
        markerPath: SVG['Plane'],
        markerVerticalAlignment: 'middle',
        markerHorizontalAlignment: 'middle'
      } }
    })
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
  .warning{
    position: fixed;
    z-index: 99999;
    top: 0;
    color: #fff;
    background: rgba(0,0,0,0.6);
    padding: 10px;
    border-radius: 4px;
    left: 50%;
    margin-left: -30px;
    cursor: pointer;
    border: 1px solid #009bef;
    box-shadow: 0 0 20px 2px #009bef;
  }
  .warning_true{
    box-shadow: 0 0 20px 2px red;
    border-color: red;
  }
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

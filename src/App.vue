<template>
  <div id="app">
    <mapcan v-if="warning" name="mainmap0" :center="[100,31]" :zoom="4" style="height:100%" key="0">
      <tilelayer slot="baselayer" :id="`googlelayer`" url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}"></tilelayer>
      <vectorlayer :id="`featurelayer`">
        <geometry v-for="target in waringList" :id="target.feature.id" :key="target.id"
        :json="target" :symbol="makeWarningSymbol(target)" @click="setSelectedWaring"/>
      </vectorlayer>
      <uicomponent :position={top:10,left:10}>
        <filterwarning></filterwarning>
      </uicomponent>
    </mapcan>
    <mapcan v-else name="mainmap1" :center="[100,31]" :zoom="4" style="height:100%" key="1">
      <tilelayer slot="baselayer" :id="`googlelayer`" url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}"></tilelayer>
      <vectorlayer :id="`featurelayer`">
        <geometry v-for="target in targetList" :id="target.feature.id" :key="target.id"
        :json="target" :symbol="makeSymbol(target)" @click="setSelected($event,target)"/>
      </vectorlayer>
      <Routeplayer v-if="route" :unitTime="route.unitTime" :status="playStatus" :lineSymbol="route.lineSymbol" :markerSymbol="route.markerSymbol" :path="route.path" @finished="playOver"/>
      <uicomponent :position={top:10,left:10}>
        <filterwrap></filterwrap>
      </uicomponent>
      <uicomponent :position={top:10,right:10}>
        <RelevantInformation :targetr_type="selectedTarget && selectedTarget.targetType"
                             :targetr_id="targetr_id"
                             :targetr_info="targetr_info"
                             :spinShow="spinShow"
                             :show_RelevantInformation_boolean="show_RelevantInformation_boolean"
                             :tab_show_Relevant="tab_show_Relevant"
                             @close_RelevantInformation = "close_RelevantInformation"></RelevantInformation>
      </uicomponent>
      <uicomponent :position={bottom:10,left:10} style="z-index: 9999">
        <TargetrDetail :targetr_type="selectedTarget && selectedTarget.targetType"
                       :targetr_id="targetr_id"
                       :targetr_info="targetr_info"
                       :spinShow="spinShow"
                       :show_TargetrDetail_boolean="show_TargetrDetail_boolean"
                       @close_TargetrDetail = "close_TargetrDetail"
                       @change_Relevant = "change_Relevant"></TargetrDetail>
      </uicomponent>
    </mapcan>
    <div class="tab_wrap">
      <div class="warning" :class="{'warning_true':warning === false}">
        <!--<div class="title" @click="change_warning()">{{warning ? '预警': '正常'}}模式</div>-->
        <div class="title" @click="change_warning()">正常模式</div>
      </div>
      <div class="warning warning_right" :class="{'warning_true':warning === true}">
        <!--<div class="title" @click="change_warning()">{{warning ? '预警': '正常'}}模式</div>-->
        <div class="title" @click="change_warning()">预警模式</div>
      </div>
    </div>
    <div class="notice" :class="{'notice_show': nitice_flag === true}">
      <div class="close" @click="closeNnotice">
        <Icon type="ios-close" />
      </div>
      <div class="content">
        {{notice}}
      </div>
    </div>
     <Button style="position: absolute;top: 0;right: 0;" type="primary" @click="open(false)">警告触发</Button>
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
import MapTip from './components/MapTip'
import filterwrap from './components/filter.vue'
import filterwarning from './components/filterWarning'
import TargetrDetail from './components/TargetrDetail/TargetrDetail'
import RelevantInformation from './components/RelevantInformation/RelevantInformation'
import { mapState, mapMutations } from 'vuex'
import { SVG, executeGQL, gql } from './commons'
import { delay,sample } from 'lodash'
const GQL = {
  queryPlaneByID: { query: gql`query($pid:ID!){
    target(id:$pid){
      ... on Plane{
        targetType: __typename,
        id, name, ICAO,
        kind { label },
        usage{ label },
        registration,
        ORG {
          cname, ename, abbr, code, type,
          base{ country{ cname } },
          business,
          superior { cname },
          leader {
            name, nation, gender, birthday, nickname,
            country { cname },
            faith, job, EDU, city
          },
          homepage
        },
        radar{ model, responseCode },
        action{
          originated { name, code,
            usage{ label },
            address {
              position,
              country { cname }
            },
            openDate, level, area, parkCount
          }
          landing{
            name,
            address { country { cname } }
          },
          ETD, ETA, lon, lat, alt, horSpeed, vetSpeed, azimuth
        },
        history{
          originated {
            name, code,
            usage{ label },
            address {
              position,
              country { cname }
            },
            openDate, level, area, parkCount
          }
          landing{
            name,
            address {
              position,
              country { cname }
            }
          },
          ETD, ETA, lon, lat, alt, horSpeed, vetSpeed, azimuth,
          track{ lon, lat, alt, timestamp, horSpeed, vetSpeed, azimuth }
        },
        news{ title, content, source, timestamp
        },
        nearby{
          name, code,
          usage{ label },
          address{ country{ cname } },
          openDate, level, area, parkCount,
          recent{
            action{
              originated { name }
              landing{ name },
              ETD, ETA, lon, lat
            }
          }
        }
      }
      ... on Ship{
        targetType: __typename,
        id, name,
        usage { label },
        MMSI,
        ORG {
          cname, ename, abbr, code, type,
          base { country{ cname } },
          business,
          superior { cname },
          leader {
            name,nation,gender,birthday,nickname,
            country { cname },
            faith,job,EDU,city
          },
          homepage
        },
        country { cname },
        status,tonnage,width,length,height,maxSpeed,phone,
        history{
          heading,ending,ETD,status,lon,lat,
          draught,
          loading{ name },
          destination{ name }
          ETA
        },
        news{ title, content, source, timestamp },
        nearby{
          name, code,
          usage{ label },
          address{ country{ cname } },
          goods, capacity,
          operator{ cname },
          phone,
          recent{
            action{
              loading{ name },
              destination{ name },
              ETA, lon, lat
            }
          }
        }
      }
      ... on Satellite{
        name,
        country { cname },
        usage { label },
        manufacturer { cname },
        NORAD, perigee, apogee, launchDate,
        launchSite { city },
        drySass,
        action{ RCS, lon, lat, geocentric, speed, GMT }
      }
    }
  }`
  },
  freshWarning: { query: gql`
    query($type:String!){
      targetList: filterTargets(targetType:$type,size:5) {
        ...on Plane{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
        ...on Ship{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
        ...on Satellite{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
      }
    }`
  }
}
export default {
  name: 'app',
  components: { Mapcan, MapTip, Tilelayer, Vectorlayer, Geometry, Routeplayer, Uicomponent, filterwrap, TargetrDetail, RelevantInformation, filterwarning },
  data() {
    return {
      show_TargetrDetail_boolean: false,
      show_RelevantInformation_boolean: false,
      targetr_type: 'airplane', // 下弹窗展示类型
      targetr_id: '0', // 下弹窗展示类型的id
      targetr_info: {},
      spinShow: true,
      route: null,
      playStatus: '',
      waringList: [],
      hideTip: false,
      selectedGeo: null,
      warning: false, // 预警标志
      tab_show_Relevant: 'installation',
      notice: '这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息',
      nitice_flag: false
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
    selectedTarget(n, o) {
      this.get_info()
    }
  },
  methods: {
    ...mapMutations(['setSomeState']),
    setSelected(p, t) {
      this.selectedGeo && this.selectedGeo.updateSymbol({
        markerWidth: 25,
        markerHeight: 25,
        markerFill: '#f2e239'
      })
      p.target.updateSymbol({
        markerWidth: 35,
        markerHeight: 35,
        markerFill: '#ff8000'
      })
      this.selectedGeo = p.target
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
        markerFill: '#f2e239',
        markerWidth: 25,
        markerHeight: 25,
        markerPath: SVG[target.targetType],
        markerVerticalAlignment: 'middle',
        markerHorizontalAlignment: 'middle'
      })
      return [symb]
    },
    makeWarningSymbol(target) {
      let symb = target.symbol
      Object.assign(symb, {
        markerType: 'path',
        markerPathWidth: 1024,
        markerPathHeight: 1024,
        markerFill: '#ff0000',
        markerWidth: 25,
        markerHeight: 25,
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
    close_RelevantInformation() {
      this.show_RelevantInformation_boolean = false
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
      this.playStatus = 'remove'
      this.route = null
    },
    change_warning() {
      this.warning = !this.warning
      if (this.warning === false) {
        location.reload()
      }
    },
    change_Relevant(value) {
      this.tab_show_Relevant = value
    },
    open (data) {
      this.nitice_flag = true
    },
    closeNnotice() {
      this.nitice_flag = false
    },
    setSelectedWaring () {
      this.$Notice.open({
        title: '警告标题',
        desc: sample([
        '民航N1217A在韩国当前从美国檀香山机场，飞往韩国大邱国际机场，期间在群山基地停留，请各方注意！',
        '民航PR1811 当前从菲律宾达沃机场出发，飞往日本横田机场，运动轨迹与美EP-3型侦察机相似，疑似有伪装侦察行为，请各方注意']),
        duration: 4 //弹窗显示时间，设为0为永久显示
      });
    }
  },
  mounted() {
    this.$root.mq.$on('routePlay', (e) => {
      if (this.playStatus === 'play') return (this.playStatus = 'pause')
      if (this.playStatus === 'pause') return (this.playStatus = 'play')
      this.playStatus = 'remove'
      delay(() => {
        this.route = { path: e.track.map(p => ([ p.lon, p.lat, p.timestamp ])),
          unitTime: 100,
          markerSymbol: {
            markerType: 'path',
            markerPathWidth: 1024,
            markerPathHeight: 1024,
            markerFill: '#ff8000',
            markerWidth: 35,
            markerHeight: 35,
            markerPath: SVG['Plane'],
            markerVerticalAlignment: 'middle',
            markerHorizontalAlignment: 'middle'
          },
          lineSymbol: { lineColor: { type: 'linear', colorStops: [ [0.00, 'white'], [1 / 4, 'aqua'], [2 / 4, 'green'], [3 / 4, 'orange'], [1.00, 'red'] ] } }
        }
        this.playStatus = 'play'
      }, 1000)
    })
    this.intv = setInterval(async () => {
      // let ret = await executeGQL(GQL.freshWarning, { type: 'Plane' })
      let ret = await executeGQL(GQL.freshWarning, { type: 'PlaneWaring' })
      // debugger
      this.waringList = ret.targetList
    }, 5000)
  }
}
</script>

<style lang="scss">
  .tab_wrap{
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 50%;
    width: 140px;
    display: flex;
    justify-content: space-evenly;
    margin-left: -70px;
    padding: 4px;
    background: rgba(0,0,0,0.6);
    border-radius: 20px;
    border: 1px solid #009bef;
    box-shadow: 0 0 20px 2px #009bef;
  }
  .notice{
    position: fixed;
    z-index: 99999;
    top: -110px;
    right: 10px;
    width: 300px;
    height: 100px;
    padding: 0 10px;
    background: rgba(0,0,0,0.6);
    border: 1px solid #009bef;
    box-shadow: 0 0 20px 2px #009bef;
    color: #fff;
    transition: all 1s linear;
    overflow: hidden;
    .close{
      font-size: 20px;
      float: right;
      cursor: pointer;
      margin-top: -6px;
    }
    .content{
      clear: both;
      height: 60px;
      padding-right: 12px;
      margin-right: -30px;
      overflow: auto;
    }
  }
  .notice_show{
    top: 10px;
  }
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
    color: #fff;
    padding: 4px 6px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    cursor: pointer;
  }
  .warning_right{
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .warning_true{
    background: #2196f3;
    /*box-shadow: 0 0 20px 2px red;*/
    /*border-color: red;*/
  }
  .ivu-notice{
    box-shadow: 0 0 20px 2px #009bef !important;
  }
}
.ivu-tabs-nav .ivu-tabs-tab-active{
  color: rgb(251, 255, 0) !important;
}
.ivu-tabs-ink-bar{
  background-color: #fff !important;
}
.ivu-tabs-tab{
  color: #fff;
  background: transparent !important;
  margin-right: 14px !important;
}

.ivu-tabs-nav .ivu-tabs-tab:hover {
  color: #FFF !important;
}
.ivu-tabs-nav-container,
.ivu-table-header thead>tr {
  font-size: 18px !important;
}
.ivu-table-header thead>tr {
  line-height: 1 !important;
}
.ivu-tabs-nav-scrollable {
  padding: 0 !important;
}
</style>

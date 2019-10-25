<template>
  <div id="app">
    <mapcan v-if="warning" name="mainmap0" :center="[100,31]" :zoom="4" style="height:100%" key="mainmap0">
      <tilelayer slot="baselayer" :id="`googlelayer`" url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}"></tilelayer>
      <vectorlayer :id="`featurelayer`">
        <geometry v-for="target in waringList" :id="target.feature.id" :key="target.id"
        :json="target" :symbol="makeWarningSymbol(target)" @click="setSelectedWaring($event,target)"/>
        <geometry v-for="target in waringList" :id="'track_'+target.id" :key="'track_'+target.id" type="LineString"
        :symbol="{ lineColor: { type: 'linear', colorStops: [ [0.00, 'white'], [1 / 4, 'aqua'], [2 / 4, 'green'], [3 / 4, 'orange'], [1.00, 'red'] ] } }"
        :coordinations="target.action.track.map(t=>([t.lon,t.lat]))"/>
      </vectorlayer>
      <uicomponent :position={top:10,left:10}>
        <filterwarning></filterwarning>
      </uicomponent>
    </mapcan>
    <mapcan v-else name="mainmap1" :center="centerXY" :zoom="4" style="height:100%" key="mainmap1">
      <tilelayer slot="baselayer" :id="`googlelayer`" :url-template="maptiles"></tilelayer>
      <vectorlayer id="boundarylayer">
        <geometry v-for="boundary in boundaryList" :id="boundary.id" :key="boundary.id"
          :json="boundary" :symbol="{ lineColor : '#34495e', lineWidth : 2, polygonFill : 'rgb(135,196,240)',polygonOpacity : 0.3 }"></geometry>
      </vectorlayer>
      <vectorlayer :id="`featurelayer`">
        <geometry v-for="target in targetList" :id="target.feature.id" :key="target.id"
        :json="target" :symbol="makeSymbol(target)" @click="setSelected($event,target)"/>
        <geometry :id="selectinfoTarget.name"
        v-if="selectinfoTarget.code !== undefined"
        :json="selectinfoTarget" :symbol="makeSymbol(selectinfoTarget)" @click="setSelected($event,selectinfoTarget)"/>
      </vectorlayer>
      <Routeplayer v-if="route" :direction="selectedtype === 'Plane'" :unitTime="route.unitTime" :status="playStatus" :lineSymbol="route.lineSymbol" :markerSymbol="route.markerSymbol" :path="route.path" @finished="playOver"/>
      <uicomponent :position={top:10,left:10}>
        <filterwrap @change_filter_show = "change_filter_show"></filterwrap>
      </uicomponent>
      <uicomponent :position={top:10,right:10}>
        <RelevantInformation :targetr_type="selectedTarget && selectedTarget.targetType"
                             :targetr_id="targetr_id"
                             :targetr_info="targetr_info"
                             :spinShow="spinShow"
                             :filter_show = "filter_show"
                             :status="playStatus"
                             :show_RelevantInformation_boolean="show_RelevantInformation_boolean"
                             :tab_show_Relevant="tab_show_Relevant"
                             :show="show_RelevantInformation_filter"
                             @close_RelevantInformation = "close_RelevantInformation"
                             @change_filter_RelevantInformation="change_filter_RelevantInformation"></RelevantInformation>
      </uicomponent>
      <uicomponent :position={bottom:0,left:10} style="z-index: 9999">
        <TargetrDetail ref="TargetrDetail"
                       :targetr_type="selectedTarget && selectedTarget.targetType"
                       :targetr_id="targetr_id"
                       :targetr_info="targetr_info"
                       :spinShow="spinShow"
                       :filter_show = "filter_show"
                       :show_TargetrDetail_boolean="show_TargetrDetail_boolean"
                       :status="playStatus"
                       :show="show_TargetrDetail_filter"
                       :detailchar="detailchar"
                       @close_TargetrDetail = "close_TargetrDetail"
                       @change_Relevant = "change_Relevant"
                       @change_filter_TargetrDetail="change_filter_TargetrDetail"></TargetrDetail>
      </uicomponent>
      <uicomponent :position={bottom:5,left:5} style="z-index: 9999;">
        <div style="z-index: 9999; width: 74px; height: 58px; border: 1px solid #2b92d4; box-shadow: 0 0 10px 2px #009bef; line-height: 1; border-radius: 5px;">
          <img v-if="maptiles == '/maptiles/vt?lyrs=y@852&gl=cn&t=p&x={x}&y={y}&z={z}' " src="./assets/images/swImage.png" alt="" style="border-radius: 5px;"
          @click="maptiles = '/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}'">
          <img v-else src="./assets/images/swRoad.png" alt=""
          @click="maptiles = '/maptiles/vt?lyrs=y@852&gl=cn&t=p&x={x}&y={y}&z={z}'">
          <!-- <img :src="maptiles == '/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}' ? './assets/images/swImage.png':'./assets/images/swImage.png'" alt=""> -->
        </div>
        <!-- <transition name="layerswitch">
          <div v-if="showSwitchLayer" @mouseleave="showSwitchLayer=false">
          <Button type="info" @click="maptiles = '/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}'">影像图</Button>
          <Button type="info" @click="maptiles = '/maptiles/vt?lyrs=y@852&gl=cn&t=p&x={x}&y={y}&z={z}'">地形图</Button>
          </div>
        </transition> -->
      </uicomponent>
    </mapcan>
    <!--<div class="tab_wrap" :class="{'tab_wrap_warning':warning === true}">-->
      <div class="tab_wrap">
      <!--<div class="warning" :class="{'warning_true':warning === false}">-->
        <!--<div class="title" @click="change_warning()">正常模式</div>-->
      <!--</div>-->
      <!--<div class="warning warning_right" :class="{'warning_color':warning === true}">-->
        <!--<div class="title" @click="change_warning()">预警模式</div>-->
      <!--</div>-->
        <i-switch size="large" @on-change="change_warning">
          <span slot="open">预警</span>
          <span slot="close">正常</span>
        </i-switch>
    </div>
    <div class="notice" :class="{'notice_show': nitice_flag === true}">
      <div class="close" @click="closeNnotice">
        <Icon type="ios-close" />
      </div>
      <div class="content">
        {{notice}}
      </div>
    </div>
    <div class="clock">
      <span>天文时间</span>
      <Divider type="vertical" />
      <span class="date">{{ date }}</span>
      <span class="time" style="margin-left: 10px;margin-right: 50px">{{ time }}</span>
      <span style="color:red">作战时间</span>
      <Divider type="vertical" />
      <span class="date" style="color:red">{{ date }}</span>
      <span class="time" style="margin-left: 10px;color:red">{{ time }}</span>
    </div>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue.min.js"></script>

<script>
// import ax from 'axios'
import Mapcan from './components/MapControl'
import Tilelayer from './components/Tilelayer'
import Vectorlayer from './components/Vectorlayer'
import Routeplayer from './components/Routeplayer'
import Geometry from './components/Geometry'
import Uicomponent from './components/UIComponent'
// import MapTip from './components/MapTip'
import filterwrap from './components/filter.vue'
import filterwarning from './components/filterWarning'
import TargetrDetail from './components/TargetrDetail/TargetrDetail'
import RelevantInformation from './components/RelevantInformation/RelevantInformation'
import { mapState, mapMutations } from 'vuex'
import { SVG, executeGQL, gql } from './commons'
import { delay, sample } from 'lodash'
const GQL = {
  boundaryList: { query: gql`{
    boundaryList{
      type
      properties
      geometry{
        coordinates
        type
      }
    }
  }`
  },
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
          targetType: __typename,
          id,name, code,
          usage{ label },
          address{
            position,
            country{ cname }
          },
          openDate, level, area, parkCount,
          recent{
            action{
              originated { name }
              landing{ name },
              ETD, ETA, lon, lat
            }
          },
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol
        }
      },
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
          parking{ name },
          destination{ name }
          ETA,
          track{
            lon,
            lat,
            alt,
            timestamp,
            horSpeed,
            vetSpeed,
            azimuth
          }
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
              parking{ name },
              destination{ name },
              ETA, lon, lat
            }
          }
        }
      },
      ... on Satellite{
        targetType: __typename,
        name,
        country { cname },
        usage { label },
        manufacturer { cname },
        NORAD, perigee, apogee, launchDate,
        launchSite { city },
        drySass,
        action{ RCS, lon, lat, geocentric, speed, GMT }
      },
      ... on Buoy{
        targetType: __typename,
        name,
        life,weight,weight,radarArea
        usage { label },
        model { label },
        action{ lon, lat },
        history {
          windDirection,
          windSpeed,
          GST,
          waveHeight,
          waveDirection,
          averagePeriod,
          dominantPeriod,
          seaPressure,
          airTemperature,
          seaTemperature,
          depthWater,
          pressureTrend
        },
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
        news{ title, content, source, timestamp },
      },
      ... on Airport{
        targetType: __typename,
        name,
        id,
        usage{ label },
        code,
        address {
          position,
          country { cname }
        },
        area,
        parkCount
      },
      ... on Port{
        targetType: __typename,
        id,
        name,
        address {
          country {
            cname
          },
          position
        },
        code
      },
      ... on LaunchSite{
        targetType: __typename,
        id,
        name,
        country{ cname },
        address{
          door,
          position
        }
      }
    }
  }`
  },
  freshWarning: { query: gql`
    query($type:String!){
      targetList: filterTargets(targetType:$type) {
        ...on Plane{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          action{
            track{ lon, lat, alt, timestamp, horSpeed, vetSpeed, azimuth }
          }
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
        ...on LaunchSite{
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
const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const staticTarget = ['Airport', 'Port', 'Launcher']
export default {
  name: 'app',
  components: { Mapcan, Tilelayer, Vectorlayer, Geometry, Routeplayer, Uicomponent, filterwrap, TargetrDetail, RelevantInformation, filterwarning },
  data() {
    return {
      show_TargetrDetail_boolean: false,
      show_RelevantInformation_boolean: false,
      show_RelevantInformation_filter: true,
      show_TargetrDetail_filter: false,
      targetr_type: 'airplane', // 下弹窗展示类型
      targetr_id: '0', // 下弹窗展示类型的id
      targetr_info: {},
      selectedtype: '',
      spinShow: true,
      route: null,
      playStatus: '',
      waringList: [],
      hideTip: false,
      selectedGeo: null,
      selectWarningGeo: null,
      warning: false, // 预警标志
      tab_show_Relevant: 'installation',
      notice: '这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息,这是一条预警信息',
      nitice_flag: false,
      time: '',
      date: '',
      filter_show: false,
      clickinfo: false,
      centerXY: {x: 100, y: 31},
      detailchar: {},
      maptiles:'/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}',
      boundaryList: [],
      showSwitchLayer: false
    }
  },
  computed: {
    ...mapState(['targetList']),
    ...mapState(['selectedTarget']),
    ...mapState(['selectinfoTarget'])
  },
  watch: {
    targetr_id() {
      this.get_info()
    },
    selectedTarget(n, o) {
      this.get_info()
      if(n === null) {
        this.playStatus = 'remove'
      }
    },
    targetList() {
      this.clearinfo()
    },
    selectinfoTarget() {
      // this.centerXY = this.selectinfoTarget.position
      if (this.selectinfoTarget && this.selectinfoTarget.feature) {
        this.centerXY = this.selectinfoTarget.feature.geometry.coordinates
      } else {
        this.centerXY = {x: 100, y: 31}
      }
    }
  },
  created() {
    this.get_binfo()
  },
  methods: {
    ...mapMutations(['setSomeState']),
    setSelected(p, t) {
      if (!SVG.Selected[this.selectedtype]){
       this.selectedGeo && this.selectedGeo.updateSymbol({ markerWidth: 25, markerHeight: 25, markerFill: '#f2e239' })
     } else {
       this.selectedGeo && this.selectedGeo.updateSymbol({ markerWidth: 25, markerHeight: 25, markerPath: SVG[this.selectedtype] })
     }
     if (!SVG.Selected[t.targetType]){
       p.target.updateSymbol({ markerWidth: 35, markerHeight: 35, markerFill: '#ff8000' })
       this.$store.commit('selectinfoTarget', {})
     } else {
       p.target.updateSymbol({ markerWidth: 35, markerHeight: 35, markerPath: SVG.Selected[t.targetType] })
     }
      this.selectedGeo = p.target
      this.selectedtype = t.targetType
      this.setSomeState(['selectedTarget', t])
      this.show_TargetrDetail_boolean = true
      this.show_TargetrDetail_filter = false
      this.show_RelevantInformation_boolean = true
      this.filter_show = true
      this.get_info()
    },
    makeSymbol(target) {
      let symb = target.symbol
      let isStatic = staticTarget.includes(target.targetType)
      // debugger
      Object.assign(symb, {
        markerType: 'path',
        markerPathWidth: 1024,
        markerPathHeight: 1024,
        markerFill: isStatic ? null : '#f2e239',
        markerRotation: isStatic ? 0 : 180,
        markerWidth: 25,
        markerHeight: 25,
        markerPath: SVG[target.targetType] || SVG.Unknow,
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
      debugger
      executeGQL(GQL.queryPlaneByID, { pid: this.selectedTarget.id }).then(r => {
        this.spinShow = false
        this.targetr_info = r.target
        this.selectedtype = this.selectedTarget.targetType
      })
    },
    get_binfo() {
      executeGQL(GQL.boundaryList, {}).then(r => {
        console.log(r)
        this.boundaryList = r.boundaryList
      })
    },
    clearinfo() {
      this.$store.commit('selectinfoTarget', {})
    },
    playOver() {
      this.playStatus = 'remove'
      this.route = null
    },
    changeMode(){
      if(this.maptiles == '/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}'){
        this.maptiles = '/maptiles/vt?lyrs=y@852&gl=cn&t=p&x={x}&y={y}&z={z}'
      }else{
        this.maptiles = '/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}'
      }
    },
    change_warning() {
      this.warning = !this.warning
      if (this.warning === false) {
        location.reload()
      }
    },
    change_Relevant(value) {
      this.tab_show_Relevant = value
      this.show_RelevantInformation_filter = false
      this.show_RelevantInformation_boolean = true
      this.show_RelevantInformation_boolean = true
    },
    open (data) {
      this.nitice_flag = true
    },
    closeNnotice() {
      this.nitice_flag = false
    },
    change_filter_show (value) {
      this.filter_show = value
      if( this.filter_show ){
        this.show_TargetrDetail_boolean = false
        this.show_RelevantInformation_boolean = false
      }
    },
    setSelectedWaring (e) {
      this.selectWarningGeo && this.selectWarningGeo.updateSymbol({
        markerWidth: 25,
        markerHeight: 25
      })
      e.target.updateSymbol({
        markerWidth: 35,
        markerHeight: 35
      })
      this.selectWarningGeo = e.target
      this.nitice_flag = true
      this.notice = sample([
        '民航N1217A在韩国当前从美国檀香山机场，飞往韩国大邱国际机场，期间在群山基地停留，请各方注意！',
        '民航PR1811 当前从菲律宾达沃机场出发，飞往日本横田机场，运动轨迹与美EP-3型侦察机相似，疑似有伪装侦察行为，请各方注意'])
      // this.$Notice.open({
      //   title: '警告标题',
      //   desc: sample([
      //   '民航N1217A在韩国当前从美国檀香山机场，飞往韩国大邱国际机场，期间在群山基地停留，请各方注意！',
      //   '民航PR1811 当前从菲律宾达沃机场出发，飞往日本横田机场，运动轨迹与美EP-3型侦察机相似，疑似有伪装侦察行为，请各方注意']),
      //   duration: 4 // 弹窗显示时间，设为0为永久显示
      // })
    },
    updateTime() {
      var cd = new Date();
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
    },

    zeroPadding(num, digit) {
      var zero = '';
      for(var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    },
    change_filter_RelevantInformation() {
      this.show_RelevantInformation_filter = !this.show_RelevantInformation_filter
      this.show_RelevantInformation_boolean = !this.show_RelevantInformation_boolean
      if (!this.show_RelevantInformation_filter) {
        this.show_RelevantInformation_boolean = true
      }
    },
    change_filter_TargetrDetail() {
      this.show_TargetrDetail_filter = !this.show_TargetrDetail_filter
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000)
    this.$root.mq.$on('routePlay', (e) => {
      // this.$refs.TargetrDetail.changeChats()
      this.show_RelevantInformation_boolean = false
      this.show_RelevantInformation_filter = true
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
            markerRotation: 180,
            // markerPath: SVG['Plane'],
            markerPath: SVG[this.selectedtype],
            markerVerticalAlignment: 'middle',
            markerHorizontalAlignment: 'middle'
          },
          lineSymbol: { lineColor: { type: 'linear', colorStops: [ [0.00, 'white'], [1 / 4, 'aqua'], [2 / 4, 'green'], [3 / 4, 'orange'], [1.00, 'red'] ] } }
        }
        this.playStatus = 'play'
        this.detailchar = { path: e.track.map(p => ([ p.alt, p.timestamp ])), unitTime: 100 }
      }, 1000)
    })
    this.intv = setInterval(async () => { return
      let ret = await executeGQL(GQL.freshWarning, { type: 'PlaneWarning' })
      // debugger
      this.waringList = ret.targetList
    }, 5000)
  }
}
</script>

<style lang="scss">
  .ivu-divider-horizontal.ivu-divider-with-text-center:after, .ivu-divider-horizontal.ivu-divider-with-text-center:before, .ivu-divider-horizontal.ivu-divider-with-text-left:after, .ivu-divider-horizontal.ivu-divider-with-text-left:before, .ivu-divider-horizontal.ivu-divider-with-text-right:after, .ivu-divider-horizontal.ivu-divider-with-text-right:before{
    border-color: #83bfff;
  }
  .tab_wrap /deep/ .ivu-switch-checked{
    border-color: red !important;
    background-color: red !important;
  }
  .ivu-switch{
    border: 1px solid #009bef !important;
    background-color: #009bef !important;
  }
  .clock {
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    position: absolute;
    right: -300px;
    top: 20px;
    width: 623px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    /*color: #daf6ff;*/
    color: #009bef;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
    background: rgba(0,0,0,0.6);
    padding: 4px 10px;
    border-radius: 4px;
    box-shadow: 0 0 20px 2px #009bef;
  }
  .military{
    right: -100px;
    top: 60px;
  }
  .clock .time {
    letter-spacing: 0.05em;
    font-size: 12px;
    padding: 5px 0;
  }
  .clock .date {
    letter-spacing: 0.1em;
    font-size: 12px;
  }
  .clock .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }

  .tab_wrap{
  position: fixed;
  z-index: 99999;
  top: 10px;
  left: 50%;
  /*width: 160px;*/
  /*display: flex;*/
  /*justify-content: space-evenly;*/
  margin-left: -80px;
  /*padding: 4px;*/
  /*background: rgba(0,0,0,0.6);*/
  /*border-radius: 20px;*/
  /*border: 1px solid #009bef;*/
  /*box-shadow: 0 0 20px 2px #009bef;*/
}
.tab_wrap_warning{
  border: 1px solid red;
  box-shadow: 0 0 20px 2px red;
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
  border: 1px solid red;
  box-shadow: 0 0 20px 2px red;
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
    padding: 4px 10px;
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
  .warning_color{
    background: red;
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

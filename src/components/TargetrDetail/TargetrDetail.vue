<template>
  <div class="TargetrDetail" :class = "show_TargetrDetail_boolean === true && filter_show && !show ? 'TargetrDetail_wrap_open':'TargetrDetail_wrap'">
    <div class="open_wrap" @click="changeFilter" v-if="show_TargetrDetail_boolean" :class = "show === true ? 'open_wrap':'close_wrap_a'">
      <!--<img src="../assets/images/button1.png" alt="" style="width: 40px;">-->
      <Icon type="ios-arrow-down" class="icon_a"/>
    </div>
    <!-- 高度echarts -->
    <div class="TargetrDetail_charts" v-if = "show_TargetrDetail_boolean === true && filter_show && !show && status && (tab_show == 'Targetrtrajectory') && !spinShow && (targetr_type === 'Plane' ||  targetr_type === 'Ship' ||  targetr_type === 'Satellite')">
      <div style="padding:0 60px 0 0;">
        <ve-line style="margin-left: 12px;" width="1088px" ref="chart" height="30px" :legend-visible="false" :tooltip-visible="false" :colors="colors" :grid="grid" :extend="extend" :data="chartData" :settings="chartSettings"></ve-line>
      </div>
      <div style="display: flex;justify-content: space-between;align-items: center;position: relative;top: -10px;">
        <div style="color:#fff">
          <Icon style="cursor: pointer" type="md-play" v-if = "status !== 'play'"/>
          <Icon style="cursor: pointer" type="md-pause" v-if = "status === 'play'"/>
        </div>
        <div style="flex: 1;height: 2px;background: #666;border-radius: 4px;overflow: hidden;">
          <div style="height: 2px;background: #fff;border-radius: 4px;" :style="{ width: chartlength + 'px' }"></div>
        </div>
        <div style="width:80px;margin-left:20px;color:#fff;text-align: center;">
          <span v-text="nowTime"></span> <span>/</span> <span v-text="allTime"></span>
        </div>
      </div>
    </div>

    <div class="TargetrDetail_container" :style="{height:container_height+'px'}">
      <!-- 关闭&最小化按钮 -->
      <div class="TargetrDetail_operator">
        <!-- <svg class="TargetrDetail_operator_icon TargetrDetail_operator_icon_hover" @click="show1" width="16px" v-if="container_height != 210" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M959.72 0H294.216a63.96 63.96 0 0 0-63.96 63.96v127.92H64.28A63.96 63.96 0 0 0 0.32 255.84V959.4a63.96 63.96 0 0 0 63.96 63.96h703.56a63.96 63.96 0 0 0 63.96-63.96V792.465h127.92a63.96 63.96 0 0 0 63.96-63.96V63.96A63.96 63.96 0 0 0 959.72 0zM767.84 728.505V959.4H64.28V255.84h703.56z m189.322 0H831.8V255.84a63.96 63.96 0 0 0-63.96-63.96H294.216V63.96H959.72z" /></svg>
        <svg class="TargetrDetail_operator_icon TargetrDetail_operator_icon_hover" @click="hide" width="16px" height="16.00px" v-if="container_height == 210" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M65.23884 456.152041 958.760137 456.152041l0 111.695918L65.23884 567.847959 65.23884 456.152041z" /></svg> -->
        <svg class="TargetrDetail_operator_icon TargetrDetail_operator_icon_hover" @click="close" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M587.7 511.9L912.3 187c20.9-21 20.9-54.8 0-75.8s-54.8-21-75.7 0L512 436.1 187.5 111.2c-20.9-21-54.8-21-75.7 0-20.9 21-20.9 54.8 0 75.8l324.5 324.8-324.5 324.9c-20.9 21-20.9 54.8 0 75.8 10.4 10.5 24.1 15.7 37.9 15.7 13.7 0 27.4-5.2 37.9-15.7L512 587.7l324.5 324.8c10.4 10.5 24.2 15.7 37.9 15.7s27.4-5.2 37.8-15.7c20.9-21 20.9-54.8 0-75.8L587.7 511.9z" /></svg>
      </div>
      <!-- tab切换 -->
      <div class="TargetrDetail_operator_tabs" v-if="tab_boolean">
        <div :class="[tab_show == 'TargetrInformation' ? 'TargetrDetail_operator_tab TargetrDetail_operator_tab_active' : 'TargetrDetail_operator_tab']" @click="changeTab('TargetrInformation')">
          <svg class="TargetrDetail_operator_icon" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M836.2 957.3H189.8c-50.7 0-92-41.3-92-92V158.2c0-50.7 41.3-92 92-92h646.5c50.7 0 92 41.3 92 92v707.1c-0.1 50.7-41.3 92-92.1 92zM189.8 130.2c-15.4 0-28 12.6-28 28v707.1c0 15.4 12.6 28 28 28h646.5c15.4 0 28-12.6 28-28V158.2c0-15.4-12.6-28-28-28H189.8z"></path><path d="M781 251.7H388c-17.7 0-32 14.3-32 32s14.3 32 32 32h393c17.7 0 32-14.3 32-32s-14.3-32-32-32z m-501 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM781 476.7H388c-17.7 0-32 14.3-32 32s14.3 32 32 32h393c17.7 0 32-14.3 32-32s-14.3-32-32-32z m-501 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM781 701.7H388c-17.7 0-32 14.3-32 32s14.3 32 32 32h393c17.7 0 32-14.3 32-32s-14.3-32-32-32z m-501 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"></path></svg>
          <span>目标信息</span>
        </div>
         <div v-if="targetr_type !== 'AirPort' && targetr_type !== 'Port' && targetr_type !== 'LaunchSite'" :class="[tab_show == 'Targetrtrajectory' ? 'TargetrDetail_operator_tab TargetrDetail_operator_tab_active' : 'TargetrDetail_operator_tab']" @click="changeTab('Targetrtrajectory')">
          <svg class="TargetrDetail_operator_icon" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M677.7 830.8H292.2c-47.7 0.2-93.5-18.7-127.2-52.4s-52.6-79.5-52.4-127.2c0-99.8 79.8-179.6 179.6-179.6h438.9c26.5 0.3 52.1-10.2 70.8-28.9 18.8-18.8 29.2-44.3 28.9-70.8 0.3-26.5-10.2-52.1-28.9-70.8-18.8-18.8-44.3-29.2-70.8-28.9H345.7c-15.8 47.3-59.6 79.8-113.3 79.8-67.8 0-119.7-51.9-119.7-119.7 0-67.8 51.9-119.7 119.7-119.7 53.7 0 97.5 32.6 113.3 79.8h385.5c47.7-0.2 93.5 18.7 127.2 52.4S911 324.3 910.8 372c0.2 47.7-18.7 93.5-52.4 127.2s-79.5 52.6-127.2 52.4h-439c-26.5-0.3-52.1 10.2-70.8 28.9-18.8 18.8-29.2 44.3-28.9 70.8-0.3 26.5 10.2 52.1 28.9 70.8 18.8 18.8 44.3 29.2 70.8 28.9h385.5c15.8-47.3 59.6-79.8 113.3-79.8 67.8 0 119.7 51.9 119.7 119.7 0 67.8-51.9 119.7-119.7 119.7-53.7 0-97.5-32.5-113.3-79.8z m0 0" /></svg>
          <span>目标轨迹</span>
        </div>
      </div>
      <!-- tab的content 展示 -->
      <div class="TargetrDetail_content" v-if="tab_boolean">
        <Spin size="large" fix v-if="spinShow"></Spin>
        <TargetrInformation :base_info="targetr_info" :targetr_type="targetr_type" v-if="(tab_show == 'TargetrInformation') && !spinShow" @change_Relevant = "change_Relevant"></TargetrInformation>
        <TargetrTrajectory :status="status" :real_time_info="targetr_info" :targetr_type="targetr_type" v-if="(tab_show == 'Targetrtrajectory') && !spinShow"></TargetrTrajectory>
      </div>

    </div>
  </div>
</template>

<script>
// import { executeGQL } from '../../commons'
import TargetrInformation from './TargetrInformation'
import TargetrTrajectory from './TargetrTrajectory'
import { mapState } from 'vuex'

export default {
  name: 'TargetrDetail',
  components: { TargetrInformation, TargetrTrajectory },
  destroyed() { },
  data() {
    this.nowTime = '00:00'
    this.allTime = '00:00'
    this.Data = []
    this.timer = null // 定时器名称
    this.timerIndex = 1
    this.chartSettings = {
      area: true,
      scale: true
    }
    this.grid = {
      show: true,
      width: '1080px',
      height: '30px',
      top: 0,
      left: 0,
      bottom: 0,
      color: '#fff',
      backgroundColor: 'transparent',
      borderColor: '#000',
      borderWidth: 0
    }
    this.colors = ['transparent']
    this.extend = {
      xAxis: {
        offset: 0,
        boundaryGap: false,
        axisLabel: {
          show: false
        },
        splitLine: { show: false }
      },
      yAxis: {
        axisLabel: { show: false },
        splitLine: { show: false }
      },
      series: {
        smooth: false,
        symbol: 'none',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#1356b5' // 0% 处的颜色
            }, {
              offset: 0.5, color: '#37938b' // 100% 处的颜色
            }, {
              offset: 1, color: '#4bb574' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      }
    }
    return {
      tab_boolean: true,
      tab_show: 'TargetrInformation',
      container_height: 250,
      // targetr_info: {},
      get_data_boolean: true,
      chartlength: 1088,
      chartData: {
        columns: ['时间', '高度'],
        rows: this.Data
      }
    }
  },
  props: ['targetr_type', 'targetr_id', 'targetr_info', 'spinShow', 'show_TargetrDetail_boolean', 'status', 'filter_show', 'show', 'detailchar', 'playStatus'],
  computed: {
    ...mapState(['selectedTarget'])
  },
  watch: {
    targetr_id() {
      this.tab_show = 'TargetrInformation'
      this.get_info()
    },
    selectedTarget() {
      this.tab_show = 'TargetrInformation'
      this.get_info()
    },
    targetr_info() {
      this.container_height = 250
      this.tab_boolean = true
    },
    // echarts resize调用
    chartlength(v) {
      this.grid.width = v + 'px'
      this.$refs.chart.echarts.resize()
    },
    status (v) {
      if (v === 'play') {
        this.changeChats()
      }
    }
  },
  mounted() {
    this.get_info()
    this.chartlength = 0
  },
  methods: {
    // 高度charts动画
    changeChats () {
      let secondAmount = Math.floor((this.detailchar.path[this.detailchar.path.length - 1][1] - this.detailchar.path[0][1]) / this.detailchar.unitTime / 1000)
      this.allTime = (Math.floor(secondAmount/60) < 10 ? ('0' + Math.floor(secondAmount/60)) : Math.floor(secondAmount/60)) + ':' + (secondAmount%60 < 10 ? ('0' + secondAmount%60) : secondAmount%60)
      let timeRate = ((this.detailchar.path[this.detailchar.path.length - 1][1] - this.detailchar.path[0][1]) / this.detailchar.unitTime / this.detailchar.path.length).toFixed(0)
      this.timer = setInterval(() => {
        if (this.timerIndex === 1) {
          this.chartData.rows = []
        }
        if (this.status === 'play' || this.timerIndex <= this.detailchar.path.length) {
          let secondNow = Math.floor(this.timerIndex * timeRate /1000)
          this.nowTime = (Math.floor(secondNow/60) < 10 ? ('0' + Math.floor(secondNow/60)) : Math.floor(secondNow/60)) + ':' + (secondNow%60 < 10 ? ('0' + secondNow%60) : secondNow%60)
          this.chartData.rows.push({'时间':this.timerIndex-1,'高度':this.detailchar.path[this.timerIndex-1][0]})
          this.chartlength = 1088 / this.detailchar.path.length * this.timerIndex
          this.timerIndex++
          this.$refs.chart.init()
        } else if (this.status === 'pause') {
          return
        } else if (this.status === 'remove' || this.timerIndex >= this.detailchar.path.length) {
          this.timerIndex = 1
          clearInterval(this.timer)
          this.timer = null
        }
      }, timeRate)
    },
    // 弹窗显示最大化
    show1() {
      this.container_height = 250
      this.tab_boolean = true
    },
    // 弹窗显示最小化
    hide() {
      this.container_height = 30
      this.tab_boolean = false
    },
    // 弹窗关闭
    close() {
      this.$emit('close_TargetrDetail')
    },
    // tab切换
    changeTab(value) {
      this.tab_show = value
    },
    // 获取目标
    get_info() {
      this.spinShow = true
      // executeGQL(GQL.queryPlaneByID, { pid: this.selectedTarget.id }).then(r => {
      //   this.spinShow = false
      //   this.targetr_info = r.target
      // })
    },
    change_Relevant(value) {
      this.$emit('change_Relevant', value)
    },
    changeFilter() {
      this.$emit('change_filter_TargetrDetail')
    }
  }
}
</script>

<style scoped>
  .TargetrDetail{
    width: calc(100vw - 20px);
  }
  .TargetrDetail_wrap{
    margin-bottom: -250px;
    transition: all 1s linear;
  }
  .TargetrDetail_wrap_open{
    margin-bottom: 10px;
    transition: all 1s linear;
  }
  .TargetrDetail_charts{
    width:1200px;
    height: 40px;
    margin:0 auto;
    position: relative;
  }
  .TargetrDetail_container{
    width:1200px;
    height: 250px;
    background: rgba(0,0,0,.7);
    margin:0 auto;
    border-radius: 6px;
    border: 1px solid #2b92d4;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    position: relative;
    }
  .TargetrDetail_operator{
    position: absolute;
    top: 6px;
    right: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .TargetrDetail_operator_icon{
    padding: 3px;
    cursor: pointer;
    display: inline-block;
    transition: all .3s;
    font-weight: 700;
    fill: currentColor;
    overflow: hidden;
    fill:#fff;
    margin:0 2px;
  }
  .TargetrDetail_operator_icon_hover:hover {
    -webkit-box-shadow: 0 0 5px #ccc;
    box-shadow: 0 0 5px #ccc;
    fill:#ccc;
  }
  .TargetrDetail_operator_tabs{
    display: flex;
    position: relative;
    left: 6px;
    top: 6px;
    max-width: 400px;
  }
  .TargetrDetail_operator_tab{
    color:#fff;
    display:flex;
    cursor: pointer;
    align-items:center;
    font-size:18px;
    padding-right: 2px;
  }
  .TargetrDetail_operator_tab_active{
    background: rgba(0,0,0);
    border: 1px solid;
    border-color:rgb(255, 255, 255 ,.6) rgb(255, 255, 255 ,.6) transparent rgb(255, 255, 255 ,.6);
    border-radius: 2px;
    z-index: 10;
  }
  .TargetrDetail_content{
    /*background-color: rgb(255, 255, 255 , .8);*/
    border-top: 1px solid rgb(255, 255, 255,.5);
    position: relative;
    top: 5px;
    margin:0 6px;
    border-radius: 0 0 2px 2px;
    height: 214px;
    z-index: 9;
  }

  /* 呼吸灯动画 */
  @-webkit-keyframes breathe {
    0% {
      box-shadow: 0 1px 2px rgba(0,102,255, 0.4), 0 1px 1px rgba(0,102,255, 0.1) inset;
    }
    20%{
      border: 1px solid rgba(59, 235, 235, 0.5);
      box-shadow: 0 1px 30px #f52d0c, 0 1px 20px #f52d0c inset;
    }
    40%{
      box-shadow: 0 1px 2px rgba(0,102,255, 0.4), 0 1px 1px rgba(0,102,255, 0.1) inset;
    }
    60%{
      border: 1px solid rgba(59, 235, 235, 0.5);
      box-shadow: 0 1px 30px #5fd0bc, 0 1px 20px #5fd0bc inset;
    }
    80%{
      box-shadow: 0 1px 2px rgba(0,102,255, 0.4), 0 1px 1px rgba(0,102,255, 0.1) inset;
    }
    100% {
      border: 1px solid rgba(59, 235, 235, 0.5);
      box-shadow: 0 1px 30px #0093df, 0 1px 20px #0093df inset;
    }
  }
  /* @-webkit-keyframes breathe {
    0% {
        box-shadow: 0 1px 2px rgba(0, 147, 223, 0.4), 0 1px 1px rgba(0, 147, 223, 0.1) inset;
    }
    100% {
        box-shadow: 0 1px 30px #0093df, 0 1px 20px #0093df inset;
    }
  } */
  .open_wrap{
    width: 100%;
    text-align: center;
    transition: all 1s linear;
  }
  .icon_a{
    font-size: 50px;
    color: #009bef;
    text-shadow: 0 1px 20px #000;
    transform: rotate(180deg);
    transition: all 1s linear;
  }
  .close_wrap_a{
    transform: rotate(-180deg);
    transition: all 1s linear;
  }

</style>

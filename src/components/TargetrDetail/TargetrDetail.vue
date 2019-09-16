<template>
  <div class="TargetrDetail">
    <div class="TargetrDetail_container" :style="{height:container_height+'px'}">
      <!-- 关闭&最小化按钮 -->
      <div class="TargetrDetail_operator">
        <svg class="TargetrDetail_operator_icon TargetrDetail_operator_icon_hover" @click="show1" width="16px" v-if="container_height != 210" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M959.72 0H294.216a63.96 63.96 0 0 0-63.96 63.96v127.92H64.28A63.96 63.96 0 0 0 0.32 255.84V959.4a63.96 63.96 0 0 0 63.96 63.96h703.56a63.96 63.96 0 0 0 63.96-63.96V792.465h127.92a63.96 63.96 0 0 0 63.96-63.96V63.96A63.96 63.96 0 0 0 959.72 0zM767.84 728.505V959.4H64.28V255.84h703.56z m189.322 0H831.8V255.84a63.96 63.96 0 0 0-63.96-63.96H294.216V63.96H959.72z" /></svg>
        <svg class="TargetrDetail_operator_icon TargetrDetail_operator_icon_hover" @click="hide" width="16px" height="16.00px" v-if="container_height == 210" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M65.23884 456.152041 958.760137 456.152041l0 111.695918L65.23884 567.847959 65.23884 456.152041z" /></svg>
        <svg class="TargetrDetail_operator_icon TargetrDetail_operator_icon_hover" @click="close" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M587.7 511.9L912.3 187c20.9-21 20.9-54.8 0-75.8s-54.8-21-75.7 0L512 436.1 187.5 111.2c-20.9-21-54.8-21-75.7 0-20.9 21-20.9 54.8 0 75.8l324.5 324.8-324.5 324.9c-20.9 21-20.9 54.8 0 75.8 10.4 10.5 24.1 15.7 37.9 15.7 13.7 0 27.4-5.2 37.9-15.7L512 587.7l324.5 324.8c10.4 10.5 24.2 15.7 37.9 15.7s27.4-5.2 37.8-15.7c20.9-21 20.9-54.8 0-75.8L587.7 511.9z" /></svg>
      </div>
      <!-- tab切换 -->
      <div class="TargetrDetail_operator_tabs" v-if="tab_boolean">
        <div :class="[tab_show == 'TargetrInformation' ? 'TargetrDetail_operator_tab TargetrDetail_operator_tab_active' : 'TargetrDetail_operator_tab']" @click="changeTab('TargetrInformation')">
          <svg class="TargetrDetail_operator_icon" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M836.2 957.3H189.8c-50.7 0-92-41.3-92-92V158.2c0-50.7 41.3-92 92-92h646.5c50.7 0 92 41.3 92 92v707.1c-0.1 50.7-41.3 92-92.1 92zM189.8 130.2c-15.4 0-28 12.6-28 28v707.1c0 15.4 12.6 28 28 28h646.5c15.4 0 28-12.6 28-28V158.2c0-15.4-12.6-28-28-28H189.8z"></path><path d="M781 251.7H388c-17.7 0-32 14.3-32 32s14.3 32 32 32h393c17.7 0 32-14.3 32-32s-14.3-32-32-32z m-501 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM781 476.7H388c-17.7 0-32 14.3-32 32s14.3 32 32 32h393c17.7 0 32-14.3 32-32s-14.3-32-32-32z m-501 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM781 701.7H388c-17.7 0-32 14.3-32 32s14.3 32 32 32h393c17.7 0 32-14.3 32-32s-14.3-32-32-32z m-501 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"></path></svg>
          <span>目标信息</span>
        </div>
         <div :class="[tab_show == 'Targetrtrajectory' ? 'TargetrDetail_operator_tab TargetrDetail_operator_tab_active' : 'TargetrDetail_operator_tab']" @click="changeTab('Targetrtrajectory')">
          <svg class="TargetrDetail_operator_icon" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M677.7 830.8H292.2c-47.7 0.2-93.5-18.7-127.2-52.4s-52.6-79.5-52.4-127.2c0-99.8 79.8-179.6 179.6-179.6h438.9c26.5 0.3 52.1-10.2 70.8-28.9 18.8-18.8 29.2-44.3 28.9-70.8 0.3-26.5-10.2-52.1-28.9-70.8-18.8-18.8-44.3-29.2-70.8-28.9H345.7c-15.8 47.3-59.6 79.8-113.3 79.8-67.8 0-119.7-51.9-119.7-119.7 0-67.8 51.9-119.7 119.7-119.7 53.7 0 97.5 32.6 113.3 79.8h385.5c47.7-0.2 93.5 18.7 127.2 52.4S911 324.3 910.8 372c0.2 47.7-18.7 93.5-52.4 127.2s-79.5 52.6-127.2 52.4h-439c-26.5-0.3-52.1 10.2-70.8 28.9-18.8 18.8-29.2 44.3-28.9 70.8-0.3 26.5 10.2 52.1 28.9 70.8 18.8 18.8 44.3 29.2 70.8 28.9h385.5c15.8-47.3 59.6-79.8 113.3-79.8 67.8 0 119.7 51.9 119.7 119.7 0 67.8-51.9 119.7-119.7 119.7-53.7 0-97.5-32.5-113.3-79.8z m0 0" /></svg>
          <span>目标轨迹</span>
        </div>
      </div>
      <!-- tab的content 展示 -->
      <div class="TargetrDetail_content" v-if="tab_boolean">
        <Spin size="large" fix v-if="spinShow"></Spin>
        <TargetrInformation :base_info="targetr_info" :targetr_type="targetr_type" v-if="(tab_show == 'TargetrInformation') && !spinShow"></TargetrInformation>
        <TargetrTrajectory :real_time_info="targetr_info" :targetr_type="targetr_type" v-if="(tab_show == 'Targetrtrajectory') && !spinShow"></TargetrTrajectory>
      </div>

    </div>
  </div>
</template>

<script>
import { executeGQL } from '../../commons'
import TargetrInformation from './TargetrInformation'
import TargetrTrajectory from './TargetrTrajectory'
import { mapState } from 'vuex'
const GQL = {
  queryPlaneByID: { query: `query($pid:ID!){
    target(id:$pid){
      ... on Plane{
        id,
        name,
        ICAO,
        kind { label },
        usage{ label },
        registration,
        ORG {
          cname,
          country{
            cname
          }
        },
        radar{
          model
          responseCode
        },
        action{
          landing{
            name,
            country{ cname }
          },
          ETD,
          ETA,
          azimuth,
          alt
        }
      }
      ... on Ship{
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
    }
  }`
  }
}
export default {
  name: 'TargetrDetail',
  components: { TargetrInformation, TargetrTrajectory },
  destroyed() { },
  data() {
    return {
      tab_boolean: true,
      tab_show: 'TargetrInformation',
      container_height: 210,
      targetr_info: {},
      spinShow: true,
      get_data_boolean: true
    }
  },
  props: ['targetr_type', 'targetr_id'],
  computed: {
    ...mapState(['selectedTarget'])
  },
  watch: {
    targetr_type() {
      this.tab_show = 'TargetrInformation'
      this.get_info()
    },
    targetr_id() {
      this.tab_show = 'TargetrInformation'
      this.get_info()
    },
    selectedTarget() {
      this.tab_show = 'TargetrInformation'
      this.get_info()
    }
  },
  mounted() {
    this.get_info()
  },
  methods: {
    // 弹窗显示最大化
    show1() {
      this.container_height = 210
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
      executeGQL(GQL.queryPlaneByID, { pid: this.selectedTarget.id }).then(r => {
        this.spinShow = false
        this.targetr_info = r.target
      })
    }
  }
}
</script>

<style scoped>
  .TargetrDetail{
    width: calc(100vw - 20px);
  }
  .TargetrDetail_container{
    width:800px;
    height: 210px;
    background: rgba(0,0,0,.7);
    margin:0 auto;
    border-radius: 6px;
    border: 1px solid #2b92d4;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-name: breathe;
    -webkit-animation-duration: 10000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),visibility 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),-webkit-transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .TargetrDetail_operator{
    position: absolute;
    top: 6px;
    right: calc(50vw - 404px);
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
    align-items:center;
    font-size:12px;
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
    height: 174px;
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

</style>

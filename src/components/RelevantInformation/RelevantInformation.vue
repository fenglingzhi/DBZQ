<template>
    <div class="RelevantInformation">
      <div class="RelevantInformation_container">
        <!-- tab切换 -->
        <div class="RelevantInformation_operator_tabs">
          <div :class="[tab_show == 'installation' ? 'RelevantInformation_operator_tab RelevantInformation_operator_tab_active' : 'RelevantInformation_operator_tab']" @click="changeTab('installation')">
            <svg class="RelevantInformation_operator_icon" width="16px" height="15.98px" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M160.672 245.408h184.192L252.256 146.496 159.616 245.408h1.056z m321.12 16.224v132.64h-117.696V289.28h24.224l16.128-37.248-57.44-61.312 56.832-60.64 107.776 115.008-7.136 16.544h-22.688zM138.336 395.2H29.216V261.632H7.04l-7.04-16.544L107.68 130.08l7.136 7.552L160.32 186.24 98.592 252 114.72 289.28h23.616v105.92z m109.952-100.032v54.368h-25.312V295.168h25.312z m36.192 0v54.368h-25.344V295.168h25.344z m48.192-163.168v50.784l-8.096-8.672-23.296-24.864v-17.312h-8.224v-17.632h48.576v17.632l-8.96 0.064z m17.92 143.776v118.816H151.84V275.776h-28.288l-9.056-20.96L251.52 108.48l9.088 9.664 127.968 136.672-9.056 20.96h-28.928z m-17.664 0H169.536v101.152h163.392V275.776zM1024.992 381.6c0 20.096-16.256 36.352-36.32 36.352h-314.016a36.384 36.384 0 0 1-36.416-36.352V67.584c0-20.128 16.352-36.416 36.416-36.416h314.016c20.064 0 36.32 16.288 36.32 36.416v314.016zM1024.992 905.344c0 20.096-16.256 36.32-36.32 36.32h-314.016a36.384 36.384 0 0 1-36.416-36.32v-314.016c0-20.16 16.352-36.384 36.416-36.384h314.016c20.064 0 36.32 16.224 36.32 36.384v314.016zM466.4 905.344c0 20.096-16.256 36.32-36.416 36.32H116.032c-20.16 0-36.416-16.224-36.416-36.32v-314.016c0-20.16 16.256-36.384 36.416-36.384h313.952c20.16 0 36.416 16.224 36.416 36.384v314.016z" /></svg>
            <span>设施</span>
          </div>
          <div :class="[tab_show == 'dynamic' ? 'RelevantInformation_operator_tab RelevantInformation_operator_tab_active' : 'RelevantInformation_operator_tab']" @click="changeTab('dynamic')">
            <svg class="RelevantInformation_operator_icon" width="16px" height="14.60px" viewBox="0 0 1122 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M2.198036 146.677641l-1.108241-16.882506-1.089821 17.302061 0.491187 7.79043 0 18.251689 0.024559 0.599657c0.010233 0.249687 0.25378 6.132674 0.581238 6.39464 0.007163 0.00614 0.013303 0.008186 0.020466 0.008186 0.321318 0 0.528026-6.009877 0.537236-6.271844l0.020466-0.592494 0-18.215874L2.198036 146.677641 2.198036 146.677641zM1.090819 134.228097l0.822738 12.538571-0.823761 13.1853-0.809435-12.856819L1.090819 134.228097 1.090819 134.228097zM1.54926 171.46314c-0.055259 1.357927-0.223081 4.848425-0.450255 4.680603-0.231267-0.185218-0.419556-3.669576-0.484024-5.033643L0.614981 156.865677l0.474814 7.544837 0.459464-7.354502L1.54926 171.46314 1.54926 171.46314zM1.54926 171.46314M699.554604 894.548696c-5.628184 0-10.980076-2.041496-15.173584-5.792936L486.108281 720.610178 241.311949 720.610178c-41.718147 0-75.656097-33.82334-75.656097-75.656097L165.655852 196.921975c0-41.664935 33.93795-75.65712 75.656097-75.65712l727.153198 0c41.828664 0 75.766614 33.993209 75.766614 75.65712l0 448.087365c0 41.831734-33.93795 75.656097-75.766614 75.656097L725.767616 720.665437l-2.594081 150.597927c-0.10847 9.270131-5.628184 17.328667-13.905708 21.025872C706.232701 893.778146 702.754483 894.548696 699.554604 894.548696L699.554604 894.548696 699.554604 894.548696zM241.311949 168.612209c-15.560394 0-28.308743 12.69309-28.308743 28.365025l0 448.091458c0 15.724123 12.748349 28.362978 28.308743 28.362978L494.549534 673.431669c5.684466 0 11.035334 2.042519 15.34243 5.629207l166.708859 141.599995 2.152013-123.94387c0.327458-12.912078 10.761088-23.285333 23.61893-23.285333l266.094404 0c15.616676 0 28.473495-12.639878 28.473495-28.362978L996.939665 196.97621c0-15.616676-12.803607-28.365025-28.473495-28.365025L241.311949 168.611186 241.311949 168.612209 241.311949 168.612209zM463.204642 304.528761l283.643082 0 0 47.237861L463.204642 351.766622 463.204642 304.528761 463.204642 304.528761 463.204642 304.528761zM463.204642 434.541861l283.643082 0 0 47.288003L463.204642 481.829863 463.204642 434.541861 463.204642 434.541861 463.204642 434.541861zM463.204642 434.541861" /></svg>
            <span>动态</span>
          </div>
          <div :class="[tab_show == 'personnel' ? 'RelevantInformation_operator_tab RelevantInformation_operator_tab_active' : 'RelevantInformation_operator_tab']" @click="changeTab('personnel')">
            <svg class="RelevantInformation_operator_icon" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 128c42.7 0 82.9 16.6 113.1 46.9C655.4 205.1 672 245.3 672 288s-16.6 82.9-46.9 113.1C594.9 431.4 554.7 448 512 448s-82.9-16.6-113.1-46.9S352 330.7 352 288s16.6-82.9 46.9-113.1S469.3 128 512 128m0-64c-123.7 0-224 100.3-224 224s100.3 224 224 224 224-100.3 224-224S635.7 64 512 64z"  /><path d="M256.8 927c-0.6-10.3-0.8-20.6-0.8-31 0-54.2 7.5-106.6 22.4-155.9 14.1-46.6 34.1-88.3 59.4-123.7C385.9 549.1 447.8 512 512 512s126.1 37.1 174.2 104.4c25.3 35.4 45.3 77.1 59.4 123.7C760.5 789.4 768 841.8 768 896c0 10.4-0.3 20.7-0.8 31h64.1c0.5-10.2 0.8-20.6 0.8-31 0-247.4-143.3-448-320-448S192 648.6 192 896c0 10.4 0.3 20.8 0.8 31h64zM362.6 454.9c-10.4-9.3-19.9-19.5-28.4-30.6C319.6 452.6 290 472 256 472c-48.5 0-88-39.5-88-88s39.5-88 88-88c11.5 0 22.4 2.2 32.5 6.2-0.3-4.7-0.5-9.4-0.5-14.2 0-9.3 0.6-18.5 1.7-27.5-10.7-2.9-22-4.5-33.7-4.5-70.7 0-128 57.3-128 128 0 44.4 22.6 83.5 56.9 106.5C114.1 528.9 64 623 64 733h40c0-31.2 4.5-61.4 13.3-89.7 8.3-26.8 20.2-50.8 35.2-71.1C181 533.4 217.8 512 256 512c23.3 0 46 7.9 66.6 22.8 9.6-9.9 19.6-19 30-27.4-8.2-6.5-16.7-12.2-25.6-17 14.1-9.3 26.2-21.4 35.6-35.5z"  /><path d="M696.9 490.5c-8.9 4.8-17.4 10.5-25.6 17 10.4 8.4 20.4 17.5 30 27.4 20.7-15 43.4-22.9 66.7-22.9 38.2 0 75 21.4 103.5 60.1 15 20.4 26.8 44.3 35.2 71.1 8.8 28.3 13.3 58.5 13.3 89.7h40c0-110-50.1-204.1-120.9-242.5 34.3-23 56.9-62.1 56.9-106.5 0-70.7-57.3-128-128-128-11.7 0-22.9 1.6-33.7 4.5 1.1 9 1.7 18.2 1.7 27.5 0 4.8-0.2 9.5-0.5 14.2 10-4 21-6.2 32.5-6.2 48.5 0 88 39.5 88 88s-39.5 88-88 88c-34 0-63.6-19.4-78.2-47.7-8.5 11.1-18 21.3-28.4 30.6 9.4 14.2 21.5 26.3 35.5 35.7z"  /></svg>
            <span>人员</span>
          </div>
          <div :class="[tab_show == 'organization' ? 'RelevantInformation_operator_tab RelevantInformation_operator_tab_active' : 'RelevantInformation_operator_tab']" @click="changeTab('organization')">
            <svg class="RelevantInformation_operator_icon" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M682 118v240H342V118h340m40-40H302v320h420V78zM286.2 647.8v240h-160v-240h160m40-40h-240v320h240v-320z m276.7 40v240h-160v-240h160m40-40h-240v320h240v-320z m276.7 40v240h-160v-240h160m40-40h-240v320h240v-320zM532 397.9h-40v100h40v-100z m0 110.3h-40v100h40v-100z m326.6-28H172v40h686.6v-40z m-0.1 28h-40v100h40v-100z m-646.5 0h-40v100h40v-100z"  /></svg>
            <span>机构</span>
          </div>
          <div :class="[tab_show == 'information' ? 'RelevantInformation_operator_tab RelevantInformation_operator_tab_active' : 'RelevantInformation_operator_tab']" @click="changeTab('information')">
            <svg class="RelevantInformation_operator_icon" width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M645.652301 1023.946557 84.480268 1023.946557C38.528902 1023.946557 1.11883 986.622297 1.11883 940.776699L1.11883 83.204782C1.11883 37.32426 38.528902 0 84.480268 0l724.160089 0c45.953362 0 83.361438 37.322264 83.361438 83.204782l0 666.246919c0 5.879125-2.180225 11.532743-6.087668 15.955058l-222.300163 250.500404C659.068919 1021.007992 652.549197 1023.946557 645.652301 1023.946557L645.652301 1023.946557zM84.480268 48.023828c-19.485327 0-35.352578 15.784432-35.352578 35.162993l0 857.571918c0 19.414482 15.869246 35.162993 35.352578 35.162993l550.40162 0 209.076123-235.613008L843.958012 83.204782c0-19.378561-15.834323-35.162993-35.317654-35.162993L84.480268 48.041788 84.480268 48.023828 84.480268 48.023828zM683.565272 250.28288 223.097696 250.28288c-20.024147 0-36.260589-16.240433-36.260589-36.28753 0-20.024147 16.238438-36.28753 36.260589-36.28753l460.467576 0c20.075036 0 36.260589 16.265379 36.260589 36.28753C719.799918 234.042447 703.615362 250.28288 683.565272 250.28288L683.565272 250.28288zM683.565272 447.275467 223.097696 447.275467c-20.024147 0-36.260589-16.291322-36.260589-36.260589 0-20.049092 16.238438-36.313473 36.260589-36.313473l460.467576 0c20.075036 0 36.260589 16.265379 36.260589 36.313473C719.799918 430.98614 703.615362 447.275467 683.565272 447.275467L683.565272 447.275467zM469.944102 647.060937 223.097696 647.060937c-20.024147 0-36.260589-16.291322-36.260589-36.313473 0-19.998204 16.238438-36.262585 36.260589-36.262585l246.846406 0c20.025145 0 36.260589 16.265379 36.260589 36.262585C506.206687 630.769615 489.96825 647.060937 469.944102 647.060937L469.944102 647.060937zM617.455053 1021.353236c-13.225037 0-24.012413-10.769415-24.012413-24.012413L593.442641 774.709386c0-45.863559 35.283729-83.186821 78.605853-83.186821l193.293687 0c13.259961 0 24.031371 10.735489 24.031371 23.993454 0 13.276924-10.771411 24.014408-24.031371 24.014408l-193.276724 0c-16.838125 0-30.565063 15.800397-30.565063 35.179956l0 222.647402C641.504385 1010.582824 630.733973 1021.353236 617.455053 1021.353236L617.455053 1021.353236z" /></svg>
            <span>资讯</span>
          </div>
        </div>
        <!-- tab的content 展示 -->
        <div class="RelevantInformation_content">
          <Spin size="large" fix v-if="spinShow"></Spin>
          <div v-if="tab_show == 'installation'">
<<<<<<< HEAD
            <AirplaneInstallation :facility = "targetr_info"></AirplaneInstallation>
          </div>
          <div v-if="tab_show == 'dynamic'">
            <AirplaneDynamic :dynamic = "targetr_info"></AirplaneDynamic>
=======
            <AirplaneInstallation v-if="targetr_type == 'airplane'" :facility = "targetr_info.facility"></AirplaneInstallation>
            <ShipInstallation v-if="targetr_type == 'ship'" :facility = "targetr_info.facility"></ShipInstallation>
            <SatelliteInstallation v-if="targetr_type == 'satellite'" :facility = "targetr_info.facility"></SatelliteInstallation>
            <BuoyInstallation v-if="targetr_type == 'buoy'" :facility = "targetr_info.facility"></BuoyInstallation>
          </div>
          <div v-if="tab_show == 'dynamic'">
            <AirplaneDynamic v-if="targetr_type == 'airplane'" :dynamic = "targetr_info.dynamic"></AirplaneDynamic>
            <ShiplaneDynamic v-if="targetr_type == 'ship'" :dynamic = "targetr_info.dynamic"></ShiplaneDynamic>
            <SatellitelaneDynamic v-if="targetr_type == 'satellite'" :dynamic = "targetr_info.dynamic"></SatellitelaneDynamic>
            <BuoyDynamic v-if="targetr_type == 'buoy'" :dynamic = "targetr_info.dynamic"></BuoyDynamic>
>>>>>>> 51f978f23dbf486984c8ebcae971bc0dcfd63fbf
          </div>
          <div v-if="tab_show == 'personnel'">
            <personnel :usr = "targetr_info"></personnel>
          </div>
          <div v-if="tab_show == 'organization'">
            <organization :organization = "targetr_info"></organization>
          </div>
          <div v-if="tab_show == 'information'">
            <information :information = "targetr_info"></information>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import AirplaneInstallation from './installation/airplane_installation'
import ShipInstallation from './installation/ship_installation'
import SatelliteInstallation from './installation/satellite_installation'
import BuoyInstallation from './installation/buoy_installation'
import AirplaneDynamic from './dynamic/airplane_dynamic'
import ShiplaneDynamic from './dynamic/ship_dynamic'
import SatellitelaneDynamic from './dynamic/satellite_dynamic'
import BuoyDynamic from './dynamic/buoy_dynamic'
import personnel from './personnel/personnel'
import organization from './organization/organization'
import information from './information/information'
// import ax from 'axios'
export default {
  name: 'RelevantInformation',
  components: { AirplaneInstallation, AirplaneDynamic, personnel, organization, information, ShipInstallation, SatelliteInstallation, BuoyInstallation, ShiplaneDynamic, SatellitelaneDynamic, BuoyDynamic },
  data () {
    return {
      tab_show: 'installation',
      // spinShow: false
      // targetr_info: {}
    }
  },
  props: ['targetr_type', 'targetr_id', 'targetr_info', 'spinShow'],
  watch: {
    targetr_type(newVal, oldVal) {
      this.tab_show = 'installation'
      this.get_info()
    },
    targetr_id() {
      this.tab_show = 'installation'
      this.get_info()
    }
  },
  mounted() {
    this.get_info()
  },
  methods: {
    // tab切换
    changeTab(value) {
      this.tab_show = value
    },
    // 获取目标
    get_info() {
      this.spinShow = true
      // let url
      // if (this.targetr_type === 'airplane') {
      //   url = '/air_plane'
      // } else if (this.targetr_type === 'ship') {
      //   url = '/ship'
      // } else if (this.targetr_type === 'satellite') {
      //   url = '/satellite'
      // } else if (this.targetr_type === 'buoy') {
      //   url = '/buoy'
      // }
      // ax.post(url, {
      //   query: `{
      //       test(){
      //       }
      //   }`
      // }).then(r => {
      //   this.spinShow = false
      //   let resp = r.data
      //   this.targetr_info = resp
      // })
    }
  }
}
</script>
<style scoped lang="scss">
  .RelevantInformation{
    padding: 10px;
    background: #000000b3;
    border: 1px solid #009bef;
    box-shadow: 0 0 20px 2px #009bef;
    .RelevantInformation_container{
      .RelevantInformation_operator_tabs{
        display: flex;

        .RelevantInformation_operator_tab{
          color:#fff;
          display:flex;
          cursor: pointer;
          align-items:center;
          font-size:12px;
          padding-right: 2px;

          .RelevantInformation_operator_icon{
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
        }
        .RelevantInformation_operator_tab_active{
          background: #000000;
          border: 1px solid;
          border-color:#ffffff99 #ffffff99 transparent #ffffff99;
          border-radius: 2px;
          z-index: 10;
        }
      }
      .RelevantInformation_content{
        /*background-color: rgb(255, 255, 255 , .8);*/
        padding-top: 10px;
        border-top: 1px solid #ffffff80;
        position: relative;
        top: -1px;
        border-radius: 0 0 2px 2px;
        // height: 174px;
        z-index: 9;
      }
    }
  }
</style>

<template>
  <div class="TargetrInformation">
    <div class="TargetrInformation_img">
      <img src="../../assets/images/airplane.jpg" alt="">
    </div>
    <!-- 飞机的目标信息 -->
    <div style="flex:1;">
      <AirplaneInformation :base_info="base_info" v-if="targetr_type=='Plane'" @change_Relevant = "change_Relevant"></AirplaneInformation>
      <ShipInformation :base_info="base_info" v-if="targetr_type=='Ship'" @change_Relevant = "change_Relevant"></ShipInformation>
      <SatelliteInformation :base_info="base_info" v-if="targetr_type=='Satellite'" @change_Relevant = "change_Relevant"></SatelliteInformation>
      <BuoyInformation :base_info="base_info" v-if="targetr_type=='Buoy'" @change_Relevant = "change_Relevant"></BuoyInformation>
      <AirportInformation :base_info="base_info" v-if="targetr_type=='Airport'" @change_Relevant = "change_Relevant"></AirportInformation>
      <PortInformation :base_info="base_info" v-if="targetr_type=='Port'" @change_Relevant = "change_Relevant"></PortInformation>
      <LaunchingSiteInformation :base_info="base_info" v-if="targetr_type=='LaunchSite'" @change_Relevant = "change_Relevant"></LaunchingSiteInformation>
    </div>

    <div class="TargetrInformation_chart">
      <template>
        <ve-line width="330px" height="160px" :legend-visible="false" :grid="grid" 
        :data="targetr_type == 'Plane' ? chartDataAirplane : targetr_type == 'Ship' ? chartDataShip : targetr_type == 'Satellite' ? chartDataSatellite : targetr_type == 'Buoy' ? chartDataBuoy : []" :settings="chartSettings"></ve-line>
      </template>
    </div>
  </div>
</template>

<script>
import AirplaneInformation from './airplane_information'
import ShipInformation from './ship_information'
import SatelliteInformation from './satellite_information'
import BuoyInformation from './buoy_information'
import AirportInformation from './airport_information'
import PortInformation from './port_information'
import LaunchingSiteInformation from './launching_site_information'
export default {
  name: 'TargetrInformation',
  components: { AirplaneInformation, ShipInformation, SatelliteInformation, BuoyInformation, AirportInformation, PortInformation, LaunchingSiteInformation },
  data() {
    this.chartSettings = {
      area: true,
      scale: true
    }
    this.grid = {
      show: true,
      width: '330px',
      height: '160px',
      top: 0,
      left: 0,
      bottom: 0,
      color: '#fff',
      backgroundColor: 'transparent',
      borderColor: '#000'
    }
    return {
      // 飞机折线图数据
      chartDataAirplane: {
        columns: ['时间', '垂直高度', '水平速度', '方位角'],
        rows: [
          { '时间': '2019/09/17 09:56', '垂直高度': 393, '水平速度': 93, '方位角': 300 },
          { '时间': '2019/09/17 10:56', '垂直高度': 530, '水平速度': 230, '方位角': 250 },
          { '时间': '2019/09/17 11:56', '垂直高度': 923, '水平速度': 223, '方位角': 220 },
          { '时间': '2019/09/17 12:56', '垂直高度': 723, '水平速度': 423, '方位角': 270 },
          { '时间': '2019/09/17 13:56', '垂直高度': 792, '水平速度': 392, '方位角': 290 },
          { '时间': '2019/09/17 14:56', '垂直高度': 593, '水平速度': 293, '方位角': 400 }
        ]
      },
      // 船舶折线图数据
      chartDataShip: {
        columns: ['时间', '航速', '船迹向'],
        rows: [
          { '时间': '2019/09/17 09:56', '航速': 393, '船迹向': 93 },
          { '时间': '2019/09/17 10:56', '航速': 530, '船迹向': 230 },
          { '时间': '2019/09/17 11:56', '航速': 923, '船迹向': 223 },
          { '时间': '2019/09/17 12:56', '航速': 723, '船迹向': 423 },
          { '时间': '2019/09/17 13:56', '航速': 792, '船迹向': 392 },
          { '时间': '2019/09/17 14:56', '航速': 593, '船迹向': 293 }
        ]
      },
      // 卫星折线图数据
      chartDataSatellite: {
        columns: ['时间', '速度', '高度'],
        rows: [
          { '时间': '2019/09/17 09:56', '速度': 393, '高度': 93 },
          { '时间': '2019/09/17 10:56', '速度': 530, '高度': 230 },
          { '时间': '2019/09/17 11:56', '速度': 923, '高度': 223 },
          { '时间': '2019/09/17 12:56', '速度': 723, '高度': 423 },
          { '时间': '2019/09/17 13:56', '速度': 792, '高度': 392 },
          { '时间': '2019/09/17 14:56', '速度': 593, '高度': 293 }
        ]
      },
      // 浮标线图数据
      chartDataBuoy: {
        columns: ['时间', '温度', '气压'],
        rows: [
          { '时间': '2019/09/17 09:56', '温度': 393, '气压': 93 },
          { '时间': '2019/09/17 10:56', '温度': 530, '气压': 230 },
          { '时间': '2019/09/17 11:56', '温度': 923, '气压': 223 },
          { '时间': '2019/09/17 12:56', '温度': 723, '气压': 423 },
          { '时间': '2019/09/17 13:56', '温度': 792, '气压': 392 },
          { '时间': '2019/09/17 14:56', '温度': 593, '气压': 293 }
        ]
      }

    }
  },
  props: ['targetr_type', 'base_info'],
  watch: {
    targetr_type() {

    }
  },
  methods: {
    change_Relevant(value) {
      this.$emit('change_Relevant', value)
    }
  },
  mounted () {
  }
}
</script>

<style>
.TargetrInformation {
  height: 100%;
  padding:10px 20px 0 20px;
  color: #fff;
  box-sizing: border-box;
  display: flex;
}
.TargetrInformation_img{
  width: 250px;
}
.TargetrInformation_img img{
  max-width: 240px;
  padding:10px 10px 0 0;
}
.TargetrInformation_chart{
  padding:5px 5px 0 0;
  width: 330px;
  height: 160px;
}
</style>

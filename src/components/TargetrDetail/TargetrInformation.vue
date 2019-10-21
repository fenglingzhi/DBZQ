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
    </div>

    <div class="TargetrInformation_chart">
      <template>
        <ve-line width="330px" height="160px" :legend-visible="false" :grid="grid" :data="chartData" :settings="chartSettings"></ve-line>
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
export default {
  name: 'TargetrInformation',
  components: { AirplaneInformation, ShipInformation, SatelliteInformation, BuoyInformation, AirportInformation, PortInformation },
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
      chartData: {
        columns: ['时间', '垂直高度', '水平速度', '方位角'],
        rows: [
          { '时间': '2019/09/17 09:56', '垂直高度': 393, '水平速度': 93, '方位角': 300 },
          { '时间': '2019/09/17 10:56', '垂直高度': 530, '水平速度': 230, '方位角': 250 },
          { '时间': '2019/09/17 11:56', '垂直高度': 923, '水平速度': 223, '方位角': 220 },
          { '时间': '2019/09/17 12:56', '垂直高度': 723, '水平速度': 423, '方位角': 270 },
          { '时间': '2019/09/17 13:56', '垂直高度': 792, '水平速度': 392, '方位角': 290 },
          { '时间': '2019/09/17 14:56', '垂直高度': 593, '水平速度': 293, '方位角': 400 }
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

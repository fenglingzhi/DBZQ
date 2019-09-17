<template>
  <div class="TargetrInformation">
    <div class="TargetrInformation_img">
      <img src="../../assets/images/airplane.jpg" alt="">
    </div>
    <!-- 飞机的目标信息 -->
    <div style="flex:1;">
      <AirplaneInformation :base_info="base_info" v-if="targetr_type=='Plane'"></AirplaneInformation>
      <ShipInformation :base_info="base_info" v-if="targetr_type=='Ship'"></ShipInformation>
      <SatelliteInformation :base_info="base_info" v-if="targetr_type=='Satellite'"></SatelliteInformation>
      <BuoyInformation :base_info="base_info" v-if="targetr_type=='Buoy'"></BuoyInformation>
    </div>

    <div class="TargetrInformation_chart">
      <template>
        <ve-line width="290px" height="160px" :legend-visible="false" :grid="grid" :data="chartData" :settings="chartSettings"></ve-line>
      </template>
    </div>
  </div>
</template>

<script>
import AirplaneInformation from './airplane_information'
import ShipInformation from './ship_information'
import SatelliteInformation from './satellite_information'
import BuoyInformation from './buoy_information'
export default {
  name: 'TargetrInformation',
  components: { AirplaneInformation, ShipInformation, SatelliteInformation, BuoyInformation },
  data() {
    this.chartSettings = {
      area: true,
      scale: true
    }
    this.grid = {
      show: true,
      width: '250px',
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
        columns: ['时间', '垂直高度', '水平速度'],
        rows: [
          { '时间': '2019/09/17 09:56', '垂直高度': 393, '水平速度': 93 },
          { '时间': '2019/09/17 10:56', '垂直高度': 530, '水平速度': 230 },
          { '时间': '2019/09/17 11:56', '垂直高度': 923, '水平速度': 223 },
          { '时间': '2019/09/17 12:56', '垂直高度': 723, '水平速度': 423 },
          { '时间': '2019/09/17 13:56', '垂直高度': 792, '水平速度': 392 },
          { '时间': '2019/09/17 14:56', '垂直高度': 593, '水平速度': 293 }
        ]
      }
    }
  },
  props: ['targetr_type', 'base_info'],
  watch: {
    targetr_type() {

    }
  },
  methods: { },
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
  max-height: 140px;
  padding:10px 10px 0 0;
}
.TargetrInformation_chart{
  padding:10px 10px 0 0;
  width: 330px;
  height: 160px;
}
</style>

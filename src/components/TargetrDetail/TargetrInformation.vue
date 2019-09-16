<template>
  <div class="TargetrInformation">
    <!-- 飞机的目标信息 -->
    <AirplaneInformation :base_info="base_info" v-if="targetr_type=='airplane'"></AirplaneInformation>
    <ShipInformation :base_info="base_info" v-if="targetr_type=='ship'"></ShipInformation>
    <SatelliteInformation :base_info="base_info" v-if="targetr_type=='satellite'"></SatelliteInformation>
    <BuoyInformation :base_info="base_info" v-if="targetr_type=='buoy'"></BuoyInformation>
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
    return {}
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
  flex-wrap: wrap;
}
</style>

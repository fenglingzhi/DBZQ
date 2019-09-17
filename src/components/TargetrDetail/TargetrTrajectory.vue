<template>
  <div class="TargetrTrajectory">
    <!-- 飞机的目标轨迹 -->
    <!-- <AirplaneTrajectory :real_time_info="real_time_info_data" v-if="targetr_type=='Plane'"></AirplaneTrajectory>
    <ShipTrajectory :real_time_info="real_time_info_data" v-if="targetr_type=='Ship'"></ShipTrajectory>
    <SatelliteTrajectory :real_time_info="real_time_info_data" v-if="targetr_type=='Satellite'"></SatelliteTrajectory>
    <BuoyTrajectory :real_time_info="real_time_info_data" v-if="targetr_type=='Buoy'"></BuoyTrajectory> -->

    <AirplaneTrajectory :real_time_info="real_time_info.history" v-if="targetr_type=='Plane'"></AirplaneTrajectory>
    <ShipTrajectory :real_time_info="real_time_info" v-if="targetr_type=='Ship'"></ShipTrajectory>
    <SatelliteTrajectory :real_time_info="real_time_info" v-if="targetr_type=='Satellite'"></SatelliteTrajectory>
    <BuoyTrajectory :real_time_info="real_time_info" v-if="targetr_type=='Buoy'"></BuoyTrajectory>
  </div>
</template>

<script>
import AirplaneTrajectory from './airplane_trajectory'
import ShipTrajectory from './ship_trajectory'
import SatelliteTrajectory from './satellite_trajectory'
import BuoyTrajectory from './buoy_trajectory'
import ax from 'axios'
export default {
  name: 'TargetrTrajectory',
  components: { AirplaneTrajectory, ShipTrajectory, SatelliteTrajectory, BuoyTrajectory },
  data() {
    return {
      real_time_info_data: []
    }
  },
  props: ['targetr_type', 'real_time_info'],
  methods: {
    // 获取目标
    get_info() {
      let url
      if (this.targetr_type === 'Plane') {
        url = '/air_plane'
      } else if (this.targetr_type === 'Ship') {
        url = '/ship'
      } else if (this.targetr_type === 'Satellite') {
        url = '/satellite'
      } else if (this.targetr_type === 'Buoy') {
        url = '/buoy'
      }
      ax.post(url, {
        query: `{
            test(){}
        }`
      }).then(r => {
        let resp = r.data
        this.real_time_info_data = resp.real_time_info
      })
    }
  },
  mounted () {
    this.get_info()
  }
  // props: ['targetr_type', 'real_time_info', 'targetr_info'],
  // methods: { },
  // mounted () { }
}
</script>

<style>
.TargetrTrajectory {
  height: 100%;
  padding:10px 20px 0 20px;
  color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
</style>

<template>
  <div class="TargetrTrajectory">
    <!-- 飞机的目标轨迹 -->
    <AirplaneTrajectory :real_time_info="real_time_info" v-if="targetr_type=='airplane'"></AirplaneTrajectory>
    <ShipTrajectory :real_time_info="real_time_info" v-if="targetr_type=='ship'"></ShipTrajectory>
  </div>
</template>

<script>
import AirplaneTrajectory from './airplane_trajectory'
import ShipTrajectory from './ship_trajectory'
export default {
  name: 'TargetrTrajectory',
  components: { AirplaneTrajectory, ShipTrajectory },
  data() {
    return {

    }
  },
  props: ["targetr_type", "real_time_info"],
  methods: { },
  mounted () { }
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

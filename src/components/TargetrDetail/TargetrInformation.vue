<template>
  <div class="TargetrInformation">
    <!-- 飞机的目标信息 -->
    <AirplaneInformation :base_info="base_info" v-if="targetr_type=='airplane'"></AirplaneInformation>
    <ShipInformation :base_info="base_info" v-if="targetr_type=='ship'"></ShipInformation>
  </div>
</template>

<script>
import AirplaneInformation from './airplane_information'
import ShipInformation from './ship_information'
export default {
  name: 'TargetrInformation',
  components: { AirplaneInformation, ShipInformation },
  data() {
    return {}
  },
  props: ['targetr_type', 'base_info'],
  watch: {
    targetr_type() {

    },
    targetr_id_select() {
      this.get_airplane()
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

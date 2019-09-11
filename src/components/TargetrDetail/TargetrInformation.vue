<template>
  <div class="TargetrInformation">
    <Spin size="large" fix v-if="spinShow"></Spin>
    <!-- 飞机的目标信息 -->
    <airplane-information :base_info="base_info"></airplane-information>
  </div>
</template>

<script>
import ax from 'axios'
import airplaneInformation from './airplane_information'
export default {
  name: 'TargetrInformation',
  components: { airplaneInformation },
  data() {
    return {
      base_info: [],
      spinShow: false,
      airplane_boolean: true
    }
  },
  props: ['targetr_type_select', 'targetr_id_select'],
  watch: {
    targetr_type_select() {
      this.get_airplane()
    },
    targetr_id_select() {
      this.get_airplane()
    }
  },
  methods: {
    // 获取飞机信息
    get_airplane() {
      if (this.airplane_boolean) {
        this.airplane_boolean = false
        ax.post('/air_plane', {
          query: `{
              test(){}
          }`
        }).then(r => {
          this.airplane_boolean = true
          let resp = r.data
          this.base_info = resp.base_info
        })
      }
    }
  },
  mounted () {
    this.get_airplane()
  }
}
</script>

<style>
.TargetrInformation {
  height: 100%;
  padding:10px 18px 0 18px;
  color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.airplane_container{
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
}
.info-data-item{
    width:250px;
    margin-bottom: 10px;
}
.info-title{
    color: #aaa;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.info-value{
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>

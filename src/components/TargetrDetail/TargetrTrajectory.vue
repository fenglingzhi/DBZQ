<template>
  <div class="TargetrTrajectory">
    <Spin size="large" fix v-if="spinShow"></Spin>
    <!-- 飞机的目标信息 -->
    <div class="airplane_container">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'起飞基地'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.take_off_base"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'降落基地'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.landing_base"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'出发时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.start_time"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'预计到达时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.pre_time"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'经度'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.longitude"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'纬度'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.latitude"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'高度'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.height"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'水平速度'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.horizontal_velocity"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'垂直速度'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.vertical_speed"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'方位角'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.azimuth"></span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ax from 'axios'
export default {
  name: 'TargetrTrajectory',
  components: { },
  data() {
    return {
      test: false,
      data: [],
      base_info: [],
      spinShow: true
    }
  },
  methods: {
    // 获取飞机信息
    get_airplane() {
      ax.post('/air_plane', {
        query: `{
            test(){}
        }`
      }).then(r => {
        let resp = r.data
        this.data = resp
        this.base_info = resp.real_time_info
        console.log(r.data)
        // this.data = r.data.query.test
        // vm.title = resp.title
        // vm.list1 = resp.arr
      })
    }
  },
  mounted () {
    this.get_airplane()
  }
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
.airplane_container{
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
}
.info-data-item{
    width:186px;
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

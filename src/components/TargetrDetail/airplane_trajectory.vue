<template>
    <!-- 飞机的目标信息 -->
    <div class="airplane_trajectory">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'起飞基地'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.take_off_base"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'降落基地'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.landing_base"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'出发时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.start_time"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'预计到达时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.pre_time"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'经度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.longitude"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'纬度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.latitude"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'高度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.height"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'水平速度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.horizontal_velocity"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'垂直速度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.vertical_speed"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'方位角'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.azimuth"></span>
            </div>
        </div>
    </div>
    

</template>

<script>
export default {
  name: 'airplane_trajectory',
  components: { },
  data() {
    return { }
  },
  props: ["real_time_info" ],
  methods: { },
  mounted () { }
}
</script>

<style>
.airplane_trajectory{
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

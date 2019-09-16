<template>
    <!-- 卫星的目标信息 -->
    <div class="satellite_trajectory">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'RCS（雷达横切面）'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.RCS"></span>
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
                <span v-text="'海拔'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.altitude"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'速度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.speed"></span>
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
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'发射场'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.launching_site"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'当前时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.current_time"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'satellite_trajectory',
  components: { },
  data() {
    return { }
  },
  props: [ 'real_time_info' ],
  methods: { },
  mounted () { }
}
</script>

<style>
.satellite_trajectory{
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

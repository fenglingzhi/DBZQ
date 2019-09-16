<template>
    <!-- 卫星的目标信息 -->
    <div class="buoy_trajectory">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'风向'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.wind_direction"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'风速'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.wind_speed"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'GST（阵风速度）'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.GST"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'波高'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.wave_height"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'平均波方向'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.wave_direction"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'平均周期'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.average_period"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'主导波周期'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.dominant_period"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'海平面气压'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.sea_pressure"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'气温'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.air_temperature"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'海面温度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.sea_temperature"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'水深'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.depth_water"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'压力趋势'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.pressure_trend"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'buoy_trajectory',
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
.buoy_trajectory{
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

<template>
    <!-- 飞机的目标信息 -->
    <div class="airplane_trajectory">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'起飞基地'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.action.originated.name"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'降落基地'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.action.landing.name"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'出发时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.action.ETD"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'预计到达时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.action.ETA"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'经度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.action.lon"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'纬度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.action.lat"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'高度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.action.alt"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'水平速度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.action.horSpeed"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'垂直速度'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.action.vetSpeed"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'方位角'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.action.azimuth"></span>
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
  props: [ 'real_time_info' ],
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

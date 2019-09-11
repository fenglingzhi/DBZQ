<template>
    <!-- 飞机的目标信息 -->
    <div class="ship_trajectory">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'船首向'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.heading"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'船迹向'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.ending"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'航速'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.speed"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'状态'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.status"></span>
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
                <span v-text="'吃水'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.draught"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'始发港口'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.start_port"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'停靠港口'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.mid_port"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'目的港口'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.end_port"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'预到时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.time"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'船舶任务'"></span>
            </div>
            <div class="info-value">
                <span v-text="real_time_info.task"></span>
            </div>
        </div>
    </div>
    

</template>

<script>
export default {
  name: 'ship_trajectory',
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
.ship_trajectory{
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

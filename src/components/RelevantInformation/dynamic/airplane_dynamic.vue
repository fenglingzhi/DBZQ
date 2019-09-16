<template>
    <!-- 航班设施信息 -->
    <div class="airplane_dynamic">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'起飞基地'"></span>
            </div>
            <div class="info-value">
                <span v-text="dynamic.take_off_base"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'降落基地'"></span>
            </div>
            <div class="info-value">
                <span v-text="dynamic.landing_base"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'出发时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="dynamic.start_time"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'预计到达时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="dynamic.pre_time"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'经度'"></span>
            </div>
            <div class="info-value">
                <span v-text="dynamic.longitude"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'纬度'"></span>
            </div>
            <div class="info-value">
                <span v-text="dynamic.latitude"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'airplane_dynamic',
  components: { },
  data() {
    return { }
  },
  props: ['dynamic'],
  methods: { },
  mounted () { }
}
</script>

<style>
.airplane_dynamic{ }
.info-data-item{
    width:100%;
    margin-bottom: 10px;
    display: flex;
}
.info-title{
    width: 150px;
    color: #aaa;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.info-value{
    width: 200px;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>

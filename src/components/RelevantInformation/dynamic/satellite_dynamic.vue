<template>
    <!-- 航班设施信息 -->
    <div class="satellite_dynamic">
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'发射场'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.take_off_base"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'经度'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.longitude"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'纬度'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.latitude"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'当前时间'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.now_time"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'satellite_dynamic',
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
.satellite_dynamic{ }
.row-info-data-item{
    width:100%;
    margin-bottom: 10px;
    display: flex;
}
.row-info-title{
    width: 150px;
    color: #aaa;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.row-info-value{
    width: 200px;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>

<template>
    <!-- 航班设施信息 -->
    <div class="ship_dynamic">
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'始发港口'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.take_off_base"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'目的港口'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.landing_base"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'预计到达时间'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.pre_time"></span>
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
    </div>
</template>

<script>
export default {
  name: 'ship_dynamic',
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
.ship_dynamic{ }
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

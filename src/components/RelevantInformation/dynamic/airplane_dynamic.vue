<template>
    <!-- 航班设施信息 -->
    <div class="airplane_dynamic">
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'起飞基地'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.action.originated.name"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'降落基地'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.action.landing.name"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'出发时间'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.action.ETD"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'预计到达时间'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.action.ETA"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'经度'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.action.lon"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'纬度'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="dynamic.action.lat"></span>
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

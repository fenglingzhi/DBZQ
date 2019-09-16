<template>
    <!-- 卫星的目标信息 -->
    <div class="satellite_information">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'卫星名称'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.satellite_name"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'所属国家'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.country"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'卫星用途'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.satellite_attribute =='0'?'军用':base_info.attribute =='1'?'民用':''"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'制造商'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.manufacturer"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'NORAD编号'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.NORAD"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'近地点（km）'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.perigee"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'远地点(km)'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.apogee"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'发射时间'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.launch_time"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'发射地点'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.launch_site"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'干质量（kg）'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.dry_mass"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'satellite_information',
  components: { },
  data() {
    return { }
  },
  props: ['base_info'],
  methods: { },
  mounted () { }
}
</script>

<style>
.satellite_information{
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

<template>
    <!-- 船舶的目标信息 -->
    <div class="port_information">
        <div class="info-data-item" style="cursor: pointer;" @click="change_Relevant('information')">
            <div class="info-title">
                <span v-text="'港口名称'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.name"></span>
            </div>
        </div>
        <div class="info-data-item" style="cursor: pointer;" @click="change_Relevant('organization')">
            <div class="info-title">
                <span v-text="'所在国家'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.country"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'港口代码'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.code"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'经度'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.longitude"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'纬度'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.latitude"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'码头数量'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.area"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'状态'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.status"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'port_information',
  components: { },
  data() {
    return { }
  },
  props: ['base_info'],
  methods: {
    change_Relevant(value) {
      this.$emit('change_Relevant', value)
    }
  },
  mounted () { }
}
</script>

<style>
.port_information{
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

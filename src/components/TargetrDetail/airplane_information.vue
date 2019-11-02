<template>
    <!-- 飞机的目标信息 -->
    <div class="airplane_information">
        <div class="info-data-item" style="cursor: pointer;" @click="change_Relevant('information')">
            <div class="info-title">
                <span v-text="'飞机名称'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.name"></span>
            </div>
        </div>
        <div class="info-data-item" style="cursor: pointer;" @click="change_Relevant('organization')">
            <div class="info-title">
                <span v-text="'隶属单位'"></span>
            </div>
            <div class="info-value">
                <span>{{base_info && base_info.ORG && base_info.ORG.cname}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'飞机性质'"></span>
            </div>
            <div class="info-value">
                <span> {{base_info && base_info.usage && base_info.usage.label}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'机型'"></span>
            </div>
            <div class="info-value">
                <span >{{base_info && base_info.model && base_info.model.label}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'注册信息'"></span>
            </div>
            <div class="info-value">
                <span>{{base_info && base_info.registration}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'所属国家'"></span>
            </div>
            <div class="info-value">
                <span>{{base_info && base_info.ORG && base_info.ORG.base && base_info.ORG.base.country && base_info.ORG.base.country.cname}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'应答机编码'"></span>
            </div>
            <div class="info-value">
                <span>{{base_info && base_info.radar && base_info.radar.responseCode}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'飞机雷达型号'"></span>
            </div>
            <div class="info-value">
                <span>{{base_info && base_info.radar && base_info.radar.model}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'ICAO编号'"></span>
            </div>
            <div class="info-value">
                <span>{{base_info && base_info.ICAO}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'MSN编号'"></span>
            </div>
            <div class="info-value">
                <span>{{base_info && base_info.MSN}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'airplane_information',
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
.airplane_information{
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

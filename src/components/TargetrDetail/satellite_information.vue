<template>
  <!-- 卫星的目标信息 -->
  <div class="satellite_information">
    <div class="info-data-item" style="cursor: pointer;" @click="change_Relevant('information')">
      <div class="info-title">
        <span v-text="'卫星名称'"></span>
      </div>
      <div class="info-value">
        <span v-text="base_info.name"></span>
      </div>
    </div>
    <div class="info-data-item" style="cursor: pointer;" @click="change_Relevant('organization')">
      <div class="info-title">
        <span v-text="'所属国家'"></span>
      </div>
      <div class="info-value">
        <span v-text="base_info.country.cname"></span>
      </div>
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'卫星用途'"></span>
      </div>
      <div class="info-value">
        <span v-text="base_info.usage.label"></span>
      </div>
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'制造商'"></span>
      </div>
      <div class="info-value">
        <span v-text="base_info.manufacturer.cname"></span>
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
        <span v-text="base_info.launchDate"></span>
      </div>
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'发射地点'"></span>
      </div>
      <div class="info-value">
        <span v-text="base_info.launchSite.city"></span>
      </div>
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'干质量（kg）'"></span>
      </div>
      <div class="info-value">
        <span v-text="base_info.drySass"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'satellite_information',
  components: {},
  data() {
    return {}
  },
  props: ['base_info'],
  methods: {
    change_Relevant(value) {
      this.$emit('change_Relevant', value)
    }
  },
  mounted() {}
}
</script>

<style>
.satellite_information {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.info-data-item {
  width: 186px;
  margin-bottom: 10px;
}
.info-title {
  color: #aaa;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.info-value {
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

<template>
    <!-- 浮标的目标信息 -->
    <div class="buoy_information">
        <div class="info-data-item" style="cursor: pointer;" @click="change_Relevant('information')">
            <div class="info-title">
                <span v-text="'站点名称'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.name"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'观测站类型'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.usage && base_info.usage.label"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'经度'"></span>
            </div>
            <div class="info-value">
                <span v-text="getPosition.y"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'纬度'"></span>
            </div>
            <div class="info-value">
                <span v-text="getPosition.x"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'浮标型号'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.model && base_info.model.label"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'寿命'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.life"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'重量'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.weight"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'标称吃水'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.draught"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'雷达反射面积'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.radarArea"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'材质'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.material"></span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'buoy_information',
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
  mounted () { },
  computed:{
      ...mapState(['selectedTarget']),
      getPosition(){
          return this.selectedTarget && this.selectedTarget.feature.geometry.coordinates
      }
  }
}
</script>

<style>
.buoy_information{
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

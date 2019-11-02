<template>
    <!-- 发射场的目标信息 -->
    <div class="launching_site_information">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'发射场名称'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info && base_info.name"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'所属国家'"></span>
            </div>
            <div class="info-value">
                <span>{{base_info && base_info.country && base_info.country.cname}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'所属地区'"></span>
            </div>
            <div class="info-value">
                <span> {{base_info && base_info.address && base_info.address.city}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'经度'"></span>
            </div>
            <div class="info-value">
                <span >{{getPosition.x}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'纬度'"></span>
            </div>
            <div class="info-value">
                <span>{{getPosition.y}}</span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'建造时间'"></span>
            </div>
            <div class="info-value">
                <span>{{base_info && base_info.buildDate}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'launching_site_information',
  components: { },
  data() {
    return { }
  },
  props: ['base_info'],
  methods: {},
  computed:{
      ...mapState(['selectedTarget']),
      getPosition(){
          return this.selectedTarget && this.selectedTarget.feature.geometry.coordinates
      }
  },
  mounted () { }
}
</script>

<style>
.launching_site_information{
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

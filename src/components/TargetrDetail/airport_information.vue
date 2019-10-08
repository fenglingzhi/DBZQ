<template>
<!--<<<<<<< HEAD-->
    <!-- 飞机的目标信息 -->
    <!--<div class="airport_information">-->
        <!--<div class="info-data-item" style="cursor: pointer;" @click="change_Relevant('information')">-->
            <!--<div class="info-title">-->
                <!--<span v-text="'机场名称'"></span>-->
            <!--</div>-->
            <!--<div class="info-value">-->
                <!--<span v-text="base_info.name"></span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="info-data-item" style="cursor: pointer;" @click="change_Relevant('organization')">-->
            <!--<div class="info-title">-->
                <!--<span v-text="'所属国家'"></span>-->
            <!--</div>-->
            <!--<div class="info-value">-->
                <!--<span>{{base_info.ORG.base.country.cname}}</span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="info-data-item">-->
            <!--<div class="info-title">-->
                <!--<span v-text="'机场性质'"></span>-->
            <!--</div>-->
            <!--<div class="info-value">-->
                <!--<span> {{base_info.usage.label}}</span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="info-data-item">-->
            <!--<div class="info-title">-->
                <!--<span v-text="'ICAO编号'"></span>-->
            <!--</div>-->
            <!--<div class="info-value">-->
                <!--<span>{{base_info.ICAO}}</span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="info-data-item">-->
            <!--<div class="info-title">-->
                <!--<span v-text="'经度'"></span>-->
            <!--</div>-->
            <!--<div class="info-value">-->
                <!--<span>{{base_info.longitude}}</span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="info-data-item">-->
            <!--<div class="info-title">-->
                <!--<span v-text="'纬度'"></span>-->
            <!--</div>-->
            <!--<div class="info-value">-->
                <!--<span>{{base_info.latitude}}</span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="info-data-item">-->
            <!--<div class="info-title">-->
                <!--<span v-text="'航站楼面积'"></span>-->
            <!--</div>-->
            <!--<div class="info-value">-->
                <!--<span>{{base_info.area}}</span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="info-data-item">-->
            <!--<div class="info-title">-->
                <!--<span v-text="'机位数量'"></span>-->
            <!--</div>-->
            <!--<div class="info-value">-->
                <!--<span>{{base_info.num}}</span>-->
            <!--</div>-->
        <!--</div>-->
<!--=======-->
  <!-- 飞机的目标信息 -->
  <div class="airport_information">
    <div class="info-data-item" style="cursor: pointer;" @click="change_Relevant('information')">
      <div class="info-title">
        <span v-text="'机场名称'"></span>
      </div>
      <div class="info-value">
        <span v-text="base_info.name"></span>
      </div>
<!--&gt;>>>>>> 7f16de4a955c7afbc56778e006821bb3b1e5ca0e-->
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'机场性质'"></span>
      </div>
      <div class="info-value">
        <span> {{base_info.usage.label}}</span>
      </div>
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'ICAO编号'"></span>
      </div>
      <div class="info-value">
        <span>{{base_info.ICAO}}</span>
      </div>
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'所属国家'"></span>
      </div>
      <div class="info-value">
        <span>{{base_info.ORG.base.country.cname}}</span>
      </div>
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'经度'"></span>
      </div>
      <div class="info-value">
        <span>{{base_info.longitude}}</span>
      </div>
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'纬度'"></span>
      </div>
      <div class="info-value">
        <span>{{base_info.latitude}}</span>
      </div>
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'航站楼面积'"></span>
      </div>
      <div class="info-value">
        <span>{{base_info.area}}</span>
      </div>
    </div>
    <div class="info-data-item">
      <div class="info-title">
        <span v-text="'机位数量'"></span>
      </div>
      <div class="info-value">
        <span>{{base_info.num}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'airport_information',
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
.airport_information{
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

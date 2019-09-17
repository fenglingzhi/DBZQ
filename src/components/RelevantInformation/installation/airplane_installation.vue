<template>
    <!-- 航班设施信息 -->
    <div class="airplane_installation">
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'机场名称'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.name"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'机场代码'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.code"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'机场类型'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.type"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'所属国家/地区'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.country"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'通航日期'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.date"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'飞行区等级'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.level"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'航站楼面积'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.area"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'机位数量'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.num"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'airplane_installation',
  components: { },
  data() {
    return { }
  },
  props: ['facility'],
  methods: { },
  mounted () { }
}
</script>

<style>
.airplane_installation{ }
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

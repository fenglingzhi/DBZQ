<template>
    <!-- 航班设施信息 -->
    <div class="ship_installation">
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'港口名称'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.name"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'港口代码'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.code"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'港口类型'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.type"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'所属地区'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.country"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'主营货类'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.main_good"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'最大吞吐量'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.max_throughput"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'水域面积'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.area"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'运行机构'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.opt_organization"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'联系电话'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.phone"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ship_installation',
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
.ship_installation{ }
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

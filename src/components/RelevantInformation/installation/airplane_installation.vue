<style>
  .airplane_installation{
    height: 100%;
    width: 100%;
  }
  .ivu-table-wrapper{
    border: none !important;
  }
  .ivu-table th{
    background-color:rgba(170, 170, 170, .5) !important;
    color: #aaa;
    padding:0 5px;
  }
  .ivu-table-cell{
    padding:0 5px !important;
  }
  .ivu-table, .ivu-table td{
    background-color:transparent !important;
    color: #fff;
  }
  .ivu-table-overflowY::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .ivu-table-overflowY::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .ivu-table-overflowY::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
</style>
<template>
    <!-- 航班设施信息 -->
    <div class="airplane_installation">
      <Table height="400" :columns="columns1" :data="data" size="small"></Table>
        <!--<div class="row-info-data-item">-->
            <!--<div class="row-info-title">-->
                <!--<span v-text="'机场名称'"></span>-->
            <!--</div>-->
            <!--<div class="row-info-value">-->
                <!--<span v-text="facility.action.originated.name"></span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="row-info-data-item">-->
            <!--<div class="row-info-title">-->
                <!--<span v-text="'机场代码'"></span>-->
            <!--</div>-->
            <!--<div class="row-info-value">-->
                <!--<span v-text="facility.action.originated.code"></span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="row-info-data-item">-->
            <!--<div class="row-info-title">-->
                <!--<span v-text="'机场类型'"></span>-->
            <!--</div>-->
            <!--<div class="row-info-value">-->
                <!--<span v-text="facility.action.originated.type"></span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="row-info-data-item">-->
            <!--<div class="row-info-title">-->
                <!--<span v-text="'所属国家/地区'"></span>-->
            <!--</div>-->
            <!--<div class="row-info-value">-->
                <!--<span v-text="facility.action.originated.country.cname"></span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="row-info-data-item">-->
            <!--<div class="row-info-title">-->
                <!--<span v-text="'通航日期'"></span>-->
            <!--</div>-->
            <!--<div class="row-info-value">-->
                <!--<span v-text="facility.action.originated.openDate"></span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="row-info-data-item">-->
            <!--<div class="row-info-title">-->
                <!--<span v-text="'飞行区等级'"></span>-->
            <!--</div>-->
            <!--<div class="row-info-value">-->
                <!--<span v-text="facility.action.originated.level"></span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="row-info-data-item">-->
            <!--<div class="row-info-title">-->
                <!--<span v-text="'航站楼面积'"></span>-->
            <!--</div>-->
            <!--<div class="row-info-value">-->
                <!--<span v-text="facility.action.originated.area"></span>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="row-info-data-item">-->
            <!--<div class="row-info-title">-->
                <!--<span v-text="'机位数量'"></span>-->
            <!--</div>-->
            <!--<div class="row-info-value">-->
                <!--<span v-text="facility.action.originated.parkCount"></span>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
export default {
  name: 'airplane_installation',
  components: { },
  data() {
    return {
      columns1: [
        {
          title: '机场名称',
          key: 'name'
        },
        {
          title: '机场代码',
          key: 'code'
        },
        {
          title: '机场类型',
          key: 'type'
        },
        {
          title: '所属国家/地区',
          key: 'country'
        },
        {
          title: '通航日期',
          key: 'date'
        },
        {
          title: '飞行区等级',
          key: 'level'
        },
        {
          title: '航站楼面积',
          key: 'area'
        },
        {
          title: '机位数量',
          key: 'num'
        }
      ],
      data: []
    }
  },
  props: ['facility'],
  watch: {
    facility() {
      this.data = this.facility
    }
  },
  methods: { },
  mounted () {
    setTimeout(() => {
      this.data = this.facility
    }, 0)
  }
}
</script>

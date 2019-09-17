<style>
  .ship_installation{
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
    <div class="ship_installation">
      <Table height="400" :columns="columns1" :data="data" size="small"></Table>
    </div>
</template>

<script>
export default {
  name: 'ship_installation',
  components: { },
  data() {
    return {
      columns1: [
        {
          title: '港口名称',
          key: 'name'
        },
        {
          title: '港口代码',
          key: 'code'
        },
        {
          title: '港口类型',
          key: 'type'
        },
        {
          title: '所属地区',
          key: 'country'
        },
        {
          title: '主营货类',
          key: 'main_good'
        },
        {
          title: '最大吞吐量',
          key: 'max_throughput'
        },
        {
          title: '水域面积',
          key: 'area'
        },
        {
          title: '运行机构',
          key: 'opt_organization'
        },
        {
          title: '联系电话',
          key: 'phone'
        }
      ],
      data: []
    }
  },
  props: ['facility'],
  watch: {
    facility() {
      this.data = this.facility.facility
    }
  },
  methods: { },
  mounted () {
    setTimeout(() => {
      this.data = this.facility.facility
    }, 0)
  }
}
</script>

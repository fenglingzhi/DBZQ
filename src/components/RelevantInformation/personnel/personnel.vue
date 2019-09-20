<style>
  .personnel{
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
    <div class="personnel">
      <Table height="400" :columns="columns1" :data="data" size="small"></Table>
    </div>
</template>

<script>
import expandRow from './personnel-expand.vue'
export default {
  name: 'personnel',
  components: { },
  data() {
    return {
      columns1: [
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                  row: params.row
              }
            })
          }
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '别名',
          key: 'nickname'
        },
        {
          title: '国籍',
          key: 'country'
        },
        {
          title: '出生日期',
          key: 'birthday'
        },
        {
          title: '工作方向',
          key: 'job'
        },
        {
          title: '常在城市',
          key: 'city'
        }
      ],
      data: [ ]
    }
  },
  props: ['usr'],
  computed: {
  },
  methods: { },
  mounted () {
    this.data.push(this.usr)
  }
}
</script>
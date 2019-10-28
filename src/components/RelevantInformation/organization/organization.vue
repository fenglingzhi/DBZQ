<style>
  .organization{
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
    <div class="organization">
      <Table height="400" :columns="columns1" :data="data" size="small"></Table>
    </div>
</template>

<script>
import expandRow from './organization-expand.vue'
export default {
  name: 'organization',
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
          title: '机构名称',
          key: 'cname'
        },
        {
          title: '机构简称',
          key: 'abbr'
        },
        {
          title: '机构类型',
          key: 'type'
        },
        {
          title: '业务方向',
          key: 'business'
        },
        {
          title: '主管领导',
          key: 'name'
        }
      ]
    }
  },
  props: ['organization'],
  computed: {
    data() {
      return [this.organization] && [this.organization].map(({ cname, ename, abbr, code, type, base, business, superior, leader }) => {
        let cdata = { cname, ename, abbr, code, type, base, business, superior, leader }
        return cdata
      })
    }
  },
  methods: { },
  mounted () {
    // this.data.push(this.organization)
  }
}
</script>

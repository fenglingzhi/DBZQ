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
  .ivu-table .demo-table-info-row td{
    background-color: #2db7f5 !important;
    color: #fff;
  }
</style>
<template>
    <!-- 航班设施信息 -->
    <div class="airplane_installation">
      <button @click="showActiveColumn(parseInt(Math.random()*5))">点击</button>
      <button @click="reset()">清除</button>
      <Table height="400" :row-class-name = "rowClassName" :columns="columns1" :data="data" size="small" @on-row-click="showRow"></Table>
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
//        {
//          title: '国家/地区',
//          key: 'country'
//        },
        {
          title: '通航日期',
          key: 'date'
        },
//        {
//          title: '飞行区等级',
//          key: 'level'
//        },
//        {
//          title: '航站楼面积',
//          key: 'area'
//        },
        {
          title: '机位数量',
          key: 'num'
        }
      ],
      activeIndex: ''
      // data: {}
    }
  },
  props: ['facility'],
  computed: {
    data() {
      return this.facility && this.facility.map(({ name, code, usage, address, openDate, level, area, parkCount }) => {
        let cdata = { name, code, 'type': usage.label, 'country': address.country.cname, 'date': new Date(openDate).toLocaleDateString(), level, area, 'num': parkCount }
        return cdata
      })
    }
  },
  methods: {
    showRow (data) {
      console.log('设施行项目的点击操作以及data')
      console.log(data)
    },
    showActiveColumn (index) {
      this.activeIndex = index
    },
    rowClassName (row, index) {
      if (index === this.activeIndex) {
        return 'demo-table-info-row';
      }
      return '';
    },
    reset () {
      this.activeIndex = ''
    }
  },
  mounted () { }
}
</script>

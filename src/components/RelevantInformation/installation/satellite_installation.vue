<style>
  .satellite_installation{
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
    <div class="satellite_installation">
      <Table height="400" :columns="columns1" :data="data" size="small" @on-row-click="showRow"></Table>
    </div>
</template>

<script>
export default {
  name: 'satellite_installation',
  components: { },
  data() {
    return {
      columns1: [
        {
          title: '发射地点',
          key: 'launch_site'
        }
      ],
      data: []
    }
  },
  props: ['facility'],
  watch: {
    facility() {
      this.data = this.facility.map(({name})=>({launch_site:name}))

    }
  },
  methods: {
    showRow (data) {
      console.log('设施行项目的点击操作以及data')
      console.log(data)
    }
  },
  mounted () {
    setTimeout(() => {
      this.data = this.facility.map(({name})=>({launch_site:name}))
    }, 0)
  }
}
</script>

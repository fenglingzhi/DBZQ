<style>
  .satellite_trajectory{
    height: 100%;
    width: 100%;
  }
  .ivu-table-wrapper{
    border: none !important;
  }
  .ivu-table th{
    background-color:rgba(170, 170, 170, .5) !important;
    color: #aaa;
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
    <!-- 飞机的目标信息 -->
    <div class="satellite_trajectory">
      <Table height="163" :columns="columns1" :data="data">
        <template slot="action">
            <Icon type="md-play" />
        </template>
      </Table>
    </div>
</template>

<script>
export default {
  name: 'satellite_trajectory',
  components: { },
  data() {
    return {
      columns1: [
        {
          title: 'RCS',
          key: 'RCS'
        },
        {
          title: '经度',
          key: 'longitude'
        },
        {
          title: '纬度',
          key: 'latitude'
        },
        {
          title: '海拔',
          key: 'altitude'
        },
        {
          title: '速度',
          key: 'speed'
        },
        {
          title: '方位角',
          key: 'azimuth'
        },
        {
          title: '发射场',
          key: 'launching_site'
        },
        {
          title: '当前时间',
          key: 'current_time'
        },
        {
          title: '操作',
          slot: 'action',
          width: 100,
          align: 'center'
        }
      ],
      data: []
    }
  },
  props: {
    real_time_info: {
      type: Array
    }
  },
  watch: {
    real_time_info() {
      this.data = this.real_time_info
    }
  },
  methods: { },
  mounted () {
    setTimeout(() => {
      this.data = this.real_time_info
    }, 0)
  }
}
</script>

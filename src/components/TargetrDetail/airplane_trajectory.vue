<style>
  .airplane_trajectory{
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
    <div class="airplane_trajectory">
      <Table height="163" :columns="columns1" :data="data">
        <template slot="action">
            <Icon type="md-play" />
        </template>
      </Table>
    </div>
</template>

<script>
export default {
  name: 'airplane_trajectory',
  components: { },
  data() {
    return {
      columns1: [
        {
          title: '起飞基地',
          key: 'take_off_base'
        },
        {
          title: '降落基地',
          key: 'landing_base'
        },
        {
          title: '出发时间',
          key: 'start_time'
        },
        {
          title: '预计到达时间',
          key: 'pre_time'
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
          title: '高度',
          key: 'height'
        },
        {
          title: '水平速度',
          key: 'horizontal_velocity'
        },
        {
          title: '垂直速度',
          key: 'vertical_speed'
        },
        {
          title: '方位角',
          key: 'azimuth'
        },
        {
          title: '操作',
          slot: 'action',
          width: 100,
          align: 'center'
        }
      ],
      data:[],
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



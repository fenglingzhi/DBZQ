<style>
  .ship_trajectory{
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
    <div class="ship_trajectory">
      <Table height="163" :columns="columns1" :data="data">
        <template slot="action">
            <Icon type="md-play" />
        </template>
      </Table>
    </div>
</template>

<script>
export default {
  name: 'ship_trajectory',
  components: { },
  data() {
    return {
      columns1: [
        {
          title: '船首向',
          key: 'take_off_base'
        },
        {
          title: '船迹向',
          key: 'landing_base'
        },
        {
          title: '出发时间',
          key: 'start_time'
        },
        {
          title: '状态（在航等）',
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
          title: '吃水',
          key: 'height'
        },
        {
          title: '始发港口',
          key: 'horizontal_velocity'
        },
        {
          title: '停靠港口',
          key: 'vertical_speed'
        },
        {
          title: '目的港口',
          key: 'azimuth'
        },
        {
          title: '预到时间',
          key: 'azimuth'
        },
        {
          title: '船舶任务',
          key: 'azimuth'
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

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
          key: 'heading'
        },
        {
          title: '船迹向',
          key: 'ending'
        },
        {
          title: '出发时间',
          key: 'ETD'
        },
        {
          title: '状态（在航等）',
          key: 'status'
        },
        {
          title: '经度',
          key: 'lon'
        },
        {
          title: '纬度',
          key: 'lat'
        },
        {
          title: '吃水',
          key: 'draught'
        },
        {
          title: '始发港口',
          key: 'loading'
        },
        {
          title: '停靠港口',
          key: ''
        },
        {
          title: '目的港口',
          key: 'destination'
        },
        {
          title: '预到时间',
          key: 'ETA'
        },
        {
          title: '船舶任务',
          key: ''
        },
        {
          title: '操作',
          slot: 'action',
          width: 100,
          align: 'center'
        }
      ]
    }
  },
  props: {
    real_time_info: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    data() {
      return this.real_time_info.map(({ heading, ending, ETD, status, lon, lat, draught, loading, destination, ETA }) => {
        let cdata = { heading, ending, 'ETD': new Date(ETD).toLocaleString(), status, lon, lat, draught, 'loading': loading.name, 'destination': destination.name, 'ETA': new Date(ETA).toLocaleString() }
        return cdata
      })
    }
  },
  methods: { },
  mounted () {}
}
</script>

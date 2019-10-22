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
  .ivu-table-overflowY::-webkit-scrollbar {/* 滚动条整体样式 */
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
        <template slot="action" slot-scope="{row,index}">
            <Icon style="cursor: pointer" type="md-play" @click="player(index)"  v-if="activeIndex !== index || status !== 'play'"/>
            <Icon style="cursor: pointer" type="md-pause" @click="pause(index)" v-if="activeIndex === index && status === 'play'"/>
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
          key: 'oname'
        },
        {
          title: '降落基地',
          key: 'lname'
        },
        {
          title: '出发时间',
          key: 'ETD'
        },
        {
          title: '到达时间',
          key: 'ETA'
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
          title: '高度',
          key: 'alt'
        },
        {
          title: '水平速度',
          key: 'horSpeed'
        },
        {
          title: '垂直速度',
          key: 'vetSpeed'
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
      activeIndex: ''
    }
  },
  props: {
    real_time_info: {
      type: Array,
      default: () => []
    },
    status: {
      type: String,
      default: ' '
    }
  },
  computed: {
    data() {
      // debugger
      return this.real_time_info ? this.real_time_info.map(({ originated, landing, ETD, ETA, lon, lat, alt, horSpeed, vetSpeed, azimuth }) => {
        let cdata = { 'oname': originated && originated.name, 'lname': landing && landing.name, 'ETD': new Date(ETD).toLocaleString(), 'ETA': new Date(ETA).toLocaleString(), lon, lat, alt, horSpeed, vetSpeed, azimuth }
        return cdata
      }) : []
    }
  },
  methods: {
    player(index) {
      this.activeIndex = index
      this.$root.mq.$emit('routePlay', this.real_time_info[index])
    },
    pause(index) {
      this.activeIndex = ''
      this.$root.mq.$emit('routePlay', this.real_time_info[index])
    }
  },
  mounted () {
  }
}
</script>

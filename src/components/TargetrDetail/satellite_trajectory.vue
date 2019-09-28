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
          <Icon style="cursor: pointer" type="md-play" @click="player(index)"  v-if="activeIndex !== index"/>
          <Icon style="cursor: pointer" type="md-pause" @click="pause(index)" v-if="activeIndex === index"/>
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
          key: 'lon'
        },
        {
          title: '纬度',
          key: 'lat'
        },
        {
          title: '海拔',
          key: 'geocentric'
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
          key: 'city'
        },
        {
          title: '当前时间',
          key: 'GMT'
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
      return this.real_time_info && this.real_time_info.map(({ action, launchSite }) => {
        let cdata = { 'RCS': action && action.RCS, 'lon': action && action.lon, 'lat': action && action.lat, 'geocentric': action && action.geocentric, 'speed': action && action.speed, 'city': launchSite && launchSite.city, 'GMT': action && new Date(action.GMT).toLocaleString() }
        return cdata
      })
    }
  },
  methods: {
    player(index) {
      this.activeIndex = index
      this.$root.mq.$emit('routePlay', this.real_time_info[index])
    },
    pause(index){
      this.activeIndex = ''
      this.$root.mq.$emit('routePlay', this.real_time_info[index])
    }
  },
  mounted () { }
}
</script>

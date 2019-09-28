<style>
  .buoy_trajectory{
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
    <div class="buoy_trajectory">
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
  name: 'buoy_trajectory',
  components: { },
  data() {
    return {
      columns1: [
        {
          title: '风向',
          key: 'windDirection'
        },
        {
          title: '风速',
          key: 'windSpeed'
        },
        {
          title: 'GST（阵风速度）',
          key: 'GST'
        },
        {
          title: '波高',
          key: 'waveHeight'
        },
        {
          title: '平均波方向',
          key: 'waveDirection'
        },
        {
          title: '平均周期',
          key: 'averagePeriod'
        },
        {
          title: '主导波周期',
          key: 'dominantPeriod'
        },
        {
          title: '海平面气压',
          key: 'seaPressure'
        },
        {
          title: '气温',
          key: 'airTemperature'
        },
        {
          title: '海面温度',
          key: 'seaTemperature'
        },
        {
          title: '水深',
          key: 'depthWater'
        },
        {
          title: '压力趋势',
          key: 'pressureTrend'
        },
        {
          title: '操作',
          slot: 'action',
          width: 100,
          align: 'center'
        }
      ]
      // data: []
    }
  },
  props: {
    real_time_info: {
      type: Array
    }
  },
  computed: {
    data() {
      return this.real_time_info.map(({ windDirection, windSpeed, GST, waveHeight, waveDirection, averagePeriod, dominantPeriod, seaPressure, airTemperature, seaTemperature, depthWater, pressureTrend }) => {
        let cdata = { windDirection, windSpeed, GST, waveHeight, waveDirection, averagePeriod, dominantPeriod, seaPressure, airTemperature, seaTemperature, depthWater, pressureTrend }
        return cdata
      })
    }
  },
<<<<<<< HEAD
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
=======
>>>>>>> a225fe4a948d5c19b92408ef9830fbc505990dd7
  mounted () {
    setTimeout(() => {
      this.data = this.real_time_info
    }, 0)
  }
}
</script>

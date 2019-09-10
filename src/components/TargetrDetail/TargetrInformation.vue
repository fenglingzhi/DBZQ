<template>
  <div class="TargetrInformation">

    <!-- 飞机的目标信息 -->
    <div class="airplane_container">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'飞机名称'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.name"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'飞机性质'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.attribute =='0'?'军用':base_info.attribute =='1'?'民用':''"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'机型'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.model"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'注册信息'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.sign_info"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'隶属单位'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.organization"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'所属国家'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.country"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'应答机编码'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.yd_code"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'飞机雷达型号'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.radar_type"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'ICAO编号'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.ICAO"></span>
            </div>
        </div>
    </div>
    

  </div>
</template>

<script>
import ax from 'axios'
export default {
  name: 'TargetrInformation',
  components: { },
  data() {
    return {
        test: false,
        data:[],
        base_info:[],
    }
  },
  methods: {
    // 获取飞机信息
    get_airplane(){
      let vm = this
        ax.post('/air_plane', {
        query: `{
            test(){}
        }`
        }).then(r => {
        let resp = r.data
        this.data = resp
        this.base_info = resp.base_info;
        console.log(r.data)
        // this.data = r.data.query.test
        // vm.title = resp.title
        // vm.list1 = resp.arr
        })
    }
  },
  mounted () {
    this.get_airplane();
  }
}
</script>

<style>
.TargetrInformation {
  height: 100%;
  padding:10px 19px 0 19px;
  color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.airplane_container{
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
}
.info-data-item{
    width:250px;
    margin-bottom: 10px;
}
.info-title{
    color: #aaa;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.info-value{
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>

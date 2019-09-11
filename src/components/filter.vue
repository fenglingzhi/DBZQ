<template>
  <div class="filter">
    <div class="filter_wrap animated" :class = "show === true  ? 'fadeInLeft':'fadeOutLeft'">
      <!--<div class="title">飞机</div>-->
      <!--<Divider size="small" />-->
      <i-collapse simple accordion>
        <Panel  class="plane" name="1">
          飞机
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">地区</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in searchData.airArea" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">国家</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in searchData.airCountry" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">军民属性</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in searchData.property" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">类型</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in searchData.type" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">高度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in searchData.height" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">速度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in searchData.speed" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
        </Panel>
        <Panel name="2">
          船舶
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">地区</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">国家</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">军民属性</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">类型</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">高度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">速度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
        </Panel>
        <Panel name="3">
          卫星
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">地区</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">国家</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">军民属性</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">类型</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">高度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">速度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
        </Panel>
        <Panel name="4">
          浮标
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">地区</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">国家</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">军民属性</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">类型</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">高度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">速度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
        </Panel>
        <Panel name="5">
          机场
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">地区</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">国家</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">军民属性</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">类型</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">高度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">速度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
        </Panel>
        <Panel name="6">
          港口
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">地区</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">国家</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">军民属性</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">类型</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">高度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">速度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
        </Panel>
        <Panel name="7">
          发射场
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">地区</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">国家</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">军民属性</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">类型</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">高度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">速度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
        </Panel>
        <Panel name="8">
          专题
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">地区</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">国家</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">军民属性</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">类型</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">高度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
          <Row slot="content" class="row_margin">
            <i-col span="6" class="label">速度</i-col>
            <i-col span="18">
              <Select size="small">
                <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
              </Select>
            </i-col>
          </Row>
        </Panel>
      </i-collapse>
      <!--<input type="text" placeholder="请输入筛选项">-->
      <div class="submit" @click="fadeChange()">搜索</div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import ax from 'axios'
export default {
  name: 'filterwrap',
  data() {
    return {
      show: true,
      countryList: [],
      searchData: {
        airCountry: [],
        airArea: [],
        property: [],
        type: [],
        height: [],
        speed: []
      }
    }
  },
  methods: {
    fadeChange() {
      this.show = !this.show
    },
    // 获取飞机搜索列表
    getAirList() {
      ax.post('/filter', {
        query: `{
        test(){}
      }`
      }).then(r => {
        let plane = r.data.airplane
        this.searchData.airCountry = plane.country
        this.searchData.airArea = plane.area
        this.searchData.property = plane.property
        this.searchData.type = plane.type
        this.searchData.height = plane.height
        this.searchData.speed = plane.speed
        console.log(plane)
      })
      console.log()
    }
  },
  mounted() {
    this.getAirList()
  }
}
</script>
<style scoped lang="scss">
  .ivu-divider-horizontal{
    margin: 11px 0;
  }
  .ivu-collapse-simple{
    background-color: transparent;
  }
  .ivu-collapse-simple>.ivu-collapse-item>.ivu-collapse-content>.ivu-collapse-content-box{
    color: #fff;
  }
  .filter{
    .filter_wrap{
      width: 300px;
      padding: 10px;
      /*margin-left: 260px;*/
      /*height: 700px;*/
      overflow: auto;
      background: #0000006b;
      border: 1px solid #009bef;
      box-shadow: 0 0 20px 2px #009bef;
      color:#fff;
      .title{
        text-align: center;
        font-size: 12px;
      }
      .row_margin{
        margin-bottom: 10px;
      }
      .label{
        line-height: 22px;
        color: #fff;
      }
      input{
        border: 1px solid #fff;
        outline: none;
        box-shadow: 0 0 6px 1px #fff;
        padding: 4px 6px;
        font-size: 14px;
      }
      input:focus{
        border: 1px solid #000;
        box-shadow: 0 0 1px 1px #084dff;
      }
    }
    .submit{
      text-align: center;
      padding: 5px 10px;
      background: #019aee;
      color: #fff;
      margin: 20px 0;
      box-shadow: 0 0 10px 1px #253280;
    }
  }

</style>

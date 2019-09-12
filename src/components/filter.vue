<template>
  <div class="filter">
    <div class="filter_wrap animated" :class = "show === true  ? 'fadeInLeft':'fadeOutLeft'">
      <!--<div class="title">飞机</div>-->
      <!--<Divider size="small" />-->
      <!--<input type="text" placeholder="请输入筛选项">-->
      <Tabs name="name1">
        <TabPane label="标签检索" tab="name1">
          <Row style="margin-bottom: 20px;">
            <i-col span="19">
              <Input v-model="value" size="small" placeholder="请输入要搜索的目标" />
              <div style="color: #fff;">
                船舶 ：<i style="font-size: 22px;" class="iconfont iconchuanbo"></i><br>
                飞机 ：<i style="font-size: 22px;" class="iconfont iconfeiji"></i><br>
                卫星 ：<i style="font-size: 22px;" class="iconfont iconweixing"></i><br>
                浮标 ：<i style="font-size: 22px;" class="iconfont iconfubiaobuoy"></i><br>
              </div>
            </i-col>
            <i-col span="4" offset="1">
              <Button type="primary" size="small" @click="fadeChange()">搜索</Button>
              <!--<div class="submit"></div>-->
            </i-col>
          </Row>
          <Tabs name="1-1" tab="name1">
            <TabPane label="飞机" tab="1-1">
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">地区：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.region">
                      <Radio v-for="item in regionOptions" :label="item.cname" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">国家：</i-col>
                  <i-col span="8">
                    <Tag color="primary" v-for="item in countryTags" :key="item.id">{{item.cname}}</Tag>
                  </i-col>
                </Row>
                <Row class="row_margin">
                  <i-col span="12" offset="3">
                    <!--<RadioGroup type="button" size="small" >-->
                    <!--<Radio v-for="item in searchData.airCountry" :label="item.name"></Radio>-->
                    <!--</RadioGroup>-->
                    <Select multiple size="small" v-model="conditions.country">
                      <Option v-for="item in countryList" :value="item.cname" :key="item.id">{{ item.cname }}</Option>
                    </Select>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">军民属性：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in searchData.property" :label="item.name"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">类型：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in searchData.type" :label="item.name"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">高度：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in searchData.height" :label="item.name"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">高度：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in searchData.speed" :label="item.name"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="船舶" tab="1-1">
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
            </TabPane>
            <TabPane label="卫星" tab="1-1">
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
            </TabPane>
            <TabPane label="浮标" tab="1-1">
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
            </TabPane>
            <TabPane label="机场" tab="1-1">
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
            </TabPane>
            <TabPane label="港口" tab="1-1">
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
            </TabPane>
            <TabPane label="发射场" tab="1-1">
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
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane label="主题检索" name="name2">
          <div>
            <Tag color="default">朝鲜商船</Tag>
            <Tag color="default">美国舰船</Tag>
            <Tag color="default">中国南海地区</Tag>
            <Tag color="default">越南商船</Tag>
          </div>
        </TabPane>
      </Tabs>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import ax from 'axios'
import { find, sampleSize } from 'lodash'
const GQL = {
  getRegionList: { query: `
    {
      regionList: getRegionList {
        id, cname,
        countryList{ cname, id }
      }
    }`
  },
  searchPlane: { query: `
    {
      planeList: searchPlanes {
        feature {
          id, type,
          geometry {
            type, coordinates
          }
        },
        symbol
      }
    }`
  }
}
export default {
  name: 'filterwrap',
  data() {
    return {
      show: true,
      searchData: {
        airCountry: [],
        airArea: [],
        property: [],
        type: [],
        height: [],
        speed: []
      },
      // 选中的搜索条件组合
      conditions: { region: null, country: null },
      // 大洲/国家 选项集合
      regionOptions: []
    }
  },
  computed: {
    countryList() {
      let region = find(this.regionOptions, { cname: this.conditions.region })
      return region && region.countryList
    },
    countryTags(){
      return sampleSize(this.countryList, 4)
    }
  },
  methods: {
    fadeChange() {
      this.executeGql(GQL.searchPlane).then(r => {
        this.$store.commit('planeList', r.planeList)
      })
      // this.show = !this.show
    },
    executeGql(gql) {
      return ax.post('/graphql', gql).then(({ data: { data } }) => data)
    }
  },
  mounted() {
    // 获取搜索区域列表
    this.executeGql(GQL.getRegionList).then(r => { this.regionOptions = r.regionList })
  }
}
</script>
<style scoped lang="scss">
  .ivu-radio-group-button .ivu-radio-wrapper-checked {
    background: #2d8cf0;
    color: #fff;
  }
  .filter{
    .filter_wrap{
      /*width: 300px;*/
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
      border-radius: 4px;
    }
  }

</style>

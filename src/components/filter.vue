<template>
  <div class="filter">
    <div class="filter_wrap animated" :class = "show === true  ? 'fadeInLeft':'fadeOutLeft'">
      <!--<div class="title">飞机</div>-->
      <!--<Divider size="small" />-->
      <!--<input type="text" placeholder="请输入筛选项">-->
      <Tabs name="name1">
        <TabPane label="标签检索" tab="name1">
          <Row style="margin-bottom: 20px;">
            <Col span="19">
              <Input v-model="value" size="small" placeholder="请输入要搜索的目标" />
            </Col>
            <Col span="4" offset="1">
              <Button type="primary" size="small" @click="fadeChange()">搜索</Button>
              <!--<div class="submit"></div>-->
            </Col>
          </Row>
          <Tabs name="1-1" tab="name1">
            <TabPane label="飞机" tab="1-1">
              <div>
                <Row slot="content" class="row_margin">
                  <Col span="3" class="label">地区：</Col>
                  <Col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in searchData.airArea" :label="item.name"></Radio>
                    </RadioGroup>
                  </Col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <Col span="3" class="label">国家：</Col>
                  <Col span="8">
                    <Tag color="primary">美国</Tag>
                    <Tag color="primary">日本</Tag>
                    <Tag color="primary">韩国</Tag>
                    <Tag color="primary">朝鲜</Tag>
                  </Col>
                </Row>
                <Row class="row_margin">
                  <Col span="12" offset="3">
                    <!--<RadioGroup type="button" size="small" >-->
                    <!--<Radio v-for="item in searchData.airCountry" :label="item.name"></Radio>-->
                    <!--</RadioGroup>-->
                    <Select multiple size="small">
                      <Option v-for="item in searchData.airCountry" :value="item.value" :key="item.value">{{ item.name }}</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <Col span="3" class="label">军民属性：</Col>
                  <Col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in searchData.property" :label="item.name"></Radio>
                    </RadioGroup>
                  </Col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <Col span="3" class="label">类型：</Col>
                  <Col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in searchData.type" :label="item.name"></Radio>
                    </RadioGroup>
                  </Col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <Col span="3" class="label">高度：</Col>
                  <Col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in searchData.height" :label="item.name"></Radio>
                    </RadioGroup>
                  </Col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <Col span="3" class="label">高度：</Col>
                  <Col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in searchData.speed" :label="item.name"></Radio>
                    </RadioGroup>
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="船舶" tab="1-1">
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">地区</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">国家</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">军民属性</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">类型</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">高度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">速度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
            </TabPane>
            <TabPane label="卫星" tab="1-1">
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">地区</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">国家</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">军民属性</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">类型</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">高度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">速度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
            </TabPane>
            <TabPane label="浮标" tab="1-1">
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">地区</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">国家</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">军民属性</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">类型</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">高度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">速度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
            </TabPane>
            <TabPane label="机场" tab="1-1">
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">地区</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">国家</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">军民属性</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">类型</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">高度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">速度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
            </TabPane>
            <TabPane label="港口" tab="1-1">
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">地区</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">国家</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">军民属性</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">类型</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">高度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">速度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
            </TabPane>
            <TabPane label="发射场" tab="1-1">
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">地区</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">国家</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">军民属性</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">类型</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">高度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
              </Row>
              <Row slot="content" class="row_margin">
                <Col span="6" class="label">速度</Col>
                <Col span="18">
                  <Select size="small">
                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                  </Select>
                </Col>
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
import { find } from 'lodash'
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
      countryList: [],
      searchData: {
        airCountry: [],
        airArea: [],
        property: [],
        type: [],
        height: [],
        speed: [],
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

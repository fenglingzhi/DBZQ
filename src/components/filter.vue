<template>
  <div class="filter">
    <div class="filter_wrap" :class="show === true  ? 'filter_wrap':'filter_wrap_open'">
      <!--<div class="title">飞机</div>-->
      <!--<Divider size="small"/>-->
      <!--<input type="text" placeholder="请输入筛选项">-->
      <Tabs name="name1">
        <TabPane label="标签检索" tab="name1">
          <Row style="margin-bottom: 10px;">
            <i-col span="20">
              <Input v-model="searchString" size="small" placeholder="请输入要搜索的目标"/>
            </i-col>
            <i-col span="3" offset="1">
              <Button type="primary" size="small" style="width: 100%;" @click="fadeChange()">搜索</Button>
            </i-col>
          </Row>
          <Tabs name="1-1" tab="name1" v-model="targetType">
            <TabPane label="飞机" tab="1-1" name="Plane">
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">区域：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.region">
                      <Radio v-for="item in regionOptions" :label="item.cname" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">国家/地区：</i-col>
                  <i-col span="21" style="max-height: 100px;overflow: auto">
                    <RadioGroup type="button" size="small" v-model="conditions.country">
                      <Radio v-for="item in countryTags" :label="item.id" :key="item.id" style="margin: 0 10px 10px 0;">
                        {{ item.cname }}
                      </Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <!--<div>-->
              <!--<Row slot="content" class="row_margin">-->
              <!--<i-col span="3" class="label">军民属性：</i-col>-->
              <!--<i-col span="21">-->
              <!--<RadioGroup type="button" size="small" >-->
              <!--<Radio v-for="item in planeUsage" :label="item.label" :key="item.id"></Radio>-->
              <!--</RadioGroup>-->
              <!--</i-col>-->
              <!--</Row>-->
              <!--</div>-->
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">类型：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.model">
                      <Radio v-for="item in planeKind" :label="item.label" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">高度：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.height">
                      <Radio v-for="item in planeHeight" :label="item.value" :key="item.id">{{ item.label }}</Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">速度：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.speed">
                      <Radio v-for="item in planeSpeed" :label="item.value" :key="item.id">{{ item.label }}</Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="船舶" tab="1-1" name="Ship">
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">区域：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.region">
                      <Radio v-for="item in regionOptions" :label="item.cname" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">国家/地区：</i-col>
                  <i-col span="21" style="max-height: 100px;overflow: auto">
                    <RadioGroup type="button" size="small" v-model="conditions.country">
                      <Radio v-for="item in countryTags" :label="item.id" :key="item.id" style="margin: 0 10px 10px 0;">
                        {{ item.cname }}
                      </Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <!--<div>-->
              <!--<Row slot="content" class="row_margin">-->
              <!--<i-col span="3" class="label">军民属性：</i-col>-->
              <!--<i-col span="21">-->
              <!--<RadioGroup type="button" size="small" >-->
              <!--<Radio v-for="item in planeUsage" :label="item.label" :key="item.id"></Radio>-->
              <!--</RadioGroup>-->
              <!--</i-col>-->
              <!--</Row>-->
              <!--</div>-->
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">类型：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small">
                      <Radio v-for="item in planeKind" :label="item.label" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="卫星" tab="1-1" name="Satellite">
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">区域：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.region">
                      <Radio v-for="item in regionOptions" :label="item.cname" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">国家/地区：</i-col>
                  <i-col span="21" style="max-height: 100px;overflow: auto">
                    <RadioGroup type="button" size="small" v-model="conditions.country">
                      <Radio v-for="item in countryTags" :label="item.id" :key="item.id" style="margin: 0 10px 10px 0;">
                        {{ item.cname }}
                      </Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <!--<div>-->
              <!--<Row slot="content" class="row_margin">-->
              <!--<i-col span="3" class="label">军民属性：</i-col>-->
              <!--<i-col span="21">-->
              <!--<RadioGroup type="button" size="small" >-->
              <!--<Radio v-for="item in planeUsage" :label="item.label" :key="item.id"></Radio>-->
              <!--</RadioGroup>-->
              <!--</i-col>-->
              <!--</Row>-->
              <!--</div>-->
            </TabPane>
            <TabPane label="浮标" tab="1-1" name="Buoy">
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">区域：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.region">
                      <Radio v-for="item in regionOptions" :label="item.cname" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">国家/地区：</i-col>
                  <i-col span="21" style="max-height: 100px;overflow: auto">
                    <RadioGroup type="button" size="small" v-model="conditions.country">
                      <Radio v-for="item in countryTags" :label="item.id" :key="item.id" style="margin: 0 10px 10px 0;">
                        {{ item.cname }}
                      </Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="机场" tab="1-1" name="Airport">
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">区域：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.region">
                      <Radio v-for="item in regionOptions" :label="item.cname" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">国家/地区：</i-col>
                  <i-col span="21" style="max-height: 100px;overflow: auto">
                    <RadioGroup type="button" size="small" v-model="conditions.country">
                      <Radio v-for="item in countryTags" :label="item.id" :key="item.id" style="margin: 0 10px 10px 0;">
                        {{ item.cname }}
                      </Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="港口" tab="1-1" name="Port">
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">区域：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.region">
                      <Radio v-for="item in regionOptions" :label="item.cname" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">国家/地区：</i-col>
                  <i-col span="21" style="max-height: 100px;overflow: auto">
                    <RadioGroup type="button" size="small" v-model="conditions.country">
                      <Radio v-for="item in countryTags" :label="item.id" :key="item.id" style="margin: 0 10px 10px 0;">
                        {{ item.cname }}
                      </Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="发射场" tab="1-1" name="LaunchSite">
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">区域：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" v-model="conditions.region">
                      <Radio v-for="item in regionOptions" :label="item.cname" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">国家/地区：</i-col>
                  <i-col span="21" style="max-height: 100px;overflow: auto">
                    <RadioGroup type="button" size="small" v-model="conditions.country">
                      <Radio v-for="item in countryTags" :label="item.id" :key="item.id" style="margin: 0 10px 10px 0;">
                        {{ item.cname }}
                      </Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane label="主题检索" name="name2">
          <div>
            <RadioGroup type="button" size="small">
              <Radio v-for="item in theme" :label="item.name" :key="item.id" style="margin: 0 10px 10px 0;"></Radio>
            </RadioGroup>
            <Row>
              <i-col span="4">
                <Button type="primary" size="small" style="width: 100%;" @click="themeSelect()">搜索</Button>
              </i-col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="区域绘制" name="name3">
          <Tabs tab="name3">
            <TabPane label="航空管制区" tab="name3">
              <RadioGroup type="button" size="small">
                <Radio v-for="item in area_air" :label="item.properties.name" :key="item.id"
                       style="margin: 0 10px 10px 0;"></Radio>
              </RadioGroup>
            </TabPane>
            <TabPane label="航海管制区" tab="name3">
              <RadioGroup type="button" size="small">
                <Radio v-for="item in area_sea" :label="item.properties.name" :key="item.id"
                       style="margin: 0 10px 10px 0;"></Radio>
              </RadioGroup>
            </TabPane>
            <TabPane label="自定义管制区" tab="name3" name="user_defined">
              <Tabs type="card" tab="user_defined" name="add_tab">
                <TabPane v-for="tab in point_list" :key="tab.id" :label=" tab.properties.name" tab="add_tab">
                  <div class="area_title">
                    <RadioGroup type="button" size="small" style="margin:6px 0 0 10px;">
                      <Radio v-for="item in point_list" :label="item.properties.name" :key="item.id"
                             style="margin: 0 10px 10px 0;"></Radio>
                    </RadioGroup>
                    <Row class="longitude" v-for="item in pointSum" :key="item.id">
                      <div class="point_wrap">
                        <i-col :span="12">
                          <i-col :span="6">
                            <i-switch size="large" @on-change="change_warning">
                              <span slot="open">E</span>
                              <span slot="close">W</span>
                            </i-switch>
                          </i-col>
                          <i-col :span="3" style="margin: 0 10px 0 10px;"><Input size="small"/></i-col>
                          <i-col style="font-size: 30px;" :span="1"><span>°</span></i-col>
                          <i-col :span="3" style="margin: 0 10px 0 5px;"><Input size="small"/></i-col>
                          <i-col style="font-size: 30px;" :span="1"><span>′</span></i-col>
                          <i-col :span="3" style="margin: 0 10px 0 5px;"><Input size="small"/></i-col>
                          <i-col style="font-size: 30px;" :span="1"><span>″</span></i-col>
                        </i-col>
                        <i-col :span="12">
                          <i-col :span="6">
                            <i-switch size="large" @on-change="change_warning">
                              <span slot="open">N</span>
                              <span slot="close">S</span>
                            </i-switch>
                          </i-col>
                          <i-col :span="3" style="margin: 0 10px 0 10px;"><Input size="small"/></i-col>
                          <i-col style="font-size: 30px;" :span="1"><span>°</span></i-col>
                          <i-col :span="3" style="margin: 0 10px 0 5px;"><Input size="small"/></i-col>
                          <i-col style="font-size: 30px;" :span="1"><span>′</span></i-col>
                          <i-col :span="3" style="margin: 0 10px 0 5px;"><Input size="small"/></i-col>
                          <i-col style="font-size: 30px;" :span="1"><span>″</span></i-col>
                        </i-col>
                      </div>
                    </Row>
                  </div>
                  <Row>
                    <i-col :span="3">
                      <Button size="small" type="primary" icon="md-add" @click="addNewPoint()">添加</Button>
                    </i-col>
                    <i-col :span="4">
                      <Button type="primary" size="small" style="width: 100%;" @click="areaSelect()">绘制</Button>
                    </i-col>
                  </Row>
                </TabPane>
                <Button @click="handleTabsAdd" size="small" slot="extra" type="primary">增加</Button>
              </Tabs>
            </TabPane>
          </Tabs>
          <div>
          </div>
        </TabPane>
      </Tabs>
    </div>
    <div class="open_wrap" @click="changeFilter" :class="show === true  ? 'open_wrap':'close_wrap'">
      <!--<img src="../assets/images/button1.png" alt="" style="width: 40px;">-->
      <Icon type="ios-arrow-down" class="icon_n"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { executeGQL, gql } from '../commons'
  import { find } from 'lodash'

  const GQL = {
    getConditions: {
      query: gql`
    {
      regionList {
        id, cname,
        countryList{ cname, ename, id }
      }
      dictTydefList: dictTypeDefs {
        id value
      }
      planeUsage: dictItem(tid:"t001") {
        id value label
      }
      planeKind: dictItem(tid:"t011"){
        id value label
      }
      planeHeight: dictItem(tid:"t021"){
        id value label
      }
      planeSpeed: dictItem(tid:"t022"){
        id value label
      }
    }`
    },
    filterTargets: {
      query: gql`
    query($type:String!, $country:String, $model: String, $height: String, $speed: String){
      targetList: filterTargets(targetType:$type, country:$country, model:$model, height:$height, speed:$speed) {
        ...on Plane{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
        ...on Ship{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
        ...on Buoy{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
        ...on Airport{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
        ...on Port{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
        ...on Satellite{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
      }
    }`
  },
  boundaryList: { query: gql`{
    boundaryList{
      id
      type
      properties
      geometry{
        coordinates
        type
      }
    }
  }`
  }
}
export default {
  name: 'filterwrap',
  data() {
    return {
      pointSum:[0],
      ele: '',
      searchString: '',
      show: true,
      targetType: 'Plane',
      searchData: {
        airCountry: [],
        airArea: [],
        property: [],
        type: [],
        height: [],
        speed: []
      },
      checked: false,
      dictTydefList: [],
      // 选中的搜索条件组合
      conditions: { region: '亚洲', country: '', model: '', height: '', speed: '' },
      regionOptions: [],  // 大洲/国家 选项集合
      planeUsage: [],     // 飞机用途
      planeKind: [],     // 飞机型号
      planeHeight: [],    // 飞行高度
      planeSpeed: [],      // 飞行速度
      theme: [
        {
          name: '南海联合军演',
          id: '1'
        },
        {
          name: '台湾局势 ',
          id: '1'
        },
        {
          name: '南海动态',
          id: '1'
        }
      ],
      area_air:[
        // {
        //   name:'东北空管区域',
        //   id:'1'
        // },
        // {
        //   name:'华北空管区域',
        //   id:'1'
        // },
        // {
        //   name:'华南空管区域',
        //   id:'1'
        // },
      ],
      area_sea:[
        // {
        //   name:'南海管制区域',
        //   id:'1'
        // },
        // {
        //   name:'黄海管制区域',
        //   id:'1'
        // },
        // {
        //   name:'东海管制区域',
        //   id:'1'
        // },
      ],
      point_list:[
        // {
        //   longitude_latitude:'东经:136°21′14″ 北纬:136°21′14″',
        //   id:'1'
        // },
        // {
        //   longitude_latitude:'西经:136°21′14″ 南纬:136°21′14″',
        //   id:'1'
        // }
      ],
      tabs: 0
    }
  },
  computed: {
    countryList() {
      let region = find(this.regionOptions, { cname: this.conditions.region })
      return region && region.countryList
    },
    countryTags() {
      return this.countryList
    }
  },

    methods: {
      addNewPoint() {
        this.ele++
        this.pointSum.push(this.ele)
      },
      fadeChange() {
        // executeGQL(GQL.filterTargets, { type: this.targetType, country: this.conditions.country, model: this.conditions.model, height: this.conditions.height, speed: this.conditions.speed }).then(r => {
        executeGQL(GQL.filterTargets, {
          type: this.targetType,
          country: this.conditions.country,
          model: '',
          height: this.conditions.height,
          speed: this.conditions.speed
        }).then(r => {
          this.$store.commit('targetList', r.targetList)
          this.$store.commit('selectedTarget', null)
        })
        this.show = !this.show
        this.$emit('change_filter_show', this.show)
      },
      themeSelect() {
        //  alert('主题检索')
        executeGQL(GQL.filterTargets, { type: this.targetType }).then(r => {
          this.$store.commit('targetList', r.targetList)
        })
      },
      areaSelect() {

      },
      // 国家选择
      countrySelect(index) {
        // if (checked === true) {
        //   alert(this.searchData.airCountry)
        //   this.checked = !checked
        //   this.searchData.airCountry.push(id)
        // } else {
        //   this.checked = checked
        // }
        index.checked = !index.checked
        console.log(checked, name)
      },
      changeFilter() {
        this.show = !this.show
        this.$emit('change_filter_show', this.show)
      },
      //自定义区域tab增加
      handleTabsAdd() {
        this.tabs++
      },

    },
    mounted() {
      // 获取搜索区域列表
      executeGQL(GQL.getConditions).then(r => {
        this.regionOptions = r.regionList
        this.planeUsage = r.planeUsage
        this.dictTydefList = r.dictTydefList
        this.planeKind = r.planeKind
        this.planeHeight = r.planeHeight
        this.planeSpeed = r.planeSpeed
      })
      // 获取自定义边界列表
      executeGQL(GQL.boundaryList).then(r => {
        console.log(r)
        this.$store.commit("boundaryList",r.boundaryList)
        r.boundaryList.forEach(res => {
          if(res.properties.type == 'waterspace'){
            this.area_sea.push(res)
          }else if(res.properties.type == 'airspace'){
            this.area_air.push(res)
          }else{
            this.point_list.push(res)
          }
        })
      })
    }
  }
</script>
<style scoped lang="scss">
  .ivu-tag:not(.ivu-tag-border):not(.ivu-tag-dot):not(.ivu-tag-checked) {
    background: #ccc;
  }

  .filter {
    .filter_wrap {
      width: 600px;
      padding: 10px;
      min-height: 440px;
      overflow: auto;
      background: #0000006b;
      border: 1px solid #009bef;
      box-shadow: 0 0 20px 2px #009bef;
      color: #fff;
      margin-top: -460px;
      transition: all 1s linear;

      .title {
        text-align: center;
        font-size: 12px;
      }

      .row_margin {
        margin-bottom: 10px;
      }

      .label {
        line-height: 22px;
        color: #fff;
      }

      input {
        border: 1px solid #fff;
        outline: none;
        box-shadow: 0 0 6px 1px #fff;
        padding: 4px 6px;
        font-size: 14px;
      }

      input:focus {
        border: 1px solid #000;
        box-shadow: 0 0 1px 1px #084dff;
      }
    }

    .filter_wrap_open {
      margin-top: 0;
      transition: all 1s linear;
    }

    .open_wrap {
      width: 100%;
      text-align: center;
      transition: all 1s linear;
    }

    .icon_n {
      font-size: 50px;
      color: #009bef;
      text-shadow: 0 1px 20px #000;
    }

    .close_wrap {
      transform: rotate(180deg);
      transition: all 1s linear;
    }

    .submit {
      text-align: center;
      padding: 5px 10px;
      background: #019aee;
      color: #fff;
      margin: 20px 0;
      box-shadow: 0 0 10px 1px #253280;
      border-radius: 4px;
    }
  }

  .longitude {
    color: #fff;
    margin-bottom: 10px;
    /*text-align: right;*/
    line-height: 24px;
  }

  .area_title {
    color: #fff;
    font-size: 14px;
    margin-bottom: 10px;
  }

</style>

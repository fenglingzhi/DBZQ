<template>
  <div class="filter">
    <div class="filter_wrap_warning" :class = "show === true  ? 'filter_wrap_warning':'filter_wrap_open'">
      <!--<div class="title">飞机</div>-->
      <!--<Divider size="small" />-->
      <!--<input type="text" placeholder="请输入筛选项">-->
      <Tabs name="name1">
        <TabPane label="异特情检索" tab="name1">
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
                  <i-col span="21" style="max-height: 300px;overflow: auto">
                    <RadioGroup type="button" size="small" v-model="conditions.country">
                      <Radio v-for="item in countryTags" :label="item.id" :key="item.id" style="margin: 0 10px 10px 0;">
                        {{ item.cname }}
                      </Radio>
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
                  <i-col span="21" style="max-height: 300px;overflow: auto">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in countryTags" :label="item.cname" :key="item.id" style="margin: 0 10px 10px 0;"></Radio>
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
                  <i-col span="21" style="max-height: 300px;overflow: auto">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in countryTags" :label="item.cname" :key="item.id" style="margin: 0 10px 10px 0;"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
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
                  <i-col span="21" style="max-height: 300px;overflow: auto">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in countryTags" :label="item.cname" :key="item.id" style="margin: 0 10px 10px 0;"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
          </Tabs>
        </TabPane>
        <!--<TabPane label="主题检索" name="name2">-->
          <!--<div>-->
            <!--<RadioGroup type="button" size="small" >-->
              <!--<Radio v-for="item in theme" :label="item.name" :key="item.id" style="margin: 0 10px 10px 0;"></Radio>-->
            <!--</RadioGroup>-->
            <!--<Row>-->
              <!--<i-col span="4">-->
                <!--<Button type="primary" size="small" style="width: 100%;" @click="themeSelect()">搜索</Button>-->
              <!--</i-col>-->
            <!--</Row>-->
          <!--</div>-->
        <!--</TabPane>-->
      </Tabs>
      <Row style="margin-bottom: 10px;">
        <!--<i-col span="20">-->
        <!--<Input v-model="searchString" size="small" placeholder="请输入要搜索的目标" />-->
        <!--</i-col>-->
        <i-col span="3" offset="20">
          <Button type="error" size="small" style="width: 100%;background: red" @click="fadeChange()">搜索</Button>
          <!--<div class="submit"></div>-->
        </i-col>
      </Row>
    </div>
    <div class="open_wrap" @click="changeFilter" :class = "show === true  ? 'open_wrap':'close_wrap'">
      <!--<img src="../assets/images/button1.png" alt="" style="width: 40px;">-->
      <Icon type="ios-arrow-down" class="icon_w"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { executeGQL, gql } from '../commons'
import { find } from 'lodash'
const GQL = {
  getConditions: { query: gql`
    {
      regionList {
        id, cname,
        countryList{ cname, id }
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
  filterTargets: { query: gql`
    query($type:String!, $country:String){
      targetList: filterWarning(targetType:$type, country:$country) {
        ...on Plane{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol,
          action {track { lon, lat, alt, timestamp, horSpeed, vetSpeed, azimuth }},
          options
          }
        ...on Ship{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol,
          action {track { lon, lat, alt, timestamp, horSpeed, vetSpeed, azimuth }},
          options
          }
        ...on Buoy{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          options,
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
          options,
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
          options,
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
          options,
          symbol}
      }
    }`
  }
}
export default {
  name: 'filterWarning',
  data() {
    return {
      /* searchString: '',
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
      conditions: { region: '亚洲', country: null },
      regionOptions: [],  // 大洲/国家 选项集合
      planeUsage: [],     // 飞机用途
      planeKind: [],     // 飞机型号
      planeHeight: [],    // 飞行高度
      planeSpeed: [],      // 飞行速度 */
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
      conditions: { region: '亚洲', country: '' },
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
          name: '台湾局势',
          id: '1'
        },
        {
          name: '南海动态',
          id: '1'
        }
      ]
    }
  },
  computed: {
    countryList() {
      let region = find(this.regionOptions, { cname: this.conditions.region })
      return region && region.countryList
    },
    countryTags() {
      //  return sampleSize(this.countryList, 100)
      return this.countryList
    }
  },
  methods: {
    fadeChange() {
      /* executeGQL(GQL.filterTargets, { type: this.targetType }).then(r => {
        this.$store.commit('targetList', r.targetList)
      })
      this.show = !this.show */
      executeGQL(GQL.filterTargets, { type: this.targetType,country:this.conditions.country }).then(r => {
        // debugger
        this.$store.commit('warningList', r.targetList)
      })
      this.show = !this.show
      this.$emit('change_filter_show', this.show)
    },
    themeSelect() {
    //  alert('主题检索')
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
    }
  },
  mounted() {
    // 获取搜索区域列表
    executeGQL(GQL.getConditions).then(r => {
    /* this.regionOptions = r.regionList
      this.planeUsage = r.planeUsage
      this.dictTydefList = r.dictTydefList
      this.planeKind = r.planeKind
      this.planeHeight = r.planeHeight
      this.planeSpeed = r.planeSpeed */
      this.regionOptions = r.regionList
      this.planeUsage = r.planeUsage
      this.dictTydefList = r.dictTydefList
      this.planeKind = r.planeKind
      this.planeHeight = r.planeHeight
      this.planeSpeed = r.planeSpeed
    })

    this.intv = setInterval(async () => {
      let ret = await executeGQL(GQL.filterTargets, { type: this.targetType,country:this.conditions.country  })
      this.$store.commit('warningList', ret.targetList)
    }, 5000)
  }
}
</script>
<style scoped lang="scss">
  .ivu-tag:not(.ivu-tag-border):not(.ivu-tag-dot):not(.ivu-tag-checked){
    background: #ccc;
  }
  .filter{
    .filter_wrap_warning{
      width: 600px;
      padding: 10px;
      min-height: 440px;
      overflow: auto;
      background: #0000006b;
      border: 1px solid red;
      box-shadow: 0 0 20px 2px red;
      color:#fff;
      margin-top: -510px;
      transition: all 1s linear;
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
        box-shadow: 0 0 1px 1px red;
      }
    }
    .filter_wrap_open{
      margin-top: 0;
      transition: all 1s linear;
    }
    .open_wrap{
      width: 100%;
      text-align: center;
      transition: all 1s linear;
    }
    .icon_w{
      font-size: 50px;
      color: red;
      text-shadow: 0 1px 20px #000;
    }
    .close_wrap{
      transform: rotate(180deg);
      transition: all 1s linear;
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

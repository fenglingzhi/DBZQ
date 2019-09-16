<template>
  <div class="filter">
    <div class="filter_wrap animated" :class = "show === true  ? 'fadeInLeft':'fadeOutLeft'">
      <!--<div class="title">飞机</div>-->
      <!--<Divider size="small" />-->
      <!--<input type="text" placeholder="请输入筛选项">-->
      <Tabs name="name1">
        <TabPane label="标签检索" tab="name1">
          <Row style="margin-bottom: 20px;">
            <i-col span="20">
              <Input v-model="value" size="small" placeholder="请输入要搜索的目标" />
              <!--<div style="color: #fff;">-->
                <!--船舶 ：<i style="font-size: 22px;" class="iconfont iconchuanbo"></i><br>-->
                <!--飞机 ：<i style="font-size: 22px;" class="iconfont iconfeiji"></i><br>-->
                <!--卫星 ：<i style="font-size: 22px;" class="iconfont iconweixing"></i><br>-->
                <!--浮标 ：<i style="font-size: 22px;" class="iconfont iconfubiaobuoy"></i><br>-->
              <!--</div>-->
            </i-col>
            <i-col span="3" offset="1">
              <Button type="primary" size="small" style="width: 100%;" @click="fadeChange()">搜索</Button>
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
                  <i-col span="21" style="max-height: 100px;overflow: auto">
                    <span v-for="(item,index) in countryTags" :key="item.id" @click="countrySelect(index)">
                    <!--<span v-for="(item,index) in fruit" :key="item.id" @click="countrySelect(index)">-->
                      <!--<Checkbox v-model="checked" label=""></Checkbox>-->
                      <Button v-if="checked" type="primary" size="small" style="margin:0 10px 10px 0;">{{item.cname}}</Button>
                      <Button v-else size="small" style="margin:0 10px 10px 0;" >{{item.cname}}</Button>

                    </span>
                    <!--<Tag checkable @on-change="countrySelect(checked,item.id,index)" v-for="item in countryTags" :key="item.id">{{item.cname}}</Tag>-->

                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">军民属性：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in planeUsage" :label="item.label" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">类型：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in planeKind" :label="item.label" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">高度：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in planeHeight" :label="item.label" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">速度：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in planeSpeed" :label="item.label" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="船舶" tab="1-1">
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
                    <Tag checkable @on-change="countrySelect(checked,item.id)" v-for="item in countryTags" :key="item.id">{{item.cname}}</Tag>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">军民属性：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in planeUsage" :label="item.label" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">类型：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in planeKind" :label="item.label" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="卫星" tab="1-1">
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
                    <Tag checkable @on-change="countrySelect(checked,item.id)" v-for="item in countryTags" :key="item.id">{{item.cname}}</Tag>
                  </i-col>
                </Row>
              </div>
              <div>
                <Row slot="content" class="row_margin">
                  <i-col span="3" class="label">军民属性：</i-col>
                  <i-col span="21">
                    <RadioGroup type="button" size="small" >
                      <Radio v-for="item in planeUsage" :label="item.label" :key="item.id"></Radio>
                    </RadioGroup>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="浮标" tab="1-1">
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
                    <Tag checkable @on-change="countrySelect(checked,item.id)" v-for="item in countryTags" :key="item.id">{{item.cname}}</Tag>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="机场" tab="1-1">
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
                    <Tag checkable @on-change="countrySelect(checked,item.id)" v-for="item in countryTags" :key="item.id">{{item.cname}}</Tag>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="港口" tab="1-1">
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
                    <Tag checkable @on-change="countrySelect(checked,item.id)" v-for="item in countryTags" :key="item.id">{{item.cname}}</Tag>
                  </i-col>
                </Row>
              </div>
            </TabPane>
            <TabPane label="发射场" tab="1-1">
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
                    <Tag checkable @on-change="countrySelect(checked,item.id)" v-for="item in countryTags" :key="item.id">{{item.cname}}</Tag>
                  </i-col>
                </Row>
              </div>
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
import { executeGQL } from '../commons'
import { find, sampleSize } from 'lodash'
const GQL = {
  getConditions: { query: `
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
  copyConditions: {
    // dictTydefList: getDictTypeDef {
    //   id value
    // }
    // planeUsage: getDict(tid:"t001") {
    //   id value label
    // }
    // planeModel: getDict(tid:"t011"){
    //   id value label
    // }
    // planeHeight: getDict(tid:"t021"){
    //   id value label
    // }
    // planeSpeed: getDict(tid:"t022"){
    //   id value label
    // }
  },
  searchPlane: { query: `
    {
      planeList: filterPlanes {
        id
        feature {
          type,
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
      fruit: [
        'a', 'b', 'c', 'd'
      ],
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
      conditions: { region: null, country: null },
      regionOptions: [],  // 大洲/国家 选项集合
      planeUsage: [],     // 飞机用途
      planeKind: [],     // 飞机型号
      planeHeight: [],    // 飞行高度
      planeSpeed: []      // 飞行速度
    }
  },
  computed: {
    countryList() {
      let region = find(this.regionOptions, { cname: this.conditions.region })
      console.log(this.conditions.country)
      return region && region.countryList
    },
    countryTags() {
      console.log(sampleSize(this.countryList))
      return sampleSize(this.countryList, 100)
    }
  },
  methods: {
    fadeChange() {
      executeGQL(GQL.searchPlane).then(r => {
        this.$store.commit('planeList', r.planeList)
      })
      // this.show = !this.show
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
    }
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
  }
}
</script>
<style scoped lang="scss">
  .ivu-tag:not(.ivu-tag-border):not(.ivu-tag-dot):not(.ivu-tag-checked){
    background: #ccc;
  }
  .filter{
    .filter_wrap{
      width: 600px;
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

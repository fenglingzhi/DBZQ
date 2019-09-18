<template>
    <!-- 航班设施信息 -->
    <div class="organization">
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'机构名称'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="organization.cname"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'外文名称'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="organization.ename"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'机构简称'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="organization.abbr"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'机构代码'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="organization.code"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'机构类型'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="organization.type"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'所在国家/地区'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="organization.base.country.cname"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'业务方向'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="organization.business"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'上级机构'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="organization.superior.base.country.cname"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'主管领导'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="organization.leader.name"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'机构网站'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="organization.homepage"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'organization',
  components: { },
  data() {
    return { }
  },
  props: ['organization'],
  methods: { },
  mounted () { }
}
</script>

<style>
.organization{ }
.row-info-data-item{
    width:100%;
    margin-bottom: 10px;
    display: flex;
}
.row-info-title{
    width: 150px;
    color: #aaa;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.row-info-value{
    width: 200px;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>

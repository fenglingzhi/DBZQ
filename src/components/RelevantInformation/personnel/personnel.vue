<template>
    <!-- 航班设施信息 -->
    <div class="personnel">
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'姓名'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="usr.ORG.leader.name"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'民族'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="usr.ORG.leader.nation"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'性别'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="usr.ORG.leader.gender"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'出生日期'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="usr.ORG.leader.birthday"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'别名'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="usr.ORG.leader.nickname"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'国籍'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="usr.ORG.leader.country"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'宗教信仰'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="usr.ORG.leader.faith"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'工作方向'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="usr.ORG.leader.job"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'学历'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="usr.ORG.leader.EDU"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'常在城市'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="usr.ORG.leader.city"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'personnel',
  components: { },
  data() {
    return { }
  },
  props: ['usr'],
  methods: { },
  mounted () { }
}
</script>

<style>
.personnel{ }
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

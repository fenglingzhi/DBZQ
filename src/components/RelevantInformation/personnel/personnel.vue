<template>
    <!-- 航班设施信息 -->
    <div class="personnel">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'姓名'"></span>
            </div>
            <div class="info-value">
                <span v-text="usr.name"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'民族'"></span>
            </div>
            <div class="info-value">
                <span v-text="usr.nation"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'性别'"></span>
            </div>
            <div class="info-value">
                <span v-text="usr.gender"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'出生日期'"></span>
            </div>
            <div class="info-value">
                <span v-text="usr.birthday"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'别名'"></span>
            </div>
            <div class="info-value">
                <span v-text="usr.o_name"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'国籍'"></span>
            </div>
            <div class="info-value">
                <span v-text="usr.country"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'宗教信仰'"></span>
            </div>
            <div class="info-value">
                <span v-text="usr.faith"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'工作方向'"></span>
            </div>
            <div class="info-value">
                <span v-text="usr.job"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'学历'"></span>
            </div>
            <div class="info-value">
                <span v-text="usr.edu"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'常在城市'"></span>
            </div>
            <div class="info-value">
                <span v-text="usr.city"></span>
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
.info-data-item{
    width:100%;
    margin-bottom: 10px;
    display: flex;
}
.info-title{
    width: 150px;
    color: #aaa;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.info-value{
    width: 200px;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>

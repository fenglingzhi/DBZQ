<template>
    <!-- 航班设施信息 -->
    <div class="information">
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'标题'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="information.title"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'内容'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="information.content"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'来源'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="information.source"></span>
            </div>
        </div>
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'发布时间'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="information.release_time"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'information',
  components: { },
  data() {
    return { }
  },
  props: ['information'],
  methods: { },
  mounted () { }
}
</script>

<style>
.information{ }
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

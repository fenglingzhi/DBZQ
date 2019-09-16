<template>
    <!-- 航班设施信息 -->
    <div class="information">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'标题'"></span>
            </div>
            <div class="info-value">
                <span v-text="information.title"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'内容'"></span>
            </div>
            <div class="info-value">
                <span v-text="information.content"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'来源'"></span>
            </div>
            <div class="info-value">
                <span v-text="information.source"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'发布时间'"></span>
            </div>
            <div class="info-value">
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

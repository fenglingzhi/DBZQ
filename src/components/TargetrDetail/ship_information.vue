<template>
    <!-- 船舶的目标信息 -->
    <div class="ship_information">
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'船舶名称'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.name"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'船舶类型'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.usage.label"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'MMSI编号'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.MMSI"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'隶属单位'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.ORG && base_info.ORG.cname"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'注册国家'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.country && base_info.country.cname"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'船舶状态'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.status"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'吨位'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.tonnage"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'船宽度'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.width"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'船长度'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.length"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'船高度'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.height"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'最大航速'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.maxSpeed"></span>
            </div>
        </div>
        <div class="info-data-item">
            <div class="info-title">
                <span v-text="'电话等通联'"></span>
            </div>
            <div class="info-value">
                <span v-text="base_info.phone"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ship_information',
  components: { },
  data() {
    return { }
  },
  props: ['base_info'],
  methods: { },
  mounted () { }
}
</script>

<style>
.ship_information{
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
}
.info-data-item{
    width:186px;
    margin-bottom: 10px;
}
.info-title{
    color: #aaa;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.info-value{
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>

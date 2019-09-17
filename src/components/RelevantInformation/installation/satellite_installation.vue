<template>
    <!-- 航班设施信息 -->
    <div class="satellite_installation">
        <div class="row-info-data-item">
            <div class="row-info-title">
                <span v-text="'发射地点'"></span>
            </div>
            <div class="row-info-value">
                <span v-text="facility.launch_site"></span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'satellite_installation',
  components: { },
  data() {
    return { }
  },
  props: ['facility'],
  methods: { },
  mounted () { }
}
</script>

<style>
.satellite_installation{ }
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

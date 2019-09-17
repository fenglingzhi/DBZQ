<template>
    <!-- 航班设施信息 -->
    <div class="buoy_dynamic">
    </div>
</template>

<script>
export default {
  name: 'buoy_dynamic',
  components: { },
  data() {
    return { }
  },
  props: ['dynamic'],
  methods: { },
  mounted () { }
}
</script>

<style>
.buoy_dynamic{ }
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

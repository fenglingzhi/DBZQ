<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <i-col span="8">
        <span class="expand-key">机构名称:</span>
        <span class="expand-value" v-text="row && row.cname"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">外文名称:</span>
        <span class="expand-value" v-text="row && row.ename"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">机构代码:</span>
        <span class="expand-value" v-text="row && row.code"></span>
      </i-col>
    </Row>
    <Row class="expand-row">
      <i-col span="8">
        <span class="expand-key">机构类型:</span>
        <span class="expand-value" v-text="row && row.type"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">国家/地区:</span>
        <span class="expand-value" v-text="row && row.base && row.base.country && row.base.country.cname"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">业务方向:</span>
        <span class="expand-value" v-text="row && row.business"></span>
      </i-col>
    </Row>
    <Row class="expand-row">
      <i-col span="8">
        <span class="expand-key">上级机构:</span>
        <span class="expand-value" v-text="row && row.superior && row.superior.cname"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">主管领导:</span>
        <span class="expand-value" v-text="row && row.leader"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">机构网站:</span>
        <span class="expand-value" v-text="row && row.homepage"></span>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  props: {
    row: Object
  }
}
</script>

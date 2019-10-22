<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <i-col span="8">
        <span class="expand-key">姓名:</span>
        <span class="expand-value" v-text="row.name"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">民族:</span>
        <span class="expand-value" v-text="row.nation"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">性别:</span>
        <span class="expand-value" v-text="row.gender"></span>
      </i-col>
    </Row>
    <Row class="expand-row">
      <i-col span="8">
        <span class="expand-key">出生日期:</span>
        <span class="expand-value" v-text="row.birthday"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">别名:</span>
        <span class="expand-value" v-text="row.nickname"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">国籍:</span>
        <span class="expand-value" v-text="row.country"></span>
      </i-col>
    </Row>
    <Row class="expand-row">
      <i-col span="8">
        <span class="expand-key">宗教信仰:</span>
        <span class="expand-value" v-text="row.faith"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">工作方向:</span>
        <span class="expand-value" v-text="row.job"></span>
      </i-col>
      <i-col span="8">
        <span class="expand-key">学历:</span>
        <span class="expand-value" v-text="row.edu"></span>
      </i-col>
    </Row>
    <Row>
      <i-col span="8">
        <span class="expand-key">常在城市:</span>
        <span class="expand-value" v-text="row.city"></span>
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

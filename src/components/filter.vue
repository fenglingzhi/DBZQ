<template>
  <div class="filter">
    <div class="filter_wrap animated" :class = " {'fadeInLeftBig' : show ? 'fadeInLeftBig':'fadeOutLeftBig'}">
      <input type="text" placeholder="请输入筛选项">
    </div>
    <div class="submit" @click="fadeChange()">提交</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'filterwrap',
  data() {
    return {
      show: false
    }
  },
  methods: {
    fadeChange() {
      this.show = !this.show
      alert(this.show)
    }
  }
}
</script>
<style scoped lang="scss">
  .filter{
    .filter_wrap{
      padding: 10px;
      /*margin-left: 260px;*/
      background: #0000006b;
      border: 1px solid #009bef;
      box-shadow: 0 0 20px 2px #009bef;
      input{
        border: 1px solid #fff;
        outline: none;
        box-shadow: 0 0 6px 1px #fff;
        padding: 4px 6px;
        font-size: 14px;
      }
      input:focus{
        border: 1px solid #000;
        box-shadow: 0 0 1px 1px #084dff;
      }
    }
    .submit{
      text-align: center;
      padding: 5px 10px;
      background: #019aee;
      color: #fff;
      margin: 20px 0;
      box-shadow: 0 0 10px 1px #253280;
    }
  }

</style>

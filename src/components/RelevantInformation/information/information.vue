<style>
  .information{
    height: 100%;
    width: 100%;
  }
  .ivu-table-wrapper{
    border: none !important;
  }
  .ivu-table th{
    background-color:rgba(170, 170, 170, .5) !important;
    color: #aaa;
    padding:0 5px;
  }
  .ivu-table-cell{
    padding:0 5px !important;
  }
  .ivu-table, .ivu-table td{
    background-color:transparent !important;
    color: #fff;
  }
  .ivu-table-overflowY::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .ivu-table-overflowY::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .ivu-table-overflowY::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  .ivu-tooltip-inner-with-width::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .ivu-tooltip-inner-with-width::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .ivu-tooltip-inner-with-width::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  .ivu-tooltip-inner-with-width {
    max-width: 300px !important;
    max-height: 500px;
    overflow: auto
  }
  .ivu-tooltip-rel{
    text-overflow:ellipsis;
    white-space: nowrap;
    max-width: 240px;
    overflow: hidden;
  }
</style>
<template>
    <!-- 航班设施信息 -->
    <div class="information">
      <Table height="400" :columns="columns1" :data="data" size="small"></Table>
    </div>
</template>

<script>
export default {
  name: 'information',
  components: { },
  data() {
    return {
      columns1: [
        {
          title: '标题',
          key: 'title'
        },
        {
          title: '内容',
          width: 250,
          key: 'content',
          ellipsis: true,
          tooltip: true,
          render: (h, params) => {
            return h('Tooltip', {
                props: { placement: 'top', 'max-width': '250px', transfer: true },
            }, [
                params.row.content,
                h('span', { class:'tooltipTable', slot: 'content', style: { whiteSpace: 'normal', wordBreak: 'break-all',width: '300px'} },params.row.content)
            ])
          }
        },
        {
          title: '来源',
          maxWidth: 100,
          key: 'source'
        },
        {
          title: '发布时间',
          maxWidth: 100,
          key: 'timestamp'
        }
      ]
      // data: []
    }
  },
  props: ['information'],
  computed: {
    data() {
      return this.information.map(({ title, content, source, timestamp }) => {
        return { title, content, source, 'timestamp': new Date(timestamp).toLocaleString() }
      })
    }
  },
  methods: { },
  mounted () {}
}
</script>

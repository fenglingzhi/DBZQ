<script>
export default {
  name: 'MapTip',
  props: {
    title: String,
    hide: {
      type: Boolean,
      default: true
    }
  },
  inject: ['container'],
  data() {
    return {
      tip: null
    }
  },
  mounted() {
    // debugger
    let that = this
    this.tip = new mapcan.ui.InfoWindow({
      title: this.title,
      width: 200,
      autoOpenOn: false,
      autoCloseOn: 'mapclick',
      content: this.$refs.content
    })
    let shouldHide = false
    function onMapClick(e) {
      console.log('click map')
      shouldHide = true
      setTimeout(() => {
        console.log('click and should hide', shouldHide)
        shouldHide && that.tip.hide()
      }, 500)
    }
    that.tip.on('showstart', () => {
      console.log('showstart', that.$slots)
      shouldHide = false
      that.tip.getMap().off('click', onMapClick)
    })
    that.tip.on('showend', () => {
      console.log('showend')
      that.$emit('update:hide', false)
      that.tip.getMap().on('mouseup', onMapClick)
    })
    that.tip.on('hide', () => {
      that.$emit('update:hide', true)
    })
    // this.container && (this.container.mapTip = this.tip)
    // this.tip.addTo(this.container.map)
  },
  watch: {
    hide(n, o) {
      if (n) this.tip.hide()
    }
  }
}
</script>
<template>
  <div ref="content">
    <!-- <Card> -->
      <!-- <template slot="title"> -->
        <slot name="header" />
      <!-- </template> -->
      <slot />
    <!-- </Card> -->
  </div>
</template>

<style>
.maptalks-close {
  z-index: 999;
}
.maptalks-msgContent {
  padding: 0 !important;
}
</style>

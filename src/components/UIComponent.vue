<script>
import * as mapcan from 'maptalks'
export default {
  name: 'UIComponent',
  props: {
    height: {
      type: Number,
      default: 30
    },
    position: {
      type: Object,
      default: () => ({ top: 10, left: 30 })
    }
  },
  destroyed() {
    this.mapItem && this.mapItem.remove()
  },
  data() {
    return {
      mapItem: null
    }
  },
  inject: ['container'],
  mounted() {
    // debugger
    this.mapItem = new mapcan.control.Panel({
      'position': this.position,
      'custom': true,
      'content': this.$refs.ui
    })
  }
}
</script>
<template>
  <div ref="ui">
    <slot/>
  </div>
</template>

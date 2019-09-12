<script>
import { VectorLayer } from 'maptalks'
export default {
  name: 'Vectorlayer',
  props: {
    id: String,
    hide: Boolean,
    zIndex: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      mapItem: null
    }
  },
  inject: ['container'],
  provide: function () {
    return {
      layer: this
    }
  },
  destroyed() {
    this.mapItem.remove()
  },
  watch: {
    hide(n, o) {
      n ? this.mapItem.hide() : this.mapItem.show()
    }
  },
  mounted() {
    // debugger
    this.mapItem = new VectorLayer(this.id, {
      visible: !this.hide,
      enableSimplify: false,
      zIndex: this.zIndex
    })
    this.$slots.default && this.$slots.default.forEach(g => {
      this.mapItem.addGeometry(g.componentInstance.geometry)
    })
  }
}
</script>
<template>
  <div>
    <slot></slot>
  </div>
</template>

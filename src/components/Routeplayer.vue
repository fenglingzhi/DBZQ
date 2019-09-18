<script>
export default {
  name: 'Routeplayer',
  inject: ['container'],
  props: {
    path: Array,
    lineSymbol: Object,
    markerSymbol: Object,
    status: String
  },
  data() {
    return {
      mapItem: null
    }
  },
  destoryed() {
    this.mapItem && this.mapItem.remove()
  },
  methods: {
    /** var start = new mapcan.Point(this.start)
      var end = new mapcan.Point(this.end)
      var offset = end.sub(start)
      var marker = new mapcan.Marker(start, {
        symbol: { ...this.symbol, markerRotation: 90 + 180 * Math.atan2(offset.y, offset.x) / Math.PI }
      }).addTo(this.mapItem) */
    play() { this.mapItem && this.mapItem.play() },
    pause() { this.mapItem && this.mapItem.pause() },
    cancel() { this.mapItem && this.mapItem.cancel() },
    finish() { this.mapItem && this.mapItem.finish() },
    remove() { this.mapItem && this.mapItem.remove() }
  },
  watch: {
    status(n, o) {
      this[n] && this[n]()
    }
  },
  mounted() {
    debugger
    if (!this.container) return
    this.mapItem = new mapcan.RoutePlayer({ path: this.path }, this.container.map, {
      lineSymbol: this.lineSymbol,
      markerSymbol: this.markerSymbol
    })
    this.status === 'play' && this.mapItem.play()
    this.mapItem.on('playfinish', () => {
      this.$emit('finished')
      this.mapItem.remove()
    })
  }
}
</script>
<template>
  <div></div>
</template>

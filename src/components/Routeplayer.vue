<script>
export default {
  name: 'Routeplayer',
  inject: ['container'],
  props: {
    start: Object,
    end: Object,
    symbol: Object
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
    play(map) {
      var start = new mapcan.Point(this.start)
      var end = new mapcan.Point(this.end)
      var offset = end.sub(start)
      var marker = new mapcan.Marker(start, {
        symbol: { ...this.symbol, markerRotation: 100 + 180 * Math.atan2(offset.y, offset.x) / Math.PI }
      }).addTo(this.mapItem)
      var line = new mapcan.LineString([start, end], {
        id: 'arrow'
        // arrowStyle: 'classic',
        // arrowPlacement: 'vertex-last'
      }).addTo(this.mapItem)
      marker.setCoordinates(start)
      marker.bringToFront().animate({
        // animation translate distance
        translate: [offset['x'], offset['y']]
      }, {
        duration: 10000,
        // let map focus on the marker
        focus: true
      }, ({ state }) => {
        if (state.playState !== 'finished') return
        this.$emit('finished')
        marker.remove()
        line.remove()
      })
    }
  },
  mounted() {
    if (!this.container) return
    this.mapItem = this.container.map.getLayer('routeplay') || new mapcan.VectorLayer('routeplay', { forceRenderOnMoving: true }).addTo(this.container.map)
    this.play(this.container.map)
  }
}
</script>
<template>
  <div></div>
</template>

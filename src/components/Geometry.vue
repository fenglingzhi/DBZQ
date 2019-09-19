<script>
/**
 * 按geoJSON格式定义地图图元组件
 */
// import * as mapcan from 'maptalks'
export default {
  name: 'Geometry',
  props: {
    id: String,
    type: String,
    coordinations: [Array, Object],
    properties: Object,
    symbol: [Array, Object],
    json: Object
  },
  inject: ['layer', 'container'],
  provide: {
    geometry: this
  },
  data() {
    return { geometry: null }
  },
  destroyed() {
    this.geometry && this.geometry.remove()
  },
  mounted() {
    // debugger
    let that = this
    if (this.json) {
      this.geometry = this.json.feature ? mapcan.Geometry.fromJSON(this.json) : mapcan.GeoJSON.toGeometry(this.json)
      if (!this.geometry) return
      if (this.symbol) this.geometry.setSymbol(this.symbol)
      this.geometry.setOptions({
        simplifyTolerance: 0
      })
    } else if (this.type) {
      this.geometry = new mapcan[this.type](this.coordinations, {
        id: this.id,
        symbol: this.symbol,
        visible: true,
        properties: this.properties
      })
    } else {
      return
    }
    this.geometry.on('click', e => {
      // debugger
      that.container.mapTip && that.container.mapTip.show(that.geometry.getCenter())
      that.$emit('click', e)
    });
    ['mouseenter', 'mouseout'].forEach(en => that.geometry.on(en, e => that.$emit(en, e)))
    if (this.layer.mapItem) this.layer.mapItem.addGeometry(this.geometry)
  },
  watch: {
    coordinations(n, o) {
      if (this.geometry) this.geometry.setCoordinates(n)
    }
  }
}
</script>
<template>
  <div>
  </div>
</template>

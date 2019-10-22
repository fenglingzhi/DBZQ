<script>
// import { UUID } from '../commons'
// import { each } from 'lodash'
// import * as mapcan from 'maptalks'
// import '../../node_modules/maptalks/dist/maptalks.css'
export default {
  name: 'MapControl',
  props: {
    name: { type: String, required: true },
    center: [Array, Object],
    zoom: { type: Number, default: 0 },
    maxExtent: Object,
    maxZoom: Number,
    minZoom: Number,
    watermark: String,
    arcgisUrl: String,
    spatialRef: Object,
    fitExtent: Object,
    copyright: String
  },
  provide() {
    return {
      container: this
    }
  },
  methods: {
    parseArcgisServerConfig(url) {
      return new Promise((resolve, reject) =>
        mapcan.SpatialReference.loadArcgis(url, (err, conf) => err ? reject(err) : resolve(conf)))
    }
  },
  data() {
    return {
      map: null,
      mapConfig: {},
      mapID: '',
      mapTip: null
    }
  },
  async mounted() {
    let vm = this
    // debugger
    if (vm.arcgisUrl) {
      vm.mapConfig = await vm.parseArcgisServerConfig(`${vm.arcgisUrl}?f=pjson`)
      console.log(JSON.stringify(vm.mapConfig))
      vm.mapConfig.spatialReference.projection = 'EPSG:4326'
    } else {
      vm.mapConfig = {
        spatialReference: vm.spatialRef
      }
    }
    vm.map = new mapcan.Map(vm.name, {
      center: vm.center,
      zoom: vm.zoom,
      maxZoom: vm.maxZoom,
      minZoom: vm.minZoom,
      maxExtent: vm.maxExtent,
      spatialReference: vm.mapConfig.spatialReference,
      attribution: {
        content: this.copyright || ''
      }
    })
    vm.map.setBaseLayer(this.$slots.baselayer[0].componentInstance.mapItem)

    this.$slots.default && this.$slots.default.forEach(({ componentInstance: Inst }) => {
      Inst && Inst.mapItem && Inst.mapItem.addTo(vm.map)
      // debugger
      if (Inst && Inst.hide) Inst.mapItem.hide()
      if (Inst && Inst.disable) Inst.mapItem.disable()
    })
    vm.mapTip = vm.$slots.maptip && vm.$slots.maptip[0].componentInstance.tip
    vm.mapTip && vm.mapTip.addTo(vm.map)

    vm.map.on('click', p => vm.$emit('mapclick', p))
    vm.map.on('moving moveend', e => {
      vm.$emit('update:center', e.target.getCenter())
    })
    vm.map.on('mousemove', e => vm.$emit('mousemove', e))
    vm.map.on('zoomend', e => {
      vm.$emit('update:zoom', e.target.getZoom())
      vm.$emit('update:center', e.target.getCenter())
    })
    // 地图默认组件
    new mapcan.control.Zoom({
      'position': { bottom: 10, right: 20 },
      'slider': false,
      'zoomLevel': true
    }).addTo(vm.map)
  },
  watch: {
    center(n, o) {
      if (n.x === o.x && n.y === o.y) return
      this.map && this.map.setCenter(n)
    },
    zoom(n, o) {
      if (n === o) return
      let z = this.map.getZoom()
      if (z === n) return
      this.map && this.map.setZoom(n)
    },
    fitExtent(n, o) {
      n && this.map && this.map.fitExtent(n)
    }
  }
}
</script>
<template>
  <div :id="name">
    <slot name="baselayer"/>
    <slot/>
    <slot name="maptip"/>
  </div>
</template>
<style scoped>

</style>

<script>
// import * as mapcan from 'maptalks'

export default {
  name: 'Tilelayer',
  inject: ['container'],
  props: {
    id: String,
    tileSystem: Object,
    urlTemplate: [String, Function],
    subDomains: Array,
    arcgisUrl: String,
    base: Boolean,
    hide: Boolean,
    zIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return { mapItem: null }
  },
  destroyed() {
    this.mapItem && this.mapItem.remove()
  },
  watch: {
    hide(n, o) {
      n ? this.mapItem.hide() : this.mapItem.show()
    },
    urlTemplate(n, o) {
      if(n && o){
        this.mapItem.remove();
        this.mapItem = new mapcan.TileLayer(this.id, this.createLayerConfig())
        this.base ? this.container.map.setBaseLayer(this.$layer) : this.container.map.addLayer(this.$layer)
      }
    }
  },
  methods: {
    parseArcgisServerConfig(url) {
      return new Promise((resolve, reject) =>
        mapcan.SpatialReference.loadArcgis(url, (err, conf) => err ? reject(err) : resolve(conf)))
    },
    async createLayerConfig() {
      let layerCfg = {
        visible: !this.hide,
        // tileSystem: this.tileSystem,
        // tileSize: this.tileSize,
        urlTemplate: this.urlTemplate,
        subdomains: this.subDomains
      }
      if (this.arcgisUrl) {
        // debugger
        let mapConfig = await this.parseArcgisServerConfig(`${this.arcgisUrl}?f=pjson`)
        layerCfg.tileSystem = mapConfig.tileSystem
        // this.tileSystem[3] = 2.0037508342787E7
        layerCfg.tileSize = mapConfig.tileSize
        layerCfg.zIndex = this.zIndex
      } else {
        layerCfg.SpatialReference = { projection: 'EPSG:3857' }
        layerCfg.tileSystem = mapcan.TileSystem.getDefault({ code: 'google' })
        layerCfg.zIndex = this.zIndex
      }
      return layerCfg
    }
  },
  async mounted() {
    // debugger
    let cfg = await this.createLayerConfig()
    this.mapItem = new mapcan.TileLayer(this.id, cfg)
    // this.base ? this.container.map.setBaseLayer(this.$layer) : this.container.map.addLayer(this.$layer)
  }
}
</script>
<template>
  <div>
    <slot></slot>
  </div>
</template>

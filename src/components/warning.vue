<template>
    <div class="warning">
      asdfasfasdfasdfasfasdfaf
      <mapcan name="mainmap" :center="[100,31]" :zoom="4" style="height:100%">
        <tilelayer slot="baselayer" :id="`googlelayer`" url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}"></tilelayer>
        <vectorlayer :id="`featurelayer`">
          <geometry v-for="target in targetList" :id="target.feature.id" :key="target.id"
                    :json="target" :symbol="makeSymbol(target)" @click="setSelected(target)"/>
        </vectorlayer>
      </mapcan>
    </div>
</template>

<script>
  import router from '../router'
  import Mapcan from '../components/MapControl'
  // import Tilelayer from './components/Tilelayer'
  // import Vectorlayer from './components/Vectorlayer'
  // import Routeplayer from './components/Routeplayer'
  // import Geometry from './components/Geometry'
  // import Uicomponent from './components/UIComponent'
  // import filterwrap from './components/filter.vue'
  // import TargetrDetail from './components/TargetrDetail/TargetrDetail'
  // import RelevantInformation from './components/RelevantInformation/RelevantInformation'
  import { mapState, mapMutations } from 'vuex'
  // import { SVG, executeGQL } from './commons'
    export default {
      name: "warning",
      components: { Mapcan, router },
      data() {
            return {}
        },
        methods: {},
        mounted() {

        }
    }
</script>

<style scoped>

</style>

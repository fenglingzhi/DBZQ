<template>
    <div class="warning">
      <mapcan name="mainmap" :center="[100,31]" :zoom="4" style="height:100%">
        <tilelayer slot="baselayer" :id="`googlelayer`" url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}"></tilelayer>
        <vectorlayer :id="`featurelayer`">
          <geometry v-for="target in waringList" :id="target.feature.id" :key="target.id"
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
  import { SVG, executeGQL } from './commons'
  const GQL = { query: `
    query($type:String!){
      targetList: filterTargets(targetType:$type) {
        ...on Plane{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
        ...on Ship{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
        ...on Satellite{
          targetType: __typename,
          id,
          feature {
            type,
            geometry {
              type, coordinates
            }
          },
          symbol}
      }
    }`
  }
  export default {
    name: "warning",
    components: { Mapcan, router },
    data() {
      return {
        waringList: [],
        intv: null
      }
    },
    destoryed() {
      this.intv && clearInterval(this.intv)
    },
    methods: {
      makeSymbol(target) {
        let symb = target.symbol
        Object.assign(symb, {
          markerType: 'path',
          markerPathWidth: 1024,
          markerPathHeight: 1024,
          markerFill: '#6fa8dc',
          markerWidth: 20,
          markerHeight: 20,
          markerPath: SVG[target.targetType],
          markerVerticalAlignment: 'middle',
          markerHorizontalAlignment: 'middle'
        })
        return [symb]
      }
    },
    mounted() {
      this.intv = setInterval(async () => {
        let ret = await executeGQL(GQL.query,{ type: 'Plane' })
        this.waringList = ret.targetList
      }, 5000)
    }
  }
</script>

<style scoped>

</style>

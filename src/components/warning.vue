<template>
  <div class="warning">
    <mapcan name="mainmap0" :center="[100,31]" :zoom="4" style="height:100%">
      <tilelayer
        slot="baselayer"
        :id="`googlelayer`"
        url-template="/maptiles/vt?lyrs=y@852&gl=cn&t=y&x={x}&y={y}&z={z}"
      ></tilelayer>
      <vectorlayer :id="`featurelayer`">
        <geometry
          v-for="target in waringList"
          :id="target.feature.id"
          :key="target.id"
          :json="target"
          :symbol="makeWarningSymbol(target)"
          @click="setSelected($event,target)"
        />
      </vectorlayer>
      <!--<uicomponent v-if="warning" :position={top:40,left:2000}>-->
      <!--<filterwarning></filterwarning>-->
      <!--</uicomponent>-->
      <map-tip slot="maptip" :hide.sync="hideTip">test</map-tip>
    </mapcan>
  </div>
</template>

<script>
// import ax from 'axios'
import Mapcan from '../components/MapControl'
import Tilelayer from '../components/Tilelayer'
import Vectorlayer from '../components/Vectorlayer'
import Routeplayer from '../components/Routeplayer'
import Geometry from '../components/Geometry'
import Uicomponent from '../components/UIComponent'
import MapTip from '../components/MapTip'
import filterwrap from '../components/filter.vue'
// import filterwarning from '../components/filterWarning'
import TargetrDetail from '../components/TargetrDetail/TargetrDetail'
import RelevantInformation from '../components/RelevantInformation/RelevantInformation'
import { mapState, mapMutations } from 'vuex'
import { SVG, executeGQL, gql } from '../commons'
import { delay } from 'lodash'
const GQL = {
  queryPlaneByID: {
    query: gql`
      query($pid: ID!) {
        target(id: $pid) {
          ... on Plane {
            targetType: __typename
            id
            name
            ICAO
            kind {
              label
            }
            usage {
              label
            }
            registration
            ORG {
              cname
              ename
              abbr
              code
              type
              base {
                country {
                  cname
                }
              }
              business
              superior {
                cname
              }
              leader {
                name
                nation
                gender
                birthday
                nickname
                country {
                  cname
                }
                faith
                job
                EDU
                city
              }
              homepage
            }
            radar {
              model
              responseCode
            }
            action {
              originated {
                name
                code
                usage {
                  label
                }
                address {
                  position
                  country {
                    cname
                  }
                }
                openDate
                level
                area
                parkCount
              }
              landing {
                name
                address {
                  country {
                    cname
                  }
                }
              }
              ETD
              ETA
              lon
              lat
              alt
              horSpeed
              vetSpeed
              azimuth
            }
            history {
              originated {
                name
                code
                usage {
                  label
                }
                address {
                  position
                  country {
                    cname
                  }
                }
                openDate
                level
                area
                parkCount
              }
              landing {
                name
                address {
                  position
                  country {
                    cname
                  }
                }
              }
              ETD
              ETA
              lon
              lat
              alt
              horSpeed
              vetSpeed
              azimuth
              track {
                lon
                lat
                alt
                timestamp
                horSpeed
                vetSpeed
                azimuth
              }
            }
            news {
              title
              content
              source
              timestamp
            }
            nearby {
              name
              code
              usage {
                label
              }
              address {
                country {
                  cname
                }
              }
              openDate
              level
              area
              parkCount
              recent {
                action {
                  originated {
                    name
                  }
                  landing {
                    name
                  }
                  ETD
                  ETA
                  lon
                  lat
                }
              }
            }
          }
          ... on Ship {
            targetType: __typename
            id
            name
            usage {
              label
            }
            MMSI
            ORG {
              cname
              ename
              abbr
              code
              type
              base {
                country {
                  cname
                }
              }
              business
              superior {
                cname
              }
              leader {
                name
                nation
                gender
                birthday
                nickname
                country {
                  cname
                }
                faith
                job
                EDU
                city
              }
              homepage
            }
            country {
              cname
            }
            status
            tonnage
            width
            length
            height
            maxSpeed
            phone
            history {
              heading
              ending
              ETD
              status
              lon
              lat
              draught
              loading {
                name
              }
              destination {
                name
              }
              ETA
            }
            news {
              title
              content
              source
              timestamp
            }
            nearby {
              name
              code
              usage {
                label
              }
              address {
                country {
                  cname
                }
              }
              goods
              capacity
              operator {
                cname
              }
              phone
              recent {
                action {
                  loading {
                    name
                  }
                  destination {
                    name
                  }
                  ETA
                  lon
                  lat
                }
              }
            }
          }
          ... on Satellite {
            name
            country {
              cname
            }
            usage {
              label
            }
            manufacturer {
              cname
            }
            NORAD
            perigee
            apogee
            launchDate
            launchSite {
              city
            }
            drySass
            action {
              RCS
              lon
              lat
              geocentric
              speed
              GMT
            }
          }
        }
      }
    `
  },
  freshWarning: {
    query: gql`
      query($type: String!) {
        targetList: filterTargets(targetType: $type, size: 5) {
          ... on Plane {
            targetType: __typename
            id
            feature {
              type
              geometry {
                type
                coordinates
              }
            }
            symbol
          }
          ... on Ship {
            targetType: __typename
            id
            feature {
              type
              geometry {
                type
                coordinates
              }
            }
            symbol
          }
          ... on Satellite {
            targetType: __typename
            id
            feature {
              type
              geometry {
                type
                coordinates
              }
            }
            symbol
          }
        }
      }
    `
  }
}
export default {
  name: 'app',
  components: {
    Mapcan,
    MapTip,
    Tilelayer,
    Vectorlayer,
    Geometry,
    Routeplayer,
    Uicomponent,
    filterwrap,
    TargetrDetail,
    RelevantInformation,
    filterwarning
  },
  data() {
    return {
      show_TargetrDetail_boolean: false,
      show_RelevantInformation_boolean: false,
      targetr_type: 'airplane', // 下弹窗展示类型
      targetr_id: '0', // 下弹窗展示类型的id
      targetr_info: {},
      spinShow: true,
      route: null,
      playStatus: '',
      waringList: [],
      hideTip: false,
      selectedGeo: null,
      warnings: false // 预警标志
    }
  },
  computed: {
    ...mapState(['targetList']),
    ...mapState(['selectedTarget'])
  },
  watch: {
    targetr_id() {
      this.get_info()
    },
    selectedTarget(n, o) {
      this.get_info()
    }
  },
  methods: {
    ...mapMutations(['setSomeState']),
    setSelected(p, t) {
      this.selectedGeo &&
        this.selectedGeo.updateSymbol({
          markerWidth: 25,
          markerHeight: 25,
          markerFill: '#f2e239'
        })
      p.target.updateSymbol({
        markerWidth: 35,
        markerHeight: 35,
        markerFill: '#ff0000'
      })
      this.selectedGeo = p.target
      this.setSomeState(['selectedTarget', t])
      this.show_TargetrDetail_boolean = true
      this.show_RelevantInformation_boolean = true
      this.get_info()
    },
    makeSymbol(target) {
      let symb = target.symbol
      Object.assign(symb, {
        markerType: 'path',
        markerPathWidth: 1024,
        markerPathHeight: 1024,
        markerFill: '#f2e239',
        markerWidth: 25,
        markerHeight: 25,
        markerPath: SVG[target.targetType],
        markerVerticalAlignment: 'middle',
        markerHorizontalAlignment: 'middle'
      })
      return [symb]
    },
    makeWarningSymbol(target) {
      let symb = target.symbol
      Object.assign(symb, {
        markerType: 'path',
        markerPathWidth: 1024,
        markerPathHeight: 1024,
        markerFill: '#ff0000',
        markerWidth: 25,
        markerHeight: 25,
        markerPath: SVG[target.targetType],
        markerVerticalAlignment: 'middle',
        markerHorizontalAlignment: 'middle'
      })
      return [symb]
    },
    // 关闭下弹窗
    close_TargetrDetail() {
      this.show_TargetrDetail_boolean = false
    },
    close_RelevantInformation() {
      this.show_RelevantInformation_boolean = false
    },
    // 展开弹窗
    show_TargetrDetail(type) {
      this.targetr_type = type
      this.targetr_id = this.targetr_id + '-1'
      this.show_TargetrDetail_boolean = true
      this.show_RelevantInformation_boolean = true
    },
    // 获取目标
    get_info() {
      this.spinShow = true
      executeGQL(GQL.queryPlaneByID, { pid: this.selectedTarget.id }).then(
        r => {
          this.spinShow = false
          this.targetr_info = r.target
        }
      )
    },
    playOver() {
      this.playStatus = 'remove'
      this.route = null
    },
    change_warning() {
      this.warnings = !this.warnings
      if (this.warnings === false) {
        console.log()
        location.reload()
      }
    }
  },
  mounted() {
    this.$root.mq.$on('routePlay', e => {
      if (this.playStatus === 'play') return (this.playStatus = 'pause')
      if (this.playStatus === 'pause') return (this.playStatus = 'play')
      this.playStatus = 'remove'
      delay(() => {
        this.route = {
          path: e.track.map(p => [p.lon, p.lat, p.timestamp]),
          unitTime: 100,
          markerSymbol: {
            markerType: 'path',
            markerPathWidth: 1024,
            markerPathHeight: 1024,
            markerFill: '#ffff00',
            markerWidth: 30,
            markerHeight: 30,
            markerPath: SVG['Plane'],
            markerVerticalAlignment: 'middle',
            markerHorizontalAlignment: 'middle'
          },
          lineSymbol: {
            lineColor: {
              type: 'linear',
              colorStops: [
                [0.0, 'white'],
                [1 / 4, 'aqua'],
                [2 / 4, 'green'],
                [3 / 4, 'orange'],
                [1.0, 'red']
              ]
            }
          }
        }
        this.playStatus = 'play'
      }, 1000)
    })
    this.intv = setInterval(async () => {
      let ret = await executeGQL(GQL.freshWarning, { type: 'Plane' })
      // debugger
      this.waringList = ret.targetList
    }, 5000)
  }
}
</script>

<style scoped>
</style>

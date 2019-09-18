import Vue from 'vue'
import VCharts from 'v-charts'
import App from './App.vue'
import store from './store'
import animate from 'animate.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assset/iconfont/iconfont.css'
import router from 'vue-router'

Vue.use(iView)
Vue.use(animate)
Vue.use(VCharts)
Vue.config.productionTip = false

// 仅开发环境使用的Mock数据
if (process.env.NODE_ENV !== 'production') require('./mock')

new Vue({
  store,
  router,
  data () {
    return {
      mq: new Vue()
    }
  },
  render: h => h(App)
}).$mount('#app')

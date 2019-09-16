import Vue from 'vue'
import App from './App.vue'
import store from './store'
import animate from 'animate.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assset/iconfont/iconfont.css'

Vue.use(iView)
Vue.use(animate)
Vue.config.productionTip = false

// 仅开发环境使用的Mock数据
if (process.env.NODE_ENV !== 'production') require('./mock')

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

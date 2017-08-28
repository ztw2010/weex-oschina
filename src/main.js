import Vue from 'vue'
import App from './App'
import PixelSpinner from './views/Spinner/index'
import PixelContent from './views/Content/index'
import router from './router/router'
import store from './store/'
import * as filters from './utils/filter'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'




Vue.config.productionTip = false
/* eslint-disable no-new */
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
Vue.use(VueMaterial)
Vue.use(PixelSpinner)
Vue.use(PixelContent)
Vue.use(Mint);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})

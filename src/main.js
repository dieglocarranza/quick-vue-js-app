import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { BootstrapVue, LayoutPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)

import { dollarFilter, percentFilter } from '@/filters'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

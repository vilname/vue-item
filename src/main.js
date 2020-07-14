import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import {routes} from './routes.js'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.use(IconsPlugin)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

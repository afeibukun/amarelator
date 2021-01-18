import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter)

import './assets/css/styles.css'

const router = new VueRouter({
  mode: 'history',
  base: 'amarelator',
  routes // short for `routes: routes`

})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

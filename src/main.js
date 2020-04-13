import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { Datetime } from 'vue-datetime'
import "./css/main.css"
import "./css/_rtl.scss"


// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(Datetime)


new Vue({
  router,
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')

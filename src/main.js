import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { Datetime } from 'vue-datetime'
import "./css/main.css"
import "./css/_rtl.scss"
import VModal from 'vue-js-modal'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

import i18n from './i18n'
import Axios from 'axios'

Vue.prototype.$http = Axios;
Vue.config.productionTip = false
Vue.use(Datetime)
Vue.use(VModal)
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')

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
import 'vue-datetime/dist/vue-datetime.css'
import VueProgressBar from 'vue-progressbar'
import i18n from './i18n'
import api from "./axios/index"
Vue.prototype.$http = api;
Vue.config.productionTip = false
Vue.use(Datetime)
Vue.use(VModal)

Vue.use(VueProgressBar, {
  color: 'rgb(0, 151, 239)',
  failedColor: 'red',
  height: '4px'
})


new Vue({
  router,
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')

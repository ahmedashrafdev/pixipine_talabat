<template>
  <div id="app" class="min-h-screen relative overflow-hidden">
    <progress-bar/>
    <options-modal/>
    <nav-bar :loggedIn="isLogedIn"/>
    <router-view/>
    <app-footer v-if="$route.name !== 'home'"/>
    <flash-message v-if="showFlashMsg" :data="flashMsgData"/>
     <vue-progress-bar></vue-progress-bar>
  </div>
  
</template>
<script>
import NavBar from "@/layouts/NavBar.vue"
import FlashMessage from "@/components/FlashMessage.vue"
import axios from "axios"
import AppFooter from "@/layouts/AppFooter.vue"
import ProgressBar from "@/components/ProgressBar.vue"
import OptionsModal from "@/components/modals/Options.vue";

export default {
  components:{
    "progress-bar" : ProgressBar,
    "nav-bar" : NavBar,
    "app-footer" : AppFooter,
    "flash-message" : FlashMessage,
    "options-modal": OptionsModal,
  },
  computed: {
    isLogedIn() {
      return this.$store.getters["user/isLoggedIn"];
    },
    flashMsgData() {
      return this.$store.getters["ui/flashMsgData"];
    },
    showFlashMsg() {
      return this.$store.getters["ui/showFlashMsg"];
    },
  },
  mounted(){
    this.$Progress.finish()
    this.$store.dispatch('ui/initLocale',{i18n : this.$i18n} )
  },

  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }

  
//   // created: function () {
//   // axios.interceptors.response.use(undefined, function (err) {
//   //   return new Promise(function (resolve, reject) {
//   //     if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
//   //     // if you ever get an unauthorized, logout the user
//   //       this.$store.dispatch('user/logout')
//   //       this.$router.push('/')
//   //     // you can also redirect to /login if needed !
//   //     }
//   //     throw err;
//   //   });
//   // });
// }
}
</script>


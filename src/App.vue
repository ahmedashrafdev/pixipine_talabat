<template>
  <div id="app" class="min-h-screen relative overflow-hidden">
    <nav-bar :loggedIn="isLogedIn"/>
    <router-view/>
    <app-footer v-if="$route.name !== 'home'"/>
    <flash-message v-if="showFlashMsg" :data="flashMsgData"/>
  </div>
</template>
<script>
import NavBar from "@/layouts/NavBar.vue"
import FlashMessage from "@/components/FlashMessage.vue"
import axios from "axios"
import AppFooter from "@/layouts/AppFooter.vue"
export default {
  components:{
    "nav-bar" : NavBar,
    "app-footer" : AppFooter,
    "flash-message" : FlashMessage,
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
    const html = document.querySelector("html");
    if (localStorage.getItem("locale")) {
      if(localStorage.getItem("locale") == "ar"){

        html.setAttribute("dir", "rtl");
        html.classList.add("rtl")
      }else{

        html.setAttribute("dir", "ltr");
        html.classList.remove("rtl");
      }
    } else {
      html.classList.add("rtl");
      html.setAttribute("dir", "rtl");

    }
  },
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


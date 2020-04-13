<template>
  <div id="app" class="min-h-screen overflow-hidden">
    
    <nav-bar/>
    <router-view/>
    <app-footer v-if="$route.name !== 'home'"/>
  </div>
</template>
<script>
import NavBar from "@/layouts/NavBar.vue"
import AppFooter from "@/layouts/AppFooter.vue"
export default {
  components:{
    "nav-bar" : NavBar,
    "app-footer" : AppFooter,
  },
  mounted(){
    const html = document.querySelector("html");
    if (localStorage.getItem("locale")) {
      localStorage.getItem("locale") == "ar"
        ? html.classList.add("rtl")
        : html.classList.remove("rtl");
    } else {
      html.classList.add("rtl");
    }
  }
}
</script>


<template>
  <div id="navbar" ref="navbar" class="navbar bg-primary fixed top-0 w-full z-200  text-white">
    <div class="container">
      <div class="wrapper flex ietms-center py-2 justify-between">
        <div class="logo flex ietms-center">
          <svg @click="toggleMobileNav" xmlns="http://www.w3.org/2000/svg"  class="close-icon cursor-pointer" viewBox="0 0 511.968 511.968"><path d="M511.968 24.072l-10.992-11.584-244.992 232.48L10.992 12.488 0 24.072l244.368 231.904L0 487.88l10.992 11.6L255.984 267l244.992 232.48 10.992-11.6L267.6 255.976z"/></svg>

         <svg @click="toggleMobileNav" class="lg:hidden mr-4  cursor-pointer" style="width: 25px; fill: #fff;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 30.78"><path class="cls-1" d="M46.58 5.3H2.65a2.65 2.65 0 010-5.3h43.93a2.65 2.65 0 010 5.3zM46.58 18H2.65a2.65 2.65 0 110-5.3h43.93a2.65 2.65 0 010 5.3zM23.29 30.78H2.65a2.65 2.65 0 110-5.3h20.64a2.65 2.65 0 110 5.3z"/></svg>
          <router-link class="logo-link flex" to="/"
            ><img
              src="../assets/logo.svg"
              class=" lg:max-w-full md:max-w-4/5 sm:max-w-3/4 max-w-2/3 "
              alt=""
          /></router-link>
        </div>
        <div class="navbar__links flex items-center">
          <nav class="menu">
            <ul class="menu__list flex items-center">
              <li class="menu__list-item px-2  uppercase">
                <router-link to="/menu" class="text-lg">{{
                  $t("offers")
                }}</router-link>
              </li>
              <li class="menu__list-item px-2  uppercase">
                <router-link to="/menu" class="text-lg">{{
                  $t("most_selling")
                }}</router-link>
              </li>

              
              <li class="menu__list-item px-2  uppercase">
                <router-link to="/menu" class="text-lg">{{
                  $t("menu")
                }}</router-link>
              </li>

              <li v-if="loggedIn" class="menu__list-item px-2  uppercase">
                <account-dropdown />
              </li>

              <li v-if="!loggedIn" class="menu__list-item px-2  uppercase rtl:mt-m4 login">
                <login-modal />
              </li>
              <li v-if="!loggedIn" class="menu__list-item px-2  uppercase rtl:mt-m4 login">
                <register-modal />
              </li>

              

              <li
                class="menu__list-item px-2  ltr:mt-m4 uppercase switcher kufi"
              >
                <a href="#" @click.prevent="setLocale()" class="">{{
                  $t("arabic")
                }}</a>
              </li>
            </ul>
          </nav>
          <nav-cart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavCart from "@/components/NavCart.vue";
import AccountDropdown from "@/components/AccountDropdown.vue";
import LoginModal from "@/components/modals/Login.vue";
import RegisterModal from "@/components/modals/Register.vue";

export default {
  components: {
    "nav-cart": NavCart,
    "account-dropdown": AccountDropdown,
    "login-modal": LoginModal,
    "register-modal": RegisterModal,
  },
  props:['loggedIn'],
  // computed: mapGetters(['logedIn']),
  methods: {
    toggleMobileNav(){
      let navbar = this.$refs.navbar 
      navbar.classList.toggle('mobile-active')
    },
    setLocale() {
      this.$i18n.locale = this.$i18n.locale == "en" ? "ar" : "en";
      localStorage.setItem("locale", this.$i18n.locale);
      const html = document.querySelector("html");
      if (this.$i18n.locale == "ar") {
        html.classList.add("rtl");
        html.setAttribute("lang", "ar");
        html.setAttribute("dir", "rtl");
      } else {
        html.classList.remove("rtl");
        html.setAttribute("lang", "en");
        html.setAttribute("dir", "ltr");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.close-icon{
    display:none;
  }
  
.mobile-active{
  background-color:#000!important;

  .close-icon{
    width: 20px;
    display:block;
    fill: #fff;
    z-index:10;
    position:absolute;
    top: 20px;
    left: 20px;
  }
  .cart-icon{
    display:none
  }
  .menu {
    position:fixed !important;
    display:block !important;
    opacity:1;
    transform:translateX(0);
    left:0;
    top:0;
    width:100vw;
    height:100vh;
    background-color:#191919;
    padding:100px 30px;

    &__list{
      display:block !important;
      &-item{
      &.switcher{
        display:none !important;
      }
      border-bottom: 1px solid #333;
      padding:10px 2px;
      display:block !important;
        

      & a{
        display: block;
      }
      &:hover{
        color:red;
        transform:translateX(5px) scale(1.05);
        
      }
    }
    }
    
  }
  .logo-link{
    position:absolute;
    z-index:10;
    top:20px;
    left:50%;
    transform: translateX(-50%);
  }
}
.menu{
  @media (max-width: 1024px) {
    transform:translateX(-100%);
    opacity:0;
   
    // transition:all .5s ease-in;
  }
}
.menu__list {
  
  &-item {
    &:not(.switcher):not(.login) {
      // @media (min-width: 640px) {

      // }
      // @media (min-width: 768px) {
      //   display: none ;
      // }
      display: none;
      
      @media (min-width: 1024px) {
        display: flex;
      }
    }

    & a {
    }
  }

  
}
</style>

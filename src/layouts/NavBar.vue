<template>
  <div id="navbar" class=" bg-primary fixed top-0 w-full z-200  text-white">
    <div class="container">
      <div class="wrapper flex ietms-center py-2 justify-between">
        <div class="logo flex ietms-center">
          <router-link to="/"><img src="../assets/logo.svg" class=" lg:max-w-full md:max-w-4/5 sm:max-w-3/4 max-w-2/3 " alt=""  /></router-link>
        </div>
        <div class="navbar__links flex items-center">
          <nav class="menu">
            <ul class="menu__list flex items-center">
              <li class="menu__list-item px-2  uppercase">
                <router-link to="/menu" class="text-sm">{{$t('offers')}}</router-link>
              </li>
              <li class="menu__list-item px-2  uppercase">
                <router-link to="/menu" class="text-sm"
                  >{{$t('most_selling')}}</router-link
                >
              </li>
              <li class="menu__list-item px-2  uppercase">
                <router-link to="/menu" class="text-sm">{{$t('menu')}}</router-link>
              </li>
              <li class="menu__list-item px-2  uppercase rtl:mt-m4 login">
                <router-link to="/login" class="text-sm ">{{$t('login')}}</router-link>
              </li>
              <li class="menu__list-item px-2  ltr:mt-m4 uppercase switcher kufi">
                <a href="#" @click.prevent="setLocale()" class="">{{$t('arabic')}}</a>
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
export default {
  components: {
    "nav-cart": NavCart
  },
  methods : {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.menu__list{

  &-item{
      &:not(.switcher):not(.login){
        // @media (min-width: 640px) {

        // }
        // @media (min-width: 768px) {
        //   display: none ;
        // }
         display: none ;
        @media (min-width: 1024px) {
          display: flex;
        }
      
    }
    & a{


    }
  }
}
</style>

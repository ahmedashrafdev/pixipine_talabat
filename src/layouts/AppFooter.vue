<template>
 <footer class="footer w-full bg-footerbg mt-8">
   <div class="container flex justify-between text-white py-4">
    <span>
       {{$t('rights')}}
    </span>
    <span>
      @2020 <a href="http://pixipine.com" class="font-sans"> pixipine.com</a>
    </span>
   </div>

 </footer>
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
      } else {
        html.classList.remove("rtl");
        html.setAttribute("lang", "en");
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

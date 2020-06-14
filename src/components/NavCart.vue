<template>
  <div class="relative">
    <button>
      <img
        src="../assets/icons/icon_cart.svg"
        alt="Cart"
        width="19"
        height="22"
        @click="toggleMenu"
      />
    </button>
      <div ref="menu" class="dropdown-menu bg-gray-100 fixed shadow-lg w-full h-screen sm:absolute sm:h-mincontent  sm:w-96 right--10  lg:top-10  sm:rounded-md rounded-none">
        <div class="arrow"></div>
        <div
          class="heading p-2 flex ietms-center bg-gray-200 sm:bg-gray-100   justify-between border-b border-gray-300 border-solid"
        >
          <span class="text-lg text-primary capitalize m-0">{{$t('your_cart')}}</span>
          <img
            src="../assets/icons/close.svg"
            alt="Cart"
            class="ml-4"
            width="12"
            height="30"
            @click="toggleMenu"
          />
        </div>
        <Cart/>
      </div>
    
    
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";

export default {
  name: "nav-cart",
  components:{
    Cart
  },
  methods:{
    toggleMenu(){
      let menu = this.$refs.menu
      menu.classList.toggle('active')
    },
    addItem(){
      this.$router.push('/menu')
      this.toggleMenu()
    },

    checkout(){
      this.$router.push('/checkout')
      this.toggleMenu()
    },},
  watch:{
    '$route' () {
      let menu = this.$refs.menu
      menu.classList.remove('active')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

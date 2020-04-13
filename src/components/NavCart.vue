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
        <div
          class="items flex items-center   justify-between bg-white overflow-y-auto p-2 border-b border-gray-300 border-solid"
        >
          <div
            class="counter text-textcolor flex h-mincontent mr-1 rounded border border-gray-200 border-solid"
          >
            <div class="minus border-r w-6  text-center cursor-pointer">
              <span class="text-primary">-</span>
            </div>
            <div class="count border-r w-6 text-center  cursor-select">
              <span class="text-sm">1</span>
            </div>
            <div class="plus w-6 text-center cursor-pointer">
              <span class="text-primary">+</span>
            </div>
          </div>
          <div class="name text-textcolor font-thin text-sm">
            <span> Cheese pizza</span>
          </div>
          <div class="price text-textcolor font-thin text-sm">
            <span>18.00</span>
            <span class="ml-2 text-sm cursor-pointer">
              <font-awesome-icon
                class="hover:text-primary"
                size="sm"
                icon="minus-circle"
              ></font-awesome-icon
            ></span>
          </div>
        </div>
        <div class="data flex justify-between p-3 pt-2 pb-0 text-greylight">
          <span class="text-md  capitalize">{{$t('subtotal')}}</span>
          <span class="text-md  capitalize">KD 18.00</span>
        </div>
        <div class="data flex justify-between p-3 pb-2 pt-0 text-textcolor">
          <span class="text-md  capitalize">{{$t('service_charge')}}</span>
          <span class="text-md  capitalize">{{$t('free')}}</span>
        </div>
        <div class="data flex justify-between p-3 pb-2 pt-0 text-textcolor">
          <span class="text-md  capitalize">{{$t('total')}}</span>
          <span class="text-md  capitalize">KD 18.00</span>
        </div>
        <div class="data flex p-3 pb-2 pt-1 text-center text-sm sm:text-base text-white">
          <a href="#" @click.prevent="addItem" class="text-secondary border solid border-secondary px-2 sm:hidden mr-2 block h-mincontent w-2/5  hover:bg-green-700 p-1 rounded">{{$t('add_items')}}</a>
          <a href="#" @click.prevent="checkout" class="text-white bg-secondary px-2  hover:bg-green-700 w-full p-1 rounded">{{$t('checkout')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-cart",
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

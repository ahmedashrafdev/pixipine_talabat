<template>
  <div class="relative">
    <button @click="toggleMenu" class="uppercase w-full h-full text-left text-lg"> 
      {{$t('account')}}
    </button>
      <div ref="menu" class="account-menu dropdown-menu bg-gray-100 fixed shadow-lg w-full h-screen sm:absolute sm:h-mincontent  sm:w-64 right--10  lg:top-10  sm:rounded-md rounded-none">
        <div class="arrow"></div>
        
        <ul
          class="items bg-white p-2 border-b"
        >
          <li class="text-textcolor uppercase block p-2">
           
            <router-link to="/menu" class="text-lg text-textcolor">{{
              $t("my_orders")
            }}</router-link>
          </li>
          <li class="text-textcolor uppercase block p-2">
            <router-link to="/account" class="text-lg text-textcolor">{{
              $t("account_info")
            }}</router-link>
          </li>
          <li class="text-textcolor uppercase block p-2">
            <router-link to="/menu" class="text-lg text-textcolor">{{
              $t("saved_addresses")
            }}</router-link>
          </li>
          <li class="text-textcolor uppercase block p-2 cursor-pointer" @click.prevent="logout">
            <span class="text-lg">{{
              $t("logout")
            }}</span>
          </li>
        </ul>
        
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
    logout()  {
        this.$store.dispatch('user/logout')
        console.log('oute')
        this.$router.push('/')
        this.toggleMenu()
      },
    

   },
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
.arrow{
    @media (max-width: 1024px) {
      display: none;

    }
}
.account-menu{
    @media (max-width: 1024px) {
        top:auto !important;
      border: 0px !important;
      height: auto !important;
      background-color : transparent !important;
    
    }
    & .items{
      @media (max-width: 1024px) {
      height: auto !important;
      background-color : transparent !important
      }
    }
    & li , & li a{
      @media (max-width: 1024px) {
      color:#fff !important;
    }
    
    }
}
ul {
   @media (max-width: 1024px) {
     display: block !important;
  & li {
    border-bottom: 1px solid #333;
    padding: 10px 2px;
    display: block !important;
    & a {
      display: block;
    }
    &:hover {
      color: red;
      transform: translateX(5px) scale(1.05);
    }
  }
   }
  
}
li {
  display: block;
  margin: 0 10px;
  &:hover{
    background-color:#f9f9f9;
  }
}
a {
  color: #42b983;
}
</style>

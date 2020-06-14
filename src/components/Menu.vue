<template>
  <div class="menu-page block md:flex">
    
    <div class="categories h-mincontent hidden md:block w-56 shadow py-4 border border-grey-500 solid rounded-sm">
      <h3 class="px-5 pb-4   border-b border-grey-500 solid">{{$t('categories')}}</h3>
      <ul class="" v-if="!menuLoading">
        <li
         v-for="cat in categories" :key="cat.category.id" 
          @click="setCategory(cat.category.id)"
          :class="cat.category.id == selectedCategory ? 'hover:bg-gray-200 text-gray-700 px-5 cursor-pointer text-sm py-2 active' : 'hover:bg-gray-200 text-gray-700 px-5 cursor-pointer text-sm py-2' "
          
        >
          <span v-if="rtl">{{cat.category.name_ar}}</span>
          <span v-if="!rtl">{{cat.category.name}}</span>
        </li>
        
        
      </ul>
      <Loader v-if="menuLoading"/>
    </div>
    <div class="menu flex-1 px-0 sm:px-4">
      <input
        type="text"
        :placeholder="$t('search_placeholder')"
        class="border border-gray-300 w-full p-2"
      />
      <ul  v-if="!menuLoading" class="items">
       
          <Accordion :active="false" v-for="cat in categories" :key="cat.category.id" :name="cat.category.name" :id="cat.category.id" :namear="cat.category.name_ar">
            
                <li v-for="item in cat.items"  :key="item.id" @click.prevent="getItem(item)"
                  class="border-b rounded hover:bg-gray-200 cursor-pointer border-gray-200 item flex flex-no-wrap justify-between p-3">
                  <div class="left flex flex-no-wrap ">
                    <a  class="mr-3 h-mincontent w-32 img p-1 border border-gray-200">
                      <img
                        class="w-full h-auto"
                        :src="item.image"
                        alt=""
                        srcset=""
                      />
                    </a>
                    <div class="meta-data text-tiny sm:text-sm lg:text-base sm:text-sm">
                      <a href="" class="text-black w-64 block" v-if="rtl">{{item.name_ar}}</a>
                      <a href="" class="text-black w-64 block" v-if="!rtl">{{item.name}}</a>
                      <!-- <a href="" class="text-black">name</a> -->
                      <p class="text-gray-600 pr-0 sm:pr-32" v-if="!rtl" v-html="item.description">
                      <p class="text-gray-600 pr-0 sm:pr-32" v-if="rtl" v-html="item.description_ar">
                      </p>
                    </div>
                  </div>
                  <div class="right text-tiny lg:text-base sm:text-sm">
                    <span class="price">KD{{item.price}}</span>
                    <div class="rating w-16">
                      <img
                      class="w-full h-auto"
                        src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div class="w-full  text-center mt-3">
                      <font-awesome-icon
                        class="hover:text-primary text-secondary"
                        size="lg"
                        icon="plus-circle"
                      ></font-awesome-icon>
                    </div>
                  </div>
                </li>
             
          </Accordion>
          
       
       
      </ul>
      <Loader v-if="menuLoading"/>
    </div>
    <menu-cart class="hidden lg:block"/>
  </div>
</template>

<script>
import MenuCart from "@/components/MenuCart.vue";
import Loader from "@/components/Loader.vue";
import Accordion from "@/components/Accordion.vue";

export default {
  name: "menuTab",
  components: {
    "menu-cart": MenuCart,
    Accordion,
    
    Loader,
  },
  computed: {
    categories() {
      return this.$store.getters["menu/categories"];
    },
    menuLoading() {
      return this.$store.getters["menu/menuLoading"];
    },
    rtl() {
      return this.$store.getters["ui/rtl"];
    },
    selectedCategory() {
      return this.$store.getters["menu/selectedCategory"];
    },
    item(){
      return this.$store.getters["cart/item"];
    }

    
  },
  methods: {
    async getMenu(){
      await this.$store.dispatch('menu/getMenu' , {isAjax : true})
    },
    async getItem(item){
      await this.$store.dispatch('cart/getItem' , item).then((item => {
        this.$store.dispatch('ui/showModal' , {"name" : "modal-options" , modal : this.$modal})
      }))
    },


    async setCategory(category) {
      let elem = this.$refs[`category${category}`][0];
      const offset = 60;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      let menu = this.$refs[`dropdown${category}`][0];
      menu.classList.add("active");
      await this.$store.dispatch('menu/setSelectedCategory' , category)
    },
  },
  created(){
    this.getMenu()
  }
};
</script>

<style lang="scss" scoped>
.categories ul li.active {
  border-left: 3px solid;
  @apply border-primary;
  @apply bg-gray-200;
}

.category-items.dropdown {
  transform: translateY(-100%);
  height: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in;
  &.active {
  height: 100%;

    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>

<template>
     <div v-if="!cartLoading">
      <div v-if="cart.items.length >0">
        <div
          v-for="item in cart.items"
          :key="item.id"
          class="items flex justify-between overflow-y-auto p-2 border-b border-gray-100 border-solid">
          <div
            class="counter text-textcolor flex items-center  rounded border border-gray-200 border-solid"
          >
            <div class="minus border-r w-6 text-center cursor-pointer"  @click.prevent="decreaseCartItem(item)">
              <span class="text-primary">-</span>
            </div>
            <div class="count border-r w-6 text-center cursor-select">
              <span class="text-sm">{{ item.qty }}</span>
            </div>
            <div class="plus w-6 text-center cursor-pointer" @click.prevent="setCartItem(item)">
              <span class="text-primary">+</span>
            </div>
          </div>
          <div class="name text-textcolor text-sm w-48 text-center">
            <span v-if="!rtl">{{ item.name }}</span>
            <span v-if="rtl">{{ item.name_ar }}</span>
          </div>
          <div class="price text-textcolor text-sm">
            <span>{{ item.subtotal }}</span>
            <span class="ml-2 text-sm cursor-pointer" @click.prevent="removeCartItem(item)">
              <font-awesome-icon
                class="hover:text-primary"
                size="sm"
                icon="minus-circle"
              ></font-awesome-icon
            ></span>
          </div>
        </div>
        
        <div class="data flex justify-between p-3 pt-2 pb-0 text-greylight">
          <span class="text-md  capitalize">{{ $t("subtotal") }}</span>
          <span class="text-md  capitalize">KD {{ cart.total }}</span>
        </div>
        <div class="data flex justify-between p-3 pb-2 pt-0 text-textcolor">
          <span class="text-md  capitalize">{{ $t("service_charge") }}</span>
          <span class="text-md  capitalize">{{ $t("free") }}</span>
        </div>
        <div class="data flex justify-between p-3 pb-2 pt-0 text-textcolor">
          <span class="text-md  capitalize">{{ $t("total") }}</span>
          <span class="text-md  capitalize">KD {{ cart.total }}</span>
        </div>
        <div class="data flex p-3 pb-2 mb-2 pt-1 text-center text-white">
          <router-link
            to="/checkout"
            class="bg-secondary  px-3 hover:bg-green-700 w-full p-1 rounded"
            >{{ $t("checkout") }}</router-link
          >
        </div>
      </div>
      <div v-else class="p-4 flex items-center flex-col text-center">
        <div class="w-32 mb-4">
          <img
            src="https://www.talabat.com/images/talabat/empty-cart.svg"
            alt=""
            srcset=""
          />
        </div>
        <h4 class="text-textcolor">{{ $t("no_items_on_cart") }}</h4>
      </div>
    </div>
    <Loader v-else/>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  components: {
  
    Loader,
  },
    computed: {
    rtl() {
      return this.$store.getters["ui/rtl"];
    },
    cart() {
      return this.$store.getters["cart/cart"];
    },
    cartLoading() {
      return this.$store.getters["cart/cartLoading"];
    },
  },
  methods: {
    async getCart() {
      await this.$store.dispatch("cart/getCart" , {isAjax : true});
    },

    async setCartItem(item) {
      // console.log(data)
      this.$Progress.start()
      await this.$store.dispatch("cart/setCartItem" , {item:item.id}).then(res =>{
        item.qty = parseInt(item.qty) +1;
        item.subtotal = parseInt(item.subtotal) + parseInt(item.price)
        this.cart.total = this.cart.total + parseInt(item.price)
        this.$Progress.finish()
      })
      .catch( e => {
        this.$Progress.fail()
        console.log(e)
      }
      )
    },
    async removeCartItem(item) {
      this.$Progress.start()
      await this.$store.dispatch("cart/removeCartItem" , item.id).then(res =>{
        let index =  this.cart.items.indexOf(item);
        this.cart.total = parseInt(this.cart.total) - parseInt(item.subtotal)
        this.cart.items.splice(index, 1);
        this.$Progress.finish()
      })
      .catch( e => {
        this.$Progress.fail()
      })
    },
    async decreaseCartItem(item) {
      // console.log(data)
      if(item.qty > 1){

        this.$Progress.start()
        await this.$store.dispatch("cart/decreaseCartItem" , item.id).then(res =>{
          item.qty = parseInt(item.qty) -1;
          item.subtotal = parseInt(item.subtotal) - parseInt(item.price)
          this.cart.total = this.cart.total - parseInt(item.price)
          this.$Progress.finish()
        })
        .catch( e => {
          this.$Progress.fail()
          console.log(e)
        })
      }
    },
  },
  created() {
    this.getCart();
  },
}
</script>

<style>

</style>

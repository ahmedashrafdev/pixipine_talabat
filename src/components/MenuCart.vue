<template>
  <div
    class="cart bg-white w-84 xl:w-96 shadow border border-grey-500 solid  rounded"
  >
    <div
      class="heading flex ietms-center justify-between border-b border-gray-100 border-solid"
    >
      <span
        class="text-lg p-2 rounded-t text-white w-full h-full capitalize m-0 bg-primary"
        >{{ $t("your_cart") }}</span
      >
    </div>
    <Cart/>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Cart from "@/components/Cart.vue";

export default {
  name: "menuCart",
  components:{
    Loader,
    Cart
  },
  
};
</script>

<style lang="scss" scoped>
.cart {
  height: max-content !important;
}
</style>

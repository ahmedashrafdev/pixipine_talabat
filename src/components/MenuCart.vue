<template>
    <div class="cart bg-white w-84 xl:w-96 shadow border border-grey-500 solid  rounded">
        <div
          class="heading flex ietms-center justify-between border-b border-gray-100 border-solid"
        >

          <span  class="text-lg p-2 rounded-t text-white w-full h-full capitalize m-0 bg-primary">{{$t('your_cart')}}</span>
          
        </div>
        
        <div
          class="items flex justify-between overflow-y-auto p-2 border-b border-gray-100 border-solid">
          <div
            class="counter text-textcolor flex  rounded border border-gray-200 border-solid"
          >
            <div class="minus border-r w-6 text-center cursor-pointer">
              <span class="text-primary">-</span>
            </div>
            <div class="count border-r w-6 text-center cursor-select">
              <span class="text-sm">1</span>
            </div>
            <div class="plus w-6 text-center cursor-pointer">
              <span class="text-primary">+</span>
            </div>
          </div>
          <div class="name text-textcolor font-thin text-sm">
            <span>Cheese pizza</span>
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
        <div
          class="items flex justify-between overflow-y-auto p-2 border-b border-gray-100 border-solid">
          <div
            class="counter text-textcolor flex  rounded border border-gray-200 border-solid"
          >
            <div class="minus border-r w-6 text-center cursor-pointer">
              <span class="text-primary">-</span>
            </div>
            <div class="count border-r w-6 text-center cursor-select">
              <span class="text-sm">1</span>
            </div>
            <div class="plus w-6 text-center cursor-pointer">
              <span class="text-primary">+</span>
            </div>
          </div>
          <div class="name text-textcolor font-thin text-sm">
            <span>Pasta</span>
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
        <div
          class="items flex justify-between overflow-y-auto p-2 border-b border-gray-100 border-solid">
          <div
            class="counter text-textcolor flex  rounded border border-gray-200 border-solid"
          >
            <div class="minus border-r w-6 text-center cursor-pointer">
              <span class="text-primary">-</span>
            </div>
            <div class="count border-r w-6 text-center cursor-select">
              <span class="text-sm">1</span>
            </div>
            <div class="plus w-6 text-center cursor-pointer">
              <span class="text-primary">+</span>
            </div>
          </div>
          <div class="name text-textcolor font-thin text-sm">
            <span>Alfredo</span>
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
        <div class="data flex p-3 pb-2 mb-2 pt-1 text-center text-white">
          <router-link to="/checkout" class="bg-secondary  px-3 hover:bg-green-700 w-full p-1 rounded">{{$t('checkout')}}</router-link>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cart{
     height : max-content !important;
}
</style>


<template>
    <div class="flex">
        <div class="px-4 w-full ">
            <h1 class="text-2x1">(303) {{$t('reviews')}}</h1>
            <ul class="lg:grid-cols-4  grid grid-cols-1 gap-4   sm:grid-cols-2 reviews-list pt-4">
                <li class="flex-1 border border-gray-300 solid lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r py-5 px-16  text-centerflex flex-col items-center justify-center text-center">
                    <img src="https://www.talabat.com/images/talabat/rating-4.svg" alt="" srcset="" class="mx-auto w-24">
                    <span class="mt-3">{{$t('taste')}}</span>
                </li>
                <li class=" w-full border border-gray-300 solid lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r flex-1 py-5 px-16  text-centerflex flex-col items-center justify-center text-center">
                    <img src="https://www.talabat.com/images/talabat/rating-3.svg" alt="" srcset="" class="mx-auto w-24">
                    <span class="mt-3">{{$t('Value_for_money')}}</span>
                </li>
                <li class=" w-full border border-gray-300 solid lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r flex-1 py-5 px-16  text-centerflex flex-col items-center justify-center text-center">
                    <img src="https://www.talabat.com/images/talabat/rating-2.svg" alt="" srcset="" class="mx-auto w-24">
                    <span class="mt-3">{{$t('delivery_time')}}</span>
                </li>
                <li class=" w-full border border-gray-300 solid lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r-0 flex-1 py-5 px-16 text-center" >
                    <img src="https://www.talabat.com/images/talabat/rating-3.svg" alt="" srcset="" class="mx-auto w-24">
                    <span>{{$t('service')}}</span>
                </li>
            </ul>
            <ul class="reviews-contet">
                <li class="bg-gray-100 border mt-4 border-gray-300 w-full p-4">
                    <div class="flex justify-between">
                        <ul class="flex justify-between w-full">
                            <div class="left flex">
                                <li class="mr-4"><img src="https://www.talabat.com/images/talabat/rating-4.svg" alt="" srcset="" class="w-24"></li>
                                <li class="text-sm text-textcolor"><span>Ahmed ashraf</span></li>
                            </div>
                            <div class="right">
                                <div class="dat text-gray-700 text-sm">
                                    27 March 2020
                                </div>
                            </div>
                        </ul>
                    </div>   
                    <div class="content">
                        <p class="tex-textcolor">شي ممتاز موفقين خير ❤️..خ اموووووووت فيججججج🤦🏻‍♀️💛</p>
                    </div>
                </li>
                <li class="bg-gray-100 border mt-4 border-gray-300 w-full p-4">
                    <div class="flex justify-between">
                        <ul class="flex justify-between w-full">
                            <div class="left flex">
                                <li class="mr-4"><img src="https://www.talabat.com/images/talabat/rating-4.svg" alt="" srcset="" class="w-24"></li>
                                <li class="text-sm text-textcolor"><span>Ahmed ashraf</span></li>
                            </div>
                            <div class="right">
                                <div class="dat text-gray-700 text-sm">
                                    27 March 2020
                                </div>
                            </div>
                        </ul>
                    </div>   
                    <div class="content">
                        <p class="tex-textcolor">شي ممتاز موفقين خير ❤️..خ اموووووووت فيججججج🤦🏻‍♀️💛</p>
                    </div>
                </li>
                <li class="bg-gray-100 border mt-4 border-gray-300 w-full p-4">
                    <div class="flex justify-between">
                        <ul class="flex justify-between w-full">
                            <div class="left flex">
                                <li class="mr-4"><img src="https://www.talabat.com/images/talabat/rating-4.svg" alt="" srcset="" class="w-24"></li>
                                <li class="text-sm text-textcolor"><span>Ahmed ashraf</span></li>
                            </div>
                            <div class="right">
                                <div class="dat text-gray-700 text-sm">
                                    27 March 2020
                                </div>
                            </div>
                        </ul>
                    </div>   
                    <div class="content">
                        <p class="tex-textcolor">شي ممتاز موفقين خير ❤️..خ اموووووووت فيججججج🤦🏻‍♀️💛</p>
                    </div>
                </li>
                <li class="bg-gray-100 border mt-4 border-gray-300 w-full p-4">
                    <div class="flex justify-between">
                        <ul class="flex justify-between w-full">
                            <div class="left flex">
                                <li class="mr-4"><img src="https://www.talabat.com/images/talabat/rating-4.svg" alt="" srcset="" class="w-24"></li>
                                <li class="text-sm text-textcolor"><span>Ahmed ashraf</span></li>
                            </div>
                            <div class="right">
                                <div class="dat text-gray-700 text-sm">
                                    27 March 2020
                                </div>
                            </div>
                        </ul>
                    </div>   
                    <div class="content">
                        <p class="tex-textcolor">شي ممتاز موفقين خير ❤️..خ اموووووووت فيججججج🤦🏻‍♀️💛</p>
                    </div>
                </li>
                
            </ul>
            <a href="#" class="block mt-4 bg-gray-100 border border-gray-300 rounded text-center p-3 w-full">{{$t('load_more')}}</a>
        </div>
        <menu-cart class="hidden lg:block"/>
    </div>
</template>

<script>
import MenuCart from "@/components/MenuCart.vue";

export default {
  name: "reviews",
  components: {
    "menu-cart": MenuCart,
  },
  methods: {
    async getReviews(){
    await this.$store.dispatch('review/getReviews')
    }
  },
  computed: {
    reviews() {
      return this.$store.getters["review/reviews"];
    },
    reviewsLoading() {
      return this.$store.getters["review/menuLoading"];
    },
  },
  created(){
    this.getReviews()
  }
}
</script>

<style lang="scss" scoped>
.reviews-list{
    .reviews-list{
    & > li:not(:last-child){
        @apply border-r border-gray-300
    }
}
}

</style>

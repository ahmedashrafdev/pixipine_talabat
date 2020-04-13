<template>
<div>
  <div  class="home bg-auto bg-center bg-no-repeat flex-col bg-cover min-h-screen flex items-center justify-center" style='background: rgb(0, 0, 0) url("https://images.deliveryhero.io/image/talabat/homeBanners/homepagemain-banner_n_636365819337036680.jpg") no-repeat scroll center top;'>
    <div class="location">
      <div class="heading">
        <h1 class="text-white text-heading text-center">
          {{$t('home_header')}}
        </h1>
      </div>
      <div class="input mt-12 bg banner-input">
        <h5 class="heading text-white text-md mt-1 mb-2" >{{$t('select_location')}}</h5>
        <div class="md:flex block">
          <div class="flex-1   md:mr-4 mr-0 md:mb-0 mb-4 relative">
            <font-awesome-icon
                class="text-secondary absolute top-1/2 left-1  hover:text-primary"
                size="lg"
                icon="map-marker-alt"
              ></font-awesome-icon
            >
            <input type="text" :placeholder="$t('location_placeholder')" class="w-full pl-12 block placeholder-black p-3 rounded-md"/>
          </div>
          <a href="#" class="bg-primary md:w-32 w-full justify-center text-white text-center p-3 block rounded-md">{{$t('continue')}}</a>
        </div>
      </div>
      <div class="icons flex m-t-4 items-center justify-center">
        <img src="https://www.talabat.com/images/talabat/payment-icons-kuwait1.svg" alt="Payment Icons Kuwait" class="ng-scope h-5">
      </div>
    
      
    </div>
   
  </div>
   <!-- <div class="w-full bg-white absolute bottom-0 h-24">
     <div class="flex items-center justify-center w-full h-full">
       <h1>content</h1>
       <h1>content</h1>
       <h1>content</h1>
     </div>
    </div> -->
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  
}

</script>
<style lang="scss" scoped>
#home{
  min-height: 100vh;
  overflow: hidden;
}
.home{
  &.location{

    &.input{
      .flex{
        @media (min-width: 768px) {
          
        }
      }

    }

  }

}
</style>


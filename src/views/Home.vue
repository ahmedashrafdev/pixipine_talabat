<template>
  <div>
    <!-- <div
      class="home bg-auto bg-center bg-no-repeat flex-col bg-cover min-h-screen flex items-center justify-center"
      style='background: rgb(0, 0, 0) url("https://images.deliveryhero.io/image/talabat/homeBanners/homepagemain-banner_n_636365819337036680.jpg") no-repeat scroll center top;'
    >
      <div class="location">
        
        <div class="heading">
          <h1 class="text-white text-heading text-center">
            {{ $t("home_header") }}
          </h1>
        </div>
        <div class="input mt-12 bg banner-input">
          <h5 class="heading text-white text-md mt-1 mb-2">
            {{ $t("select_location") }}
          </h5>
          <div class="md:flex block">
            <div class="flex-1   md:mr-4 ml-0 mr-0 md:mb-0 mb-4 relative">
              <font-awesome-icon
                class="text-secondary absolute translate-y-m50 top-1/2 left-1  hover:text-primary"
                size="lg"
                icon="map-marker-alt"
              ></font-awesome-icon>
              <input
                type="text"
                :placeholder="$t('location_placeholder')"
                class="w-full pl-12 block placeholder-black p-3 rounded-md"
              />
            </div>
            <router-link
              to="/menu"
              class="bg-primary md:w-32 w-full justify-center text-white text-center p-3 block rounded-md"
              >{{ $t("continue") }}</router-link
            >
          </div>
        </div>
        <div class="icons flex m-t-4 items-center justify-center">
          <img
            src="https://www.talabat.com/images/talabat/payment-icons-kuwait1.svg"
            alt="Payment Icons Kuwait"
            class="ng-scope h-5"
          />
        </div>
      </div>
    </div> -->
    <div class="pt-32">

  <p>
    Let us locate you for better results...
    <button @click="locateMe">Get location</button>
  </p>
  
  <div v-if="errorStr">
    Sorry, but the following error
    occurred: {{errorStr}}
  </div>
  
  <div v-if="gettingLocation">
    <i>Getting your location...</i>
  </div>
  
  <div v-if="location">
    Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}
  </div>
  
</div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data(){
    return {
      location:null,
      gettingLocation: false,
      errorStr:null

    }
  },
  methods: {
    async getLocation() {
      
      return new Promise((resolve, reject) => {

        if(!("geolocation" in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }

        navigator.geolocation.getCurrentPosition(pos => {
          resolve(pos);
        }, err => {
          reject(err);
        });

      });
    },
    async locateMe() {

      this.gettingLocation = true;
      try {
        this.gettingLocation = false;
        this.location = await this.getLocation();
      } catch(e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
      
    }
  }
};
</script>
<style lang="scss" scoped>
#home {
  min-height: 100vh;
  overflow: hidden;
}
.home {
  &.location {
    &.input {
      .flex {
        @media (min-width: 768px) {
        }
      }
    }
  }
}
</style>

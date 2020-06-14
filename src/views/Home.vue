<template>
  <div>
    <div
      class="home bg-auto bg-center bg-no-repeat flex-col bg-cover min-h-screen flex items-center justify-center"
      style='background: rgb(0, 0, 0) url("https://images.deliveryhero.io/image/talabat/homeBanners/homepagemain-banner_n_636365819337036680.jpg") no-repeat scroll center top;'
    >
      <div class="location">
        <div class="container">
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
            <div class="flex-1 find-place  md:mr-4 ml-0 mr-0 md:mb-0 mb-4 relative">
              <places
                ref="input"
                v-model="form.country.label"
                class="w-full pl-2 block placeholder-black p-3 rounded-md"
                :placeholder="$t('location_placeholder')"
                type="address"
              >
              </places>
            </div>
            <a
              @click.prevent="saveAddress()"
              class="bg-primary md:w-32 w-full justify-center text-white text-center p-3 block rounded-md"
              >{{ $t("continue") }}</a
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
        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Places from "vue-places";

export default {
  name: "Home",
  data() {
    return {
      form: {
        country: {
          label: null,
          data: {},
        },
      },
      gettingLocation: false,
      errorStr: null,
      latitude:null,
      longitude:null,
      focused:false,
    };
  },
  mounted() {
    this.$refs.input.$el.addEventListener("focus", (e) => {
      this.onFocus(e);
    });
  },
  components: {
    Places,
  },
  methods: {
    onFocus(e) { 
      if(!this.focused){
        if (!("geolocation" in navigator)) {
        this.errorStr = "Geolocation is not available.";
        return;
      }
      if (this.latitude !== null && this.longitude !== null) {
        this.errorStr = "Geolocation is already stored.";

        return 
      }
      this.gettingLocation = true;
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.latitude = pos.coords.latitude
          this.longitude = pos.coords.longitude
          this.gettingLocation = false;
          let api_url = `https://api.opencagedata.com/geocode/v1/json?q=${pos.coords.latitude}+${pos.coords.longitude}&key=0f2c1c37ed2f4a16906cbd30a90f1b49`
          this.$http.get(api_url).then(response => {
            let res = response.data.results[0].components
            let jsonAddress = JSON.stringify({
                city: res.city,
                building: res.house_number,
                state: res.neighbourhood,
                postal: res.postcode,
                street: res.road,
                suburb: res.suburb,
              })
            localStorage.setItem('address' , jsonAddress)
            this.$store.dispatch('ui/showFlashMsg', { "msg" : 'address_stored' , duration: 3000 , type : "success" })
             this.$router.push('/menu')
          })
      this.focused = true;
        })
    }},
    saveAddress() {
      // LocalStorage.setItem('address' ,)
      let address = this.form.country.data;
      console.log(address.name)
      // console.log(
      //   JSON.stringify({
      //     building: address.name,
      //     postal: address.postcode,
      //     state: address.suburb,
      //     title: this.form.country.label,
      //   })
      // );
    },
  },
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

<template>
  <div class="about">
    <div class="container bg-white shadow-card min-h-screen">
      <Breadcrumbs />
      <div class="w-full p-4">
        <div class="order-summary">
          <div
            class="mb-2 border-solid border-gray-200 rounded border shadow-sm"
          >
            <div
              class="bg-gray-100 flex justify-between px-2 py-3 border-solid border-gray-200 border-b"
            >
              <span class="capitalize text-black text-center">Order summary</span>
              <router-link
                to="/menu"
                class="capitalize text-secondary text-right"
                >Modify order</router-link
              >
            </div>
            <div class="p-3">
              <table class="min-w-full bg-white table-auto">
                <thead class="bg-gray-100 text-textcolor w-full">
                  <tr>
                    <th
                      class="text-tiny  text-center py-3 px-0 xs:px-2 sm:px-4 uppercase font-semibold sm:text-sm"
                    >
                      Item(s)
                    </th>
                    <th
                      class="text-tiny  text-center py-3 hidden md:block px-0 xs:px-2 sm:px-4 uppercase font-semibold sm:text-sm"
                    >
                      special reqests
                    </th>
                    <th
                      class="text-tiny  text-center py-3 px-0 xs:px-2 sm:px-4 uppercase font-semibold sm:text-sm"
                    >
                      qty
                    </th>
                    <th
                      class="text-tiny  text-center py-3 px-0 xs:px-2 sm:px-4 uppercase font-semibold sm:text-sm"
                    >
                      price
                    </th>
                    <th
                      class="text-tiny  text-center py-3 px-0 xs:px-2 sm:px-4 uppercase font-semibold sm:text-sm"
                    >
                      total
                    </th>
                  </tr>
                </thead>
                <tbody class="text-gray-700 text-sm lg:text-base">
                  <tr class="hover:bg-gray-100">
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">
                      <span class="text-sm lg:text-base block">Alfredo Extra Mushroom</span>
                      <span class=" cursor-pointer text-gray-600 hover:text-primary duration-300 hover:translate-x-1 underline text-tiny sm:text-sm lg:text-base block sm:hidden text-sm lg:text-base">Add special request</span>
                      <div class="block special-request-input md:hidden w-full text-sm relative">
                        <input class=" w-full p-1 border border-gray-300 text-sm lg:text-base rounded bg-white placeholder-black" type="text" placeholder="request">
                        <font-awesome-icon
                          class="hover:text-primary text-red-1000 cursor-pointer absolute right-2 top-1/2 translate-y-m50"
                          size="lg"
                          icon="times-circle">
                        </font-awesome-icon>
                      </div>

                    </td>
                    
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4 hidden md:block">
                      <span class="cursor-pointer block">Add special request</span>
                      <div class="block w-full text-sm relative special-request-input" >
                        <input class="w-full p-1 border border-gray-300 rounded bg-white placeholder-black " type="text" placeholder="request">
                        <font-awesome-icon
                          class="hover:text-primary text-red-1000 cursor-pointer absolute right-2 top-1/2 translate-y-m50"
                          size="lg"
                          icon="times-circle">
                        </font-awesome-icon>
                      </div>
                    
                    </td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">1</td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">KD127.00</td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">KD127.00</td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">
                      <span class="text-sm lg:text-base block">Alfredo Extra Mushroom</span>
                      <span class=" cursor-pointer text-gray-600 hover:text-primary duration-300 hover:translate-y-m50  underline text-tiny sm:text-sm lg:text-base block sm:hidden text-sm lg:text-base">Add special request</span>
                      <div class="block special-request-input md:hidden w-full text-sm relative">
                        <input class=" w-full p-1 border border-gray-300 text-sm lg:text-base rounded bg-white placeholder-black" type="text" placeholder="request">
                        <font-awesome-icon
                          class="hover:text-primary text-red-1000 cursor-pointer absolute right-2 top-1/2 translate-y-m50"
                          size="lg"
                          icon="times-circle">
                        </font-awesome-icon>
                      </div>

                    </td>
                    
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4 hidden md:block">
                      <span class="cursor-pointer block">Add special request</span>
                      <div class="block w-full text-sm relative special-request-input" >
                        <input class="w-full p-1 border border-gray-300 rounded bg-white placeholder-black " type="text" placeholder="request">
                        <font-awesome-icon
                          class="hover:text-primary text-red-1000 cursor-pointer absolute right-2 top-1/2 translate-y-m50"
                          size="lg"
                          icon="times-circle">
                        </font-awesome-icon>
                      </div>
                    
                    </td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">1</td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">KD127.00</td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">KD127.00</td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">
                      <span class="text-sm lg:text-base block">Alfredo Extra Mushroom</span>
                      <span class=" cursor-pointer text-gray-600 hover:text-primary duration-300 hover:translate-x-1 underline text-tiny sm:text-sm lg:text-base block sm:hidden text-sm lg:text-base">Add special request</span>
                      <div class="block special-request-input md:hidden w-full text-sm relative">
                        <input class=" w-full p-1 border border-gray-300 text-sm lg:text-base rounded bg-white placeholder-black" type="text" placeholder="request">
                        <font-awesome-icon
                          class="hover:text-primary text-red-1000 cursor-pointer absolute right-2 top-1/2 translate-y-m50"
                          size="lg"
                          icon="times-circle">
                        </font-awesome-icon>
                      </div>

                    </td>
                    
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4 hidden md:block">
                      <span class="cursor-pointer block">Add special request</span>
                      <div class="block w-full text-sm relative special-request-input" >
                        <input class="w-full p-1 border border-gray-300 rounded bg-white placeholder-black " type="text" placeholder="request">
                        <font-awesome-icon
                          class="hover:text-primary text-red-1000 cursor-pointer absolute right-2 top-1/2 translate-y-m50"
                          size="lg"
                          icon="times-circle">
                        </font-awesome-icon>
                      </div>
                    
                    </td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">1</td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">KD127.00</td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">KD127.00</td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">
                      <span class="text-sm lg:text-base block">Alfredo Extra Mushroom</span>
                      <span class=" cursor-pointer text-gray-600 hover:text-primary duration-300 hover:translate-x-1 underline text-tiny sm:text-sm lg:text-base block sm:hidden text-sm lg:text-base">Add special request</span>
                      <div class="block special-request-input md:hidden w-full text-sm relative">
                        <input class=" w-full p-1 border border-gray-300 text-sm lg:text-base rounded bg-white placeholder-black" type="text" placeholder="request">
                        <font-awesome-icon
                          class="hover:text-primary text-red-1000 cursor-pointer absolute right-2 top-1/2 translate-y-m50"
                          size="lg"
                          icon="times-circle">
                        </font-awesome-icon>
                      </div>

                    </td>
                    
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4 hidden md:block">
                      <span class="cursor-pointer block">Add special request</span>
                      <div class="block w-full text-sm relative special-request-input" >
                        <input class="w-full p-1 border border-gray-300 rounded bg-white placeholder-black " type="text" placeholder="request">
                        <font-awesome-icon
                          class="hover:text-primary text-red-1000 cursor-pointer absolute right-2 top-1/2 translate-y-m50"
                          size="lg"
                          icon="times-circle">
                        </font-awesome-icon>
                      </div>
                    
                    </td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">1</td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">KD127.00</td>
                    <td class="text-center py-3 px-1 sm:px-2 md:px-4">KD127.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="address mt-8">
          <div
            class="mb-2 border-solid border-gray-200 rounded border shadow-sm"
          >
            <div
              class="bg-gray-100 flex justify-between capitalize text-black px-2 py-3 border-solid border-gray-200 border-b"
            >
              <span class="capitalize text-black text-center"
                >deleviry address</span
              >
              <div>
                <a class="uppercase text-secondary text-right mr-4">edit</a>
                <a class="uppercase text-secondary text-right">add</a>
              </div>
            </div>
            <div class="p-3">
              <ul>
                <li class="p-2 text-sm text-textcolor">
                  <span class="text-black capitalize tracking-wide"
                    >address name:</span
                  >Building No. 22
                </li>
                <li class="p-2 text-sm text-textcolor">
                  <span class="text-black capitalize tracking-wide"
                    >address:</span
                  >Al-Ahmadi, 124, 4th Avenue, a, 22, 12,3
                </li>
                <li class="p-2 text-sm text-textcolor">
                  <span class="text-black capitalize tracking-wide"
                    >mobile:</span
                  >+965 51728372
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="payment-summary mt-8">
          <div
            class="mb-2 border-solid border-gray-200 rounded border shadow-sm"
          >
            <div
              class="bg-gray-100 capitalize text-black px-2 py-3 border-solid border-gray-200 border-b"
            >
              delivery time
            </div>
            <div class="p-3 flex flex-wrap justify-between">
              <div class="w-full select-time">
                <div class="mx-auto max-w-sm  flex flex-wrap">
                  <div class="flex items-center mr-4 mb-4">
                    <input
                      id="radio1"
                      type="radio"
                      name="radio"
                      v-model="selected"
                      value="now"
                      class="hidden"
                      checked
                    />
                    <label
                      for="radio1"
                      class="flex items-center capitalize cursor-pointer"
                    >
                      <span
                        class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"
                      ></span>
                      Now</label
                    >
                  </div>
                  <div class="flex items-center mr-4 mb-4">
                    <input
                      id="radio2"
                      name="radio"
                      type="radio"
                      v-model="selected"
                      value="later"
                      class="hidden"
                    />
                    <label
                      for="radio2"
                      class="flex items-center capitalize cursor-pointer "
                    >
                      <span
                        class="w-4 h-4  inline-block mr-1 rounded-full border border-grey"
                      ></span>
                      pre-order for later</label
                    >
                  </div>
                </div>
                <datetime
                  v-if="selected == 'later'"
                  class="ml-3"
                  type="datetime"
                  v-model="datetime"
                ></datetime>
              </div>
              <div class="request w-full md:w-1/2 overflow-hidden">
                <span @click="toggleInput" class="text-sm cursor-pointer mb-3"
                  ><font-awesome-icon
                    class="text-primary mr-2 "
                    size="sm"
                    icon="chevron-up"
                  ></font-awesome-icon
                  >Add special request</span
                >
                <div class="overflow-hidden">
                  <textarea
                    ref="requestTextarea"
                    v-model="specialRequest"
                    placeholder="add a special request"
                    class="add-request-textarea bg-white active transition-all  mt-2 p-4  text-gray-500 rounded border border-gray-500 w-full"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="payment-summary mt-8">
          <div
            class="mb-2 border-solid border-gray-200 rounded border shadow-sm"
          >
            <div
              class="bg-gray-100 capitalize text-black px-2 py-3 border-solid border-gray-200 border-b"
            >
              Payment Summary
            </div>
            <div class="p-3">
              <div
                class=" px-2 border-solid border-gray-200 border-b flex flex-wrap  items-center"
              >
                <input
                  type="text"
                  placeholder="voucher code"
                  class="border-b pb-1 mr-3 my-10 solid border-gray-200 text-gray-600 "
                />
                <a
                  hreef="#"
                  class="rounded border solid border-secondary mb-2 bg-white cursor-pointer text-secondary ippercase h-min p-4 flex justify-center items-center h-8"
                  >redeem</a
                >
              </div>
              <div class="flex flex-wrap md:flex-no-wrap justify-between py-6">
                <div class="w-full md:w-2/3 md:mr-3 transition">
                  <h3 class="text-black text-sm font-bold mb-3">
                    Select your payment method
                  </h3>
                  <div class="overflow-hidden">
                    <div
                      @click="toggleCardMenu" class="w-full  cursor-pointer border mb-4 solid border-gray-400 bg-gray-200 p-4 flex"
                    >
                      <input type="checkbox" class="mr-3 rounded-full" />
                      <img
                        src="https://www.talabat.com/images/talabat/checkout-cc.svg"
                        class=" h-4 mr-3"
                        alt=""
                      />
                      <span class="capitalize text textcolor text-sm "
                        >Credit Card</span
                      >
                    </div>
                    <card-form/>
                  </div>
                  <div>
                    <div
                      class="w-full cursor-pointer border mb-4 solid flex border-gray-400 bg-gray-200 p-4"
                    >
                      <input type="checkbox" class="mr-3 rounded-full" />
                      <img
                        src="https://www.talabat.com/images/talabat/knet_logo_n.gif"
                        class=" h-4 mr-3"
                        alt=""
                      />
                      <span class="capitalize text textcolor text-sm "
                        >K-Net</span
                      >
                    </div>
                  </div>
                  <div>
                    <div
                      class="w-full cursor-pointer border mb-4 solid flex border-gray-400 bg-gray-200 p-4"
                    >
                      <input type="checkbox" class="mr-3 rounded-full" />
                      <img
                        src="https://www.talabat.com//images/talabat/cash-icon.svg"
                        class=" h-4 mr-3"
                        alt=""
                      />
                      <span class="capitalize text textcolor text-sm "
                        >cash on delivery</span
                      >
                    </div>
                  </div>
                </div>
                <div class="md:w-auto w-full">
                  <table class="w-full">
                    <tbody>
                      <tr class="flex w-full  md:w-56  justify-between text-gray-700 tex-sm py-2">
                        <td class="capitalize text-sm">Subtotal</td>
                        <td class="uppercase">KD 4.000</td>
                      </tr>
                      <tr class="flex w-full md:w-56 justify-between text-gray-700 tex-sm py-2">
                        <td class="capitalize text-sm">deliver charges</td>
                        <td class="uppercase">KD 0.500</td>
                      </tr>
                      <tr class="flex w-full md:w-56 justify-between border-b solid border-gray-200 text-black tex-sm py-2">
                        <td class="capitalize text-sm">total amount</td>
                        <td class="uppercase">KD 4.500</td>
                      </tr>
                      <tr class="flex w-full md:w-56 justify-between  text-gray-700 tex-sm py-2">
                        <td class="capitalize text-sm">pay by credit card</td>
                        <td class="uppercase">KD 4.500</td>
                      </tr>
                      <tr class="flex w-full md:w-56 justify-between  text-gray-700 tex-sm py-2">
                       <a href="#" class="block p-3 mt-2 bg-secondary text-white uppercase text-sm w-full rounded text-center ">place order</a>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Menu from "@/components/Menu.vue";
import Reviews from "@/components/Reviews.vue";
import CardForm from "@/components/CardForm.vue";
import { Datetime } from "vue-datetime";
export default {
  name: "checkout",
  data() {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    return {
      selected: "now",
      specialRequest: "",
      datetime: dateTime,
    };
  },
  components: {
    Breadcrumbs,
    Menu,
    Reviews,
    "datetime": Datetime,
    "card-form": CardForm
  },
  
  methods: {
    toggleInput() {
      let input = this.$refs.requestTextarea;
      input.classList.toggle("active");
    },
    toggleCardMenu(){
      let menu = document.querySelector('.card-form')
      menu.classList.toggle('inactive')
    }
  }
  
};
</script>
<style lang="scss" scoped>
.add-request-textarea {
  visibility: hidden;
  height: 0;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.5s ease-in;
  &.active {
    height: 100%;

    visibility: visible;
    transform: translateY(0);

    opacity: 1;
  }
}

</style>

<template>
  <Modal name="modal-options" height='auto' :width="800">
    <div v-if="showModal">
      <div class="modal-content" v-if="!itemLoading">
        <div
          class="header heading cursor-pointer menu-item-heading bg-gray-200 text-blace p-3 flex justify-between w-full"
        >
          <div class="title text-2xl capitalize">
            {{ $t("add_item_choices") }}
          </div>
          <div class="icon flex items-center" @click.prevent="close()">
            <img
              data-v-7bbf5763=""
              src="/img/close.12a3ac6d.svg"
              alt="Cart"
              width="12"
              height="30"
              class="ml-4"
            />
          </div>
        </div>
        <div
          class="items flex justify-between overflow-y-auto p-2 border-b border-gray-100 border-solid"
        >
          <div class="name text-textcolor w-96">
            <span v-if="!rtl">{{ item.item.name }}</span>
            <span v-if="rtl">{{ item.item.name_ar }}</span>
          </div>
          <div
            class="counter text-textcolor flex items-center  rounded border border-gray-200 border-solid"
          >
            <div class="minus border-r w-6 text-center cursor-pointer">
              <span class="text-primary">-</span>
            </div>
            <div class="count border-r w-6 text-center cursor-select">
              <span class="text-sm">{{ 1 }}</span>
            </div>
            <div
              class="plus w-6 text-center cursor-pointer"
              @click.prevent="setCartItem(item.item)"
            >
              <span class="text-primary">+</span>
            </div>
          </div>

          <div class="price text-textcolor">
            <span>
              <span class="font-bold mr-1">
                {{ $t("price:") }}
              </span>
              KD{{ item.item.price }}</span
            >
          </div>
        </div>
        <ul class="items">
          <Accordion
            v-for="(item, index) in item.data"
            :key="index + 100"
            :name="item.group.group_name"
            :active="true"
            :namear="item.group.group_name_ar"
            :id="item.group.id"
          >
            <div class="form w-full p-3 flex flex-wrap">
              <Radio
                class="mr-12"
                v-for="(option, index) in item.options"
                :key="index + 300"
              />
            </div>
          </Accordion>
        </ul>

        <div class="btn w-full p-4 mt-3 flex justify-center">
          <a
            href="/checkout"
            class="bg-secondary  hover:bg-green-700 flex items-center rounded text-white text-lg font-bold uppercase py-3 px-12"
          >
            <div class="w-8 mr-3">
              <img
                src="https://www.talabat.com/images/talabat/empty-cart.svg"
                alt=""
                srcset=""
              />
            </div>
            {{ $t("add_to_cart") }}
          </a>
        </div>
      </div>
      <div v-else>
        loading
      </div>
    </div>
  </Modal>
</template>

<script>
import Form from "@/classes/Form";
import TextField from "@/components/inputs/TextField.vue";
import Radio from "@/components/inputs/Radio.vue";
import Accordion from "@/components/Accordion.vue";
import Modal from "./Modal.vue";
export default {
  data() {
    return {
      form: new Form({
        email: "ahmed@ahmed.com",
        password: "123456",
      }),
      emailValidation: [
        { message: "required", regex: /[^()]/ },
        {
          message: "invalid_email",
          regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
      ],
      passwordValidation: [
        { message: "required", regex: /[^()]/ },
        { message: "min_6", regex: /.{6,}/ },
      ],
    };
  },
  components: {
    "text-field": TextField,
    Radio,
    Accordion,
    Modal,
  },
  computed: {
    rtl() {
      return this.$store.getters["ui/rtl"];
    },
    item() {
      return this.$store.getters["cart/item"];
    },
    itemLoading() {
      return this.$store.getters["cart/itemLoading"];
    },
    showModal() {
      return this.$store.getters["ui/showModal"];
    },
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch("user/login", this.form).then(async () => {
        await this.$store.dispatch("ui/showFlashMsg", {
          msg: "login_successed",
          duration: 3000,
          type: "success",
        });
        this.hide();
        this.$router.push("/menu");
      });
    },
  },
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

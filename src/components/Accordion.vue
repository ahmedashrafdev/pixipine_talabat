<template>
  <div class="menu-item-heading">
    <li class="w-full overflow-hidden">
      <div
        @click.prevent="openMenuItem"
        class="heading cursor-pointer menu-item-heading flex justify-between bg-gray-200 text-blace mt-3 p-3"
      >
        <span v-if="!rtl">{{ name }}</span>
        <span v-if="rtl">{{ name_ar }}</span>

        <font-awesome-icon
          class="hover:text-primary"
          size="lg"
          @click.prevent="openMenuItem"
          :icon="icon"
        ></font-awesome-icon>
      </div>
      <div class="overflow-hidden mt-3">
        <ul  :class="active ? 'category-items dropdown lg:text-lg md:text-md text-xs active' : 'category-items dropdown lg:text-lg md:text-md text-xs '">
          <slot />
        </ul>
      </div>
    </li>
  </div>
</template>

<script>
import MenuCart from "@/components/MenuCart.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "accordion",
  data() {
    return {
      icon:"chevron-down",
    }
  },
  components: {
    Loader,
  },
  props: ["name", "namear", "id" , "active"],
  computed: {
    rtl() {
      return this.$store.getters["ui/rtl"];
    },
  },
  methods: {
    openMenuItem(e) {
      let element = e.target.parentElement;
      let menu = element.lastChild.firstChild;
      console.log(menu);
      menu.classList.toggle("active");
      this.icon = this.icon == 'chevron-down' ? 'chevron-up' : 'chevron-down';
      
    },
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

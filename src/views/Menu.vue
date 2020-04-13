<template>
  <div class="menu">
    <div class="container bg-white shadow-card min-h-screen">
      <Breadcrumbs />
      <div
        class="w-full tabs p-4 py-12 flex  items-center justify-center border-b border-gray-100 border-solid"
      >
        <div
          @click="switchTab('tab1')"
          class="tab tab1 border-b active pb-4  flex-1 text-center"
        >
          <font-awesome-icon size="2x" icon="pizza-slice"></font-awesome-icon>
        </div>
        <div
          @click="switchTab('tab2')"
          class="tab2 tab border-b pb-4  flex-1 text-center"
        >
          <font-awesome-icon size="2x" icon="comments"></font-awesome-icon>
        </div>
        
      </div>

      <div class="w-full overflow-hidden h-auto flex">
        <div class="tab1 active content min-w-full">
          <Menu/>
        </div>
        <div class="tab2 content min-w-full px-3">
          <Reviews/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Menu from "@/components/Menu.vue";
import Reviews from "@/components/Reviews.vue"
export default {
  name: "breadcrumbs",
  components: {
    Breadcrumbs,
    Menu,
    Reviews,
  },
  methods: {
    switchTab(tab) {
      let elem = document.querySelector(`.${tab}`);
      let elemContent = document.querySelector(`.${tab}.content`);
      let contentSiblings = elemContent.parentElement.childNodes;
      let siblings = elem.parentElement.childNodes;
      siblings.forEach((sibling) => {
        sibling.classList.remove("active");
      });
      contentSiblings.forEach((sibling) => {
        sibling.classList.remove("active");
      });
      elem.classList.add("active");
      elemContent.classList.add("active");
      console.log(elemContent);
    },
  },
};
</script>
<style lang="scss" scoped>
.tab {
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    width: 0;
    transition: all 0.3s ease-in;
    z-index: 100;
  }
  &.active,
  &:hover {
    color: #ff5a00;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      height: 3px;
      left: 0;
      width: 100%;
      background: #ff5a00;
    }
  }
}

.tab1.content {
  visibility:hidden;
  transform: translateX(-100%);
  transition: all 0.5s ease-in;
  opacity: 0;
  &.active {
      visibility:visible;
    transform: translate(0);
    opacity: 1;
  }
}
.tab2.content {
  visibility:hidden;
  transform: translateX(100%);
  transition: all 0.5s ease-in;

  opacity: 0;
    visibility:visible;
  &.active {
    transform: translateX(-100%);
    opacity: 1;
  }
}

</style>

<template> 
 <div class="normal-case tracking-normal ">
    <modal
      :name="name"
      @opened="opened"
      :adaptive="true"
      :height="height"
      :width="width"
    >
    <slot/>
    </modal>
 </div>
</template>

<script>
export default {
    props:['name' , 'height' , 'width'],
  methods: {
    
    opened() {
      let modal = document.querySelector(".v--modal-box.v--modal");
      let value = modal.style.left;
      if (this.rtl) {
        modal.style.left = "auto";
        modal.style.right = value;
        modal.style.textAlign = "right";
      }
    },
  },
};
</script>

<style></style>

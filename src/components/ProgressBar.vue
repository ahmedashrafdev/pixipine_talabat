<template>
    <div class="loading-bar  bg-footerbg" :style="opacity">
      <div class="progress" :style="width"></div>
    </div>
</template>

<script>
export default {
computed: {
    width () {
      return {
        'width': 100 - (100 / (this.$store.getters['total'] / this.$store.getters['pendingCalls'])) + 'vw',
      }
    },
    pendingCalls(){
      return this.$store.getters['pendingCalls']
    },
    opacity () {
      return { 
        'opacity': this.$store.getters['pendingCalls'] === 0 ? '0' : '1',
        'transition-duration': '1s'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.loading-bar {
  left: 0px;
  height: 3px;
  top: 0px;
  position: fixed;
  width: 100vw;
  z-index: 400;
}
.progress {
  transition-duration: 1s;
  // background-color: rgba(0, 188, 212, 0.5);
  position: absolute;
  left: 1px;
  top: 1px;
  height: 4px;
}


</style>

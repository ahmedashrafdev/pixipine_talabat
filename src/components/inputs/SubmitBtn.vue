<template>
  <div class="form-group mb-4">
    <button
      :disabled="isDisabled"
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
    >
      <span v-if="isLoading">loading</span>
      <span v-else>{{ $t(title) }}</span>
    </button>
  </div>
</template>

<script>

export default {
    props:['isDisabled' ,'isLoading' , 'title'],

};
</script>

<style></style>

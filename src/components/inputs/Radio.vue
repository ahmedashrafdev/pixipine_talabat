<template>
  <div class="flex items-center mr-4 mb-4">
    <input :id="`radio${group}`" type="checkbox" :value='value' name="" class="hidden" v-model="group"/>
    <label :for="`radio${group}`" class="flex items-center cursor-pointer">
      <span
        class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"
      ></span>
      {{name}}</label
    >
  </div>
</template>

<script>
export default {
    props:['name' , 'value' , 'group']
};
</script>

<style>
input[type="radio"]  {
    transition: background .2s,
      transform .2s;
}

input[type="radio"],
input[type="radio"] {
  transform: scale(1.2);
} 

input[type="radio"]:checked + label span {
  background-color: #3490DC;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label{
   color: #3490DC; 
}
</style>

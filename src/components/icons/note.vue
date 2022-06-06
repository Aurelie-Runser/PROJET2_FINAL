<template>
  <div class="flex flex-row w-max h-auto p-2 mx-auto rounded-xl bg-gray-300">
    <stars-vue class="flex-none w-5 h-5"/>
    <p class="mx-3 font-arial"><slot/></p>
  </div>
</template>


<script>
import starsVue from "../icons/stars.vue";
  
  export default {
    name: 'ProfilView',
    components: {starsVue},

    data(){
      return{
        
      }
    },
  }
</script>

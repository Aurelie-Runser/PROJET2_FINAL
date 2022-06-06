<template>
    <div class="w-16 mx-auto rounded-xl bg-gray-300 h-8">
   <stars-vue class="relative top-0.5"/>
   
   <slot/>
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

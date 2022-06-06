<template>
<div class="flex flex-col ml-auto mr-auto content-center items-center w-max">
    <img :src=image class="flex"
    alt="image trophée">
    
    <p class="text-gray-500 font-bold text-sm text-center">
     {{txt}}
    </p>
</div>
</template>


<script>
export default {
  name: 'medaillesVue',
   props:{
    image: 
    {type: String},
  txt: 
    {type: String}
  }
}
</script>







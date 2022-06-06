<template>
<div class="flex flex-row ml-1 mb-3 content-center items-center w-max">
    <img :src=image class="w-11"
    alt="image Profile d'amis ">
    
    <p class="text-black ml-2 font-normal text-xs text-center">
     {{txt}}
    </p>
</div>
</template>


<script>
export default {
  name: 'FriendsVue',
   props:{
    image: 
    {type: String},
  txt: 
    {type: String}
  }
}
</script>







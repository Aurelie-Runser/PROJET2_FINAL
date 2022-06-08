<template>
<div class="relative">
  <div class="flex flex-row ml-6 content-center items-center w-max">
      <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-black">
        <img :src=image class="object-cover"
        alt="image Profile d'amis">
      </div>
      
      <p class="text-black ml-2 font-normal text-xl text-center">
      {{txt}}
      </p>
  </div>

  <div class="absolute bottom-0 left-16">
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet">
    <path
      d="M13 6.5C13 10.0899 10.0899 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5Z"
      fill="#049A5B"
    ></path>
  </svg>
  </div>
</div>
</template>


<script>
export default {
  name: 'Friends2Vue',
   props:{
    image: 
    {type: String},
  txt: 
    {type: String}
  }
}
</script>







<template>
<div class="relative">
  <div class="flex flex-row -mt-2 ml-6 mb-3 content-center items-center w-max">
      <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-black">
        <img :src=image class="w-14"
        alt="image Profile d'amis ">
      </div>
      
      <p class="text-black ml-2 font-normal text-xl text-center">
      {{txt}}
      </p>
  </div>

  <div class="absolute bottom-3 left-16">
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-[13px] h-[13px]"
    preserveAspectRatio="none"
  >
    <path
      d="M13 6.5C13 10.0899 10.0899 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5Z"
      fill="#817E7E"
      fill-opacity="0.85"
    ></path>
    <path
      d="M10.5 6.5C10.5 8.70914 8.70914 10.5 6.5 10.5C4.29086 10.5 2.5 8.70914 2.5 6.5C2.5 4.29086 4.29086 2.5 6.5 2.5C8.70914 2.5 10.5 4.29086 10.5 6.5Z"
      fill="white"
    ></path>
  </svg>
  </div>
</div>

</template>


<script>
export default {
  name: 'FriendsAttente',
   props:{
    image: 
    {type: String},
  txt: 
    {type: String}
  }
}
</script>







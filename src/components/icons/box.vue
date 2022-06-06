<template>
  <div
  class="w-28 ml-auto mr-auto justify-center h-[68px] rounded-[15px] bg-[#05be70] "
  style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
>
    <p class="text-center text-3xl mt-2 text-white font-bold">
      {{nbr}}
     </p>
     <p class="text-white font-bold text-xs text-center">
    {{texte}}
    </p>
</div>

</template>

<script>
export default {
  name: 'BoxVue',
  props:{
    nbr: 
    {type: Number},
  texte: 
    {type: String}
  }
}
</script>
<template>
  <div class="py-2 flex flex-row overflow-x-scroll">

        <PetitCarteTerrain class="flex-none"
          nom="Terrain de Basket Châteaudun"
          note="3.8"
          distance="210 m"
          image="public\basket1.jpg"/>

        <PetitCarteTerrain class="flex-none"
          nom="Skatepark  Harley Davidson"
          note="4.7"
          distance="4.3km"
          image="public\basket1.jpg"/>

        <PetitCarteTerrain class="flex-none"
          nom="Skatepark  Harley Davidson"
          note="4.7"
          distance="4.3km"
          image="public\basket1.jpg"/>

  </div>
</template>


<script>
import PetitCarteTerrain from "./PetitCarteTerrain.vue";

export default {
  name: "petitslider",
  components: {  PetitCarteTerrain },
};

</script>


<template>
  <div class="my-5 pl-1 py-5 flex flex-row gap-5 overflow-x-scroll">

        <PetitCarteTerrain class="flex-none scale-110"
          nom="Terrain de Basket Châteaudun"
          note="3.8"
          distance="210 m"
          image="public\basket1.jpg"
        />

        <PetitCarteTerrain class="flex-none scale-110"
          nom="Skatepark  Harley Davidson"
          note="4.7"
          distance="4.3km"
          image="public\basket1.jpg"
        />

        <PetitCarteTerrain class="flex-none scale-110"
          nom="Skatepark  Harley Davidson"
          note="4.7"
          distance="4.3km"
          image="public\basket1.jpg"
        />
  </div>
</template>





<script>
import PetitCarteTerrain from "./PetitCarteTerrain.vue"

export default {
  name: "slider",
  components: { PetitCarteTerrain },
};
</script>


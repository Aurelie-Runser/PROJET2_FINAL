<template>
  <div class="my-5 pl-1 py-5 flex flex-row gap-5 overflow-x-scroll">
    <PetitCarteTerrain
      class="flex-none scale-110"
      nom="Terrain de Tennis Silhouette"
      note="5"
      distance="1.2 km"
      image="public\silhouette.jpg"
    />

    <PetitCarteTerrain
      class="flex-none scale-110"
      nom="Terrain de Basket Châteaudun"
      note="3.8"
      distance="210 m"
      image="public\terrain_chateaudun.jpg"
    />

    <PetitCarteTerrain
      class="flex-none scale-110"
      nom="Stade Mougnot"
      note="4.0"
      distance="10.1 km"
      image="public/images/terrain3.jpg"
    />
  </div>
</template>





<script>
import PetitCarteTerrain from "./PetitCarteTerrain.vue";

export default {
  name: "slider",
  components: { PetitCarteTerrain },
};
</script>


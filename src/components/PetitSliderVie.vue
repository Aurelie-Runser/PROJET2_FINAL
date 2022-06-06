<template>
  <div class="relative rounded-xl overflow-auto">
    <!-- Snap Point -->
    <div class="flex ml-[50%] items-end justify-start mb-6"></div>
    <!-- Contents -->
    <div
      class="
        relative
        w-full
        flex
        gap-1
        snap-x snap-mandatory
        overflow-x-auto
        pb-4
      "
    >
      <div class="snap-center shrink-0">
        <div class="shrink-0 w-4 sm:w-48"></div>
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <petitcart-terrain
          nom="Terrain de Basket Châteaudun"
          note="3.8"
          distance="210 m"
          image="public\basket1.jpg"
        />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <petitcart-terrain
          nom="Skatepark  Harley Davidson"
          note="4.7"
          distance="4.3km"
          image="public\basket1.jpg"
        />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <petitcart-terrain
          nom="Skatepark  Harley Davidson"
          note="4.7"
          distance="4.3km"
          image="public\basket1.jpg"
        />
      </div>
      <div class="snap-center shrink-0">
        <div class="shrink-0 w-4 sm:w-48"></div>
      </div>
    </div>
  </div>
</template>





<script>
export default {
  name: "petitslider",
  components: { carteTerrain, petitcartTerrain },
};

import carteTerrain from "../components/carteTerrain.vue";
import petitcartTerrain from "../components/PetitcarteTerrainView.vue";
</script>


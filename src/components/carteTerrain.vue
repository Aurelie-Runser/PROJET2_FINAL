<template>
  <div
    class="
      w-56
      h-auto
      mx-4
      p-2
      rounded-2xl
      overflow-hidden
      shadow-md shadow-gray-500
      font-normal
    "
  >
    <figure>
      <img
        src="../../public/basket1.jpg"
        alt="Terrain de basket"
        class="w-full h-28 object-cover rounded-2xl"
      />
      <figcaption class="my-3 text-sm">Terrain</figcaption>
      <!-- Ajoutez ici la base donné-->
    </figure>
    <div class="flex justify-between items-center text-lg">
      <div class="flex items-center">
        <fleche class="mx-1 w-5" />
        <p>100 m</p>
        <!--base de donnée-->
      </div>
      <div class="flex items-center">
        <stars class="mx-1 w-5" />
        <p class>3.8</p>
        <!--base de donnée-->
      </div>
      <div>
        <plus />
      </div>
    </div>
  </div>
</template>

<script>
import fleche from "../components/icons/flecheDistance.vue";
import plus from "../components/icons/buttonPlusTerrain.vue";
import stars from "../components/icons/stars.vue";
import Stars from "../components/icons/stars.vue";

export default {
  name: "cartTerrain",
  components: { fleche, stars, plus },

  Starsata() {
    return {};
  },
};
</script>

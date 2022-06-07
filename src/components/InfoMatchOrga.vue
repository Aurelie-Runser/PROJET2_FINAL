<template>
  <div
    class="
      relative
      w-[350px]
      h-max
      p-2
      grid
      grid-cols-[max-content_minmax(auto,auto)]
      gap-5
      rounded-2xl
      overflow-hidden
      font-arial
    "
  >
    <img
      :src="image"
      alt="Terrain de basket"
      class="m-0 w-20 h-28 object-cover object-left rounded-2xl"
    />

    <div class="m-0 flex flex-col gap-3">
      <div>
        <p class="text-xl mt-2 my-1">{{ nom }}</p>
        <p class="text-sm z-50 my-1 text-gray-500">{{ regle }}</p>
        <img :src="sport" alt="logo de ballon de foot" class="w-4 my-1 h-4" />
        <!-- Ajoutez ici la base donné-->
      </div>
    </div>
  </div>
</template>

<script>
import fleche from "./icons/flecheDistance.vue";
import stars from "./icons/stars.vue";
import buttonMoinsTerrain from "./icons/buttonMoinsTerrain.vue";

export default {
  name: "infoMatchOrga",
  components: { fleche, stars, buttonMoinsTerrain },

  props: {
    nom: { type: String },
    sport: { type: String },
    image: { type: String },
    regle: { type: String },
  },
};
</script>
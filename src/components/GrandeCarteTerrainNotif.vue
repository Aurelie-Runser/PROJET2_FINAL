<template>
  <div
    class="
      relative
      w-full
      h-max
      p-2
      grid
      grid-cols-[max-content_minmax(auto,auto)]
      gap-5
      rounded-2xl
      overflow-hidden
      shadow-md shadow-gray-500
      font-arial
      border
    "
  >
    <notif class="absolute -top-2 -right-1" />

    <img
      :src="image"
      alt="Terrain de basket"
      class="m-0 w-28 h-full object-cover rounded-2xl"
    />

    <div class="m-0 flex flex-col gap-3">
      <div>
        <p class="text-base mb-1 mr-12">{{ nom }}</p>
        <p class="text-sm text-gray-500">{{ adresse }}</p>
        <!-- Ajoutez ici la base donné-->
      </div>

      <div class="flex justify-around items-center text-lg">
        <div class="flex items-center gap-1 p-2 bg-gray-200 rounded-xl">
          <stars class="h-5" />
          <p class="text-sm text-gray-600">{{ note }}</p>
          <!--base de donnée-->
        </div>
        <div class="flex items-center gap-1 p-2 bg-gray-200 rounded-xl">
          <fleche class="h-5" />
          <p class="text-sm text-gray-600">{{ distance }}</p>
          <!--base de donnée-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fleche from "./icons/flecheDistance.vue";
import stars from "./icons/stars.vue";
import buttonMoinsTerrain from "./icons/buttonMoinsTerrain.vue";
import notif from "./icons/notif.vue";

export default {
  name: "GrandeCarteTerrainNotif",
  components: { fleche, stars, buttonMoinsTerrain, notif },

  props: {
    nom: { type: String },
    adresse: { type: String },
    image: { type: String },
    distance: { type: String },
    note: { type: String },
  },
};
</script>
<template>
  <div class="fixed -bottom-40 left-0 right-0 w-max mx-auto rounded-2xl overflow-hidden shadow-md shadow-gray-500">
    <div
      class="
        relative
        w-[350px]
        h-max
        p-2
        grid
        grid-cols-[max-content_minmax(auto,auto)]
        gap-5
        bg-white
        font-arial">

      <buttonMoinsTerrain class="absolute top-3 right-3" />

      <img
        :src="image"
        alt="Terrain de basket"
        class="m-0 w-28 h-full object-cover rounded-2xl"
      />

      <div class="m-0 flex flex-col gap-3">
        <div>
          <p class="text-base mb-1 mr-12">{{ nom }}</p>
          <p class="text-sm text-gray-500">{{ adresse }}</p>

        </div>

        <div class="flex justify-around items-center text-lg">
          <div class="flex items-center gap-1 p-2 bg-gray-200 rounded-xl">
            <stars class="h-5" />
            <p class="text-sm text-gray-600">{{ note }}</p>

          </div>
          <div class="flex items-center gap-1 p-2 bg-gray-200 rounded-xl">
            <fleche class="h-5" />
            <p class="text-sm text-gray-600">{{ distance }}</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fleche from "./icons/flecheDistance.vue";
import stars from "./icons/stars.vue";
import buttonMoinsTerrain from "./icons/buttonMoinsTerrain.vue";

export default {
  name: "petitcartTerrain",
  components: { fleche, stars, buttonMoinsTerrain },

  props: {
    nom: { type: String },
    adresse: { type: String },
    image: { type: String },
    distance: { type: String },
    note: { type: String },
  },
};
</script>
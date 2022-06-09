<!--Petite carte terrain utiliser dans les enregistrement pour supprimer et ajouter un terrain dans les favories...-->
<template>
  <div
    class="
      w-48
      h-44
      mx-4
      p-2
      flex flex-col justify-between
      rounded-2xl
      overflow-hidden
      shadow-md shadow-gray-500
      font-normal
    "
  >
    <figure>
      <img
        :src="image"
        alt="Terrain de basket"
        class="w-96 h-20 object-cover rounded-2xl"
      />
      <figcaption class="text-sm my-1">{{ nom }}</figcaption>

    </figure>
    <div class="flex justify-around items-center text-lg">
      <div class="flex items-center">
        <fleche class="w-5" />
        <p class="">{{ distance }}</p>

      </div>
      <div class="flex items-center">
        <stars class="w-5" />
        <p>{{ note }}</p>

      </div>

    </div>
  </div>
</template>

<script>
import fleche from "./icons/flecheDistance.vue";
import plus from "./icons/buttonPlusTerrain.vue";
import stars from "./icons/stars.vue";

export default {
  name: "petitcartTerrain",
  components: { fleche, stars, plus },
  props: {
    nom: { type: String },
    image: { type: String },
    distance: { type: String },
    note: { type: String },
  },
};
</script>



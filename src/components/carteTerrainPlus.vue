<!--Carte de terrain utiliser pour créer un terrain-->
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
        :src="image"
        alt="Terrain de basket"
        class="w-full h-28 object-cover rounded-2xl"/>

      <figcaption class="my-3 text-sm">{{ nom }}</figcaption>
      <!-- Ajoutez ici la base donné-->
    </figure>

    <div class="flex justify-between items-center text-lg">

      <div class="flex items-center">
        <fleche class="mx-1 w-5" />
        <p class="">{{ distance }}</p>
        <!--base de donnée-->
      </div>

      <div class="flex items-center">
        <stars class="mx-1 w-5" />
        <p>{{ note }}</p>
        <!--base de donnée-->
      </div>

      <div>
        <plus/>
      </div>

    </div>
  </div>
</template>

<script>
import fleche from "./icons/flecheDistance.vue";
import plus from "./icons/buttonPlusTerrain.vue";
import stars from "./icons/stars.vue";

export default {
  name: "cartTerrain",
  components: { fleche, stars, plus },
  props: {
    nom: { type: String },
    image: { type: String },
    distance: { type: String },
    note: { type: String },
  },
};
</script>



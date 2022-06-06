<template>
  <div
    class="
      w-48
      h-44
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
        class="w-96 h-20 object-cover rounded-2xl"
      />
      <figcaption class="text-sm">{{ nom }}</figcaption>
      <!-- Ajoutez ici la base donné-->
    </figure>
    <div class="flex justify-between items-center text-lg">
      <div class="flex items-center">
        <fleche class="w-5" />
        <p class="">{{ distance }}</p>
        <!--base de donnée-->
      </div>
      <div class="flex items-center">
        <stars class="w-5" />
        <p>{{ note }}</p>
        <!--base de donnée-->
      </div>
      <div>
        <plus class="" />
      </div>
    </div>
  </div>
</template>

<script>
import fleche from "../components/icons/flecheDistance.vue";
import plus from "../components/icons/buttonPlusTerrain.vue";
import stars from "../components/icons/stars.vue";

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



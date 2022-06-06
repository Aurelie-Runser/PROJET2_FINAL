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
        gap-4
        snap-x snap-mandatory
        overflow-x-auto
        pb-4
      "
    >
      <div class="snap-center shrink-0">
        <div class="shrink-0 w-4 sm:w-48"></div>
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <carte-terrain
          nom="nom de terrain"
          note="4.2"
          distance="500 m"
          image="public\basket1.jpg"
        />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <carte-terrain />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          class="shrink-0 w-h-56 h-56 rounded-lg shadow-xl"
          src="/images/slider/Group8.png"
        />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          class="shrink-0 w-h-56 h-56 rounded-lg shadow-xl"
          src="/images/slider/Group13.png"
        />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          class="shrink-0 w-h-56 h-56 rounded-lg shadow-xl"
          src="/images/slider/Group9.png"
        />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          class="shrink-0 w-h-56 h-56 rounded-lg shadow-xl"
          src="/images/slider/Group11.png"
        />
      </div>
      <div class="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          class="shrink-0 w-h-56 h-56 rounded-lg shadow-xl"
          src="/images/slider/Group12.png"
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
  name: "slider",
  components: { carteTerrain },
};

import carteTerrain from "../components/carteTerrain.vue";
</script>


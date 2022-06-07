<template>
  <div class="grid mt-3 grid-cols-3 gap-8">
    <div>
      <p class="font-arial text-lg">Date</p>
      <p class="text-gray-500 text-sm">{{ date }}</p>
    </div>

    <div>
      <p class="font-arial text-lg">Heure</p>
      <p class="text-gray-500 text-base">{{ heure }}</p>
    </div>
  </div>

  <div class="mt-5">
    <p class="font-arial inline text-lg">Participants</p>
    <p class="inline text-gray-500 text-base">{{ participants }}</p>
  </div>

  <div>
    <p class="text-gray-500 inline text-base">{{ actuel }}</p>
    <arrowdow class="w-6 ml-3 inline" />
  </div>

  <hr class="mt-5 -ml-4 border-gray-400" />

  <div class="mt-5">
    <p class="font-arial text-lg">Organisateur</p>
    <p class="text-gray-500 inline text-base">{{ organisateur }}</p>
    <div class="inline-block mx-4">
      <noteVue2> 4.2 </noteVue2>
    </div>
    <arrowdow class="w-6 inline" />
  </div>

  <hr class="mt-5 -ml-4 border-gray-400" />

  <div class="flex space-x-2 justify-center">
    <button
      type="button"
      class="
        w-52
        h-12
        lg:h-10 lg:text-lg
        mt-9
        bg-green-550
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded-2xl
        shadow-md
        hover:bg-green-700 hover:shadow-lg
        focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-green-700 active:shadow-lg
        transition
        duration-150
        ease-in-out
      "
    >
      Participer
    </button>
  </div>
</template>



<script>
import arrowdow from "./icons/Arrowdow.vue";
import noteVue2 from "../components/icons/note2.vue";

export default {
  name: "DetaillematchorgaView",
  components: { arrowdow, noteVue2 },
  props: {
    date: { type: String },
    heure: { type: String },
    participants: { type: String },
    actuel: { type: String },
    organisateur: { type: String },
  },
};
</script>
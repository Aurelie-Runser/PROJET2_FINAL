<template>
  <div
    class="
      flex flex-row
      w-max
      h-auto
      p-1
      rounded-xl
      bg-[#F2F2F2]
      text-[#979393]
    "
  >
    <stars-vue class="flex-none w-5 h-5" />
    <p class="mx-1 text-sm font-arial"><slot /></p>
  </div>
</template>


<script>
import starsVue from "../icons/stars.vue";

export default {
  name: "Note2vue",
  components: { starsVue },

  data() {
    return {};
  },
};
</script>

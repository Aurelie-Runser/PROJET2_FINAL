<template>
  <div class="bg-green-550 h-screen">
    <div class="font-arial text-white text-8xl text-center font-bold pt-6">
      Oups ...
    </div>
    <div class="font-arial text-white text-6xl mx-2 text-center pt-6">
      La page que vous cherchez semble introuvable.
    </div>

    <div class="font-arial text-white text-xl mx-2 text-center pt-6">
      Code d’erreur : 404
    </div>

    <div class="flex justify-center">
      <button
        class="
          bg-white
          text-green-450 text-lg
          font-bold
          mt-10
          py-2
          px-20
          rounded-xl
        "
      >
        Accueil
      </button>
    </div>
    <img
      class="w-screen absolute bottom-0"
      src="public\images\404Illustration2.png"
      alt="illustration page 404"
    />
  </div>
</template>

 
<script>
export default {
  name: "Page404View ",
};
</script>
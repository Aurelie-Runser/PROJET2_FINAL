<template>
  <div class="ml-5 mt-9">
    <p class="text-xl font-arial font-bold">Enregistrés récemment</p>

    <slider />

    <p class="text-base mt-7 font-arial font-bold">
      Terrains de Frambouhans
    </p>
    <petit-slider-vie />

    <petitcarte-terrain-view class="text-base mt-7 font-arial font-bold">Skatepark</petitcarte-terrain-view>
    <petit-slider-vie />

    <hr class="border-gray-600 w-11/12 mt-5" />

    <div class="grid grid-cols-2">
      <p class="text-base font-arial font-bold">Vos listes</p>
      <div class="justify-center">
        <plusgreen class="inline align-top pt-1" />
        <p class="text-base inline text-green-550 font-arial">
          Ajouter une liste
        </p>
      </div>

      <RouterLink to="/updateEnregistre">
        <button class="text-left">
          <p class="font-arial mt-2">Terrain de Frambouhans</p>
          <p class="text-xs font-bold text-gray-500 inline">
            Trois enregistrement✏️
          </p>
        </button>
      </RouterLink>
    </div>

    <div class="grid grid-cols-2">
      <div>
        <p class="font-arial mt-2">Skatepark</p>
        <p class="text-xs font-bold text-gray-500 inline">
          Deux enregistrement✏️
        </p>
      </div>
    </div>
    <div class="h-32"></div>

    <div
      class="
        fixed
        bottom-0
        left-0
        right-0
        w-11/12
        h-20
        mx-auto
        my-4
        py-2
        font-arial
        bg-white
        text-gray-500 text-sm
        border border-gray-500
        rounded-3xl
      "
    >
      <nav class="flex w-full h-full align-center">
        <RouterLink
          to="/"
          class="flex w-1/4 h-full flex-col items-center justify-center"
        >
          <BoussoleGrayIcon class="w-auto h-6 mb-2" />
          Découvrire
        </RouterLink>

        <RouterLink
          to="/enregistre"
          class="
            flex
            w-1/4
            h-full
            flex-col
            items-center
            justify-center
            text-green-550
            font-bold
          "
        >
          <EnregistreGreenIcon class="w-auto h-6 mb-2" />
          Enregistré
        </RouterLink>

        <RouterLink
          to="/Amis"
          class="flex w-1/4 h-full flex-col items-center justify-center"
        >
          <FriendsGrayIcon class="w-auto h-6 mb-2" />
          Amis
        </RouterLink>

        <RouterLink
          to="/profil"
          class="flex w-1/4 h-full flex-col items-center justify-center"
        >
          <AvatarGrayIcon class="w-auto h-6 mb-2" />
          Profil
        </RouterLink>
      </nav>
    </div>
  </div>
</template>


<script>
import BoussoleGrayIcon from "../../components/icons/boussoleGray.vue";
import EnregistreGreenIcon from "../../components/icons/enregistrementGreen.vue";
import FriendsGrayIcon from "../../components/icons/friendsGray.vue";
import AvatarGrayIcon from "../../components/icons/avatarGray.vue";
import slider from "../../components/SliderView.vue";
import PetitSliderVie from "../../components/PetitSliderVie.vue";
import plusgreen from "../../components/icons/plusgreen.vue";

export default {
  name: "EnregistreView",
  components: {
    slider,
    BoussoleGrayIcon,
    EnregistreGreenIcon,
    FriendsGrayIcon,
    AvatarGrayIcon,
    PetitSliderVie,
    plusgreen,
  },

  data() {
    return {};
  },
  
};
</script>

<template>
  <div class="overflow-x-scroll">
    <div class="w-max h-screen relative">
      <img
        class="w-auto h-full overflow-hidden z-0"
        src="/map.webp"
        alt="carte de Montbéliard"
      />

      <!--Stade Annequin-->
      <button
        ref="inner_rect"
        class="absolute top-3 left-72"
        @click="CarteVisiblenotif = !CarteVisiblenotif"
      >
        <div class="w-max h-max relative">
          <Ping class="w-14 h-auto" />
          <FootPing class="absolute top-1 left-3" />
          <rednotif class="absolute top-1 left-9" />
        </div>
      </button>

      <!--Terrain de Tennis Silhouette -->
      <button
        class="absolute top-80 left-20"
        @click="CarteVisible = !CarteVisible"
      >
        <div class="w-max h-max relative">
          <Ping class="w-14 h-auto" />
          <TennisPing class="absolute top-1 left-3" />
        </div>
      </button>

      <!--Stade de la Banane-->
      <button
        class="absolute top-[350px] left-[275px]"
        @click="CarteVisible = !CarteVisible"
      >
        <div class="w-max h-max relative">
          <Ping class="w-14 h-auto" />
          <FootPing class="absolute top-1 left-3" />
        </div>
      </button>

      <!--Terrain Chabaud -->
      <button
        class="absolute top-60 left-[630px]"
        @click="CarteVisible = !CarteVisible"
      >
        <div class="w-max h-max relative">
          <Ping class="w-14 h-auto" />
          <FootPing class="absolute top-1 left-3" />
        </div>
      </button>

      <!--Terrain de Basket Châteaudun -->
      <button
        class="absolute top-32 left-96"
        @click="CarteVisible = !CarteVisible"
      >
        <div class="w-max h-max relative">
          <Ping class="w-14 h-auto" />
          <BasketPing class="absolute top-1 left-3" />
        </div>
      </button>

      <!--Skatepark Pascal Pané -->
      <button
        class="absolute top-56 left-96"
        @click="CarteVisiblenotif = !CarteVisiblenotif"
      >
        <div class="w-max h-max relative">
          <skatenotif class="absolute top-1 w-14 left-3" />
        </div>
      </button>

      <!--Parcours sportif du bois de Courcelles -->
      <button
        class="absolute top-[600px] left-80"
        @click="CarteVisible = !CarteVisible"
      >
        <div class="w-max h-max relative">
          <Ping class="w-12 h-auto" />
          <RunPing class="w-7 absolute top-1 left-3" />
        </div>
      </button>
    </div>

    <GrandeCarteTerrain
      nom="Skatepark Harley Davidson"
      note="4.7"
      distance="4.3km"
      image="public\basket1.jpg"
      class="
        bg-white
        fixed
        -bottom-40
        left-0
        right-0
        duration-500
        transition-transform
      "
      :class="{ '-translate-y-96': CarteVisible }"
    />

    <GrandeCarteTerrainNotif
      nom="Skatepark Harley Davidson"
      note="4.7"
      distance="4.3km"
      image="public\basket1.jpg"
      class="bg-white fixed -bottom-10 duration-500 transition-transform"
      :class="{ '-translate-y-96': CarteVisiblenotif }"
    />

    <RouterLink to="/creerMatch">
      <buttonPlusMap class="fixed right-4 bottom-28" />
    </RouterLink>

    <!--MENU-->

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
          <BoussoleGreenIcon class="w-auto h-6 mb-2" />
          Découvrire
        </RouterLink>

        <RouterLink
          to="/enregistre"
          class="flex w-1/4 h-full flex-col items-center justify-center"
        >
          <EnregistreWhiteIcon class="w-auto h-6 mb-2 focus:hidden" />
          Enregistré
        </RouterLink>

        <RouterLink
          to="/Amis"
          class="flex w-1/4 h-full flex-col items-center justify-center"
        >
          <FriendsGrayIcon class="w-auto h-6 mb-2 focus:hidden" />
          Amis
        </RouterLink>

        <RouterLink
          to="/profil"
          class="flex w-1/4 h-full flex-col items-center justify-center"
        >
          <AvatarGrayIcon class="w-auto h-6 mb-2 focus:hidden" />
          Profil
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<style>
</style>

<script>
import rednotif from "../components/icons/iconsPing/rednotif.vue";
import skatenotif from "../components/icons/iconsPing/skatenotif.vue";
import Ping from "../components/icons/ping.vue";
import FootPing from "../components/icons/iconsPing/FootIcon.vue";
import TennisPing from "../components/icons/iconsPing/TennisIcon.vue";
import BasketPing from "../components/icons/iconsPing/BasketIcon.vue";
import SkatePing from "../components/icons/iconsPing/SkateIcon.vue";
import RunPing from "../components/icons/iconsPing/RunIcon.vue";
import carteTerrainPlus from "../components/carteTerrainPlus.vue";

import GrandeCarteTerrainNotif from "../components/GrandeCarteTerrainNotif.vue";

import buttonPlusMap from "../components/icons/buttonPlusMap.vue";

import BoussoleGreenIcon from "../components/icons/boussoleGreen.vue";
import EnregistreWhiteIcon from "../components/icons/enregistrementWhite.vue";
import FriendsGrayIcon from "../components/icons/friendsGray.vue";
import AvatarGrayIcon from "../components/icons/avatarGray.vue";
import GrandeCarteTerrain from "../components/GrandeCarteTerrain.vue";

export default {
  name: "HomeView",
  components: {
    rednotif,
    skatenotif,
    GrandeCarteTerrain,
    GrandeCarteTerrainNotif,
    buttonPlusMap,
    Ping,
    FootPing,
    TennisPing,
    BasketPing,
    SkatePing,
    RunPing,
    carteTerrainPlus,
    BoussoleGreenIcon,
    EnregistreWhiteIcon,
    FriendsGrayIcon,
    AvatarGrayIcon,
  },

  /*
  setup(props, context) {
    let d = useInputModel(props, context.emit, "modelValue");
    const inner_rect = ref(null);
    useClickOutside(inner_rect, () => {
      d.value = false;
    });
    return {
      inner_rect,
      d,
    };
  }, */

  data() {
    return {
      CarteVisible: false,
      CarteVisiblenotif: false,
    };
  },
};
</script>

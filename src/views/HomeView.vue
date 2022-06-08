<template>
  <div class="overflow-x-scroll">
    <div class="w-max h-screen relative">
      <img
        class="w-auto h-full overflow-hidden z-0"
        src="/map.webp"
        alt="carte de Montbéliard"
      />

      <div class="flex">
        <loupe class="top-6 right-7 z-30 fixed" />
        <input
          type="text"
          v-model="filter"
          class="
            border-2
            z-20
            top-1
            left-0
            float-left
            right-0
            mx-auto
            fixed
            w-11/12
            focus:border-green-550 focus:ring-green-550
            h-10
            my-4
            font-arial
            bg-white
            text-gray-500 text-sm
            rounded-3xl
            pr-12
            pl-2
          "
          placeholder="Votre recherche "
        />
      </div>
      

      <!--Terrain de Tennis Silhouette -->
      <button
        class="absolute top-80 left-20"
        @click="
          {
            CarteVisiblenotif = !CarteVisiblenotif;
            CarteVisible = false;
            MatchOrgaView = false;
            MatchOrgaView2 = false;
            boutonorga = false;
            CarteVisiblerun = false;
            CarteVisiblefoot1 = false;
            CarteVisiblefoot2 = false;
            CarteVisiblenotifskate = false;
            MatchOrgaViewtennis = false;
          }
        "
      >
        <div class="w-max h-max relative">
          <Ping class="w-14 h-auto" />
          <TennisPing class="absolute top-1 left-3" />
          <rednotif class="absolute top-1 left-9" />
        </div>
      </button>

      <!--Stade de la Banane-->
      <button
        class="absolute top-[350px] left-[275px]"
        @click="
          {
            CarteVisiblefoot2 = !CarteVisiblefoot2;
            CarteVisiblenotif = false;
            CarteVisible = false;
            MatchOrgaView = false;
            MatchOrgaView2 = false;
            boutonorga = false;
            CarteVisiblerun = false;
            CarteVisiblefoot1 = false;
            CarteVisiblenotifskate = false;
            MatchOrgaViewtennis = false;
          }
        "
      >
        <div class="w-max h-max relative">
          <Ping class="w-14 h-auto" />
          <FootPing class="absolute top-1 left-3" />
        </div>
      </button>

      <!--Terrain Chabaud -->
      <button
        class="absolute top-60 left-[630px]"
        @click="
          {
            CarteVisiblefoot1 = !CarteVisiblefoot1;
            CarteVisiblenotif = false;
            CarteVisible = false;
            MatchOrgaView = false;
            MatchOrgaView2 = false;
            boutonorga = false;
            CarteVisiblerun = false;
            CarteVisiblefoot2 = false;
            CarteVisiblenotifskate = false;
            MatchOrgaViewtennis = false;
          }
        "
      >
        <div class="w-max h-max relative">
          <Ping class="w-14 h-auto" />
          <FootPing class="absolute top-1 left-3" />
        </div>
      </button>

      <!--Terrain de Basket Châteaudun -->
      <button
        class="absolute top-32 left-96"
        @click="
          {
            CarteVisible = !CarteVisible;
            CarteVisiblefoot1 = false;
            CarteVisiblenotif = false;
            MatchOrgaView = false;
            MatchOrgaView2 = false;
            boutonorga = false;
            CarteVisiblerun = false;
            CarteVisiblefoot2 = false;
            CarteVisiblenotifskate = false;
            MatchOrgaViewtennis = false;
          }
        "
      >
        <div class="w-max h-max relative">
          <Ping class="w-14 h-auto" />
          <BasketPing class="absolute top-1 left-3" />
        </div>
      </button>

      <!--Skatepark Pascal Pané -->
      <button
        class="absolute top-56 left-96"
        @click="
          {
            CarteVisiblenotifskate = !CarteVisiblenotifskate;
            CarteVisible = false;
            CarteVisiblefoot1 = false;
            CarteVisiblenotif = false;
            MatchOrgaView = false;
            MatchOrgaView2 = false;
            boutonorga = false;
            CarteVisiblerun = false;
            CarteVisiblefoot2 = false;
            MatchOrgaViewtennis = false;
          }
        "
      >
        <div class="w-max h-max relative">
          <skatenotif class="absolute top-1 w-14 left-3" />
        </div>
      </button>

      <!--Parcours sportif du bois de Courcelles -->
      <button
        class="absolute top-[600px] left-80"
        @click="
          {
            CarteVisiblerun = !CarteVisiblerun;
            CarteVisible = false;
            CarteVisiblefoot1 = false;
            CarteVisiblenotif = false;
            MatchOrgaView = false;
            MatchOrgaView2 = false;
            boutonorga = false;
            CarteVisiblefoot2 = false;
            CarteVisiblenotifskate = false;
            MatchOrgaViewtennis = false;
          }
        "
      >
        <div class="w-max h-max relative">
          <Ping class="w-12 h-auto" />
          <RunPing class="w-7 absolute top-1 left-3" />
        </div>
      </button>
    </div>

    <GrandeCarteTerrain
      nom="Terrain Chabaud"
      note="3.1"
      distance="1.8 km"
      image="public\terrainfoot2.jpg"
      class="z-10 duration-500 transition-transform"
      :class="{ '-translate-y-72': CarteVisiblefoot1 }"
    />

    <GrandeCarteTerrain
      nom="Stade de la Banane"
      note="4"
      distance="450 m"
      image="public\stade_banane.jpg"
      class="z-10 duration-500 transition-transform"
      :class="{ '-translate-y-72': CarteVisiblefoot2 }"
    />

    <GrandeCarteTerrain
      nom="parcours bois courcelles"
      note="4.3"
      distance="2.2 km"
      image="public\parcours_courcelles.jpg"
      class="z-10 duration-500 transition-transform"
      :class="{ '-translate-y-72': CarteVisiblerun }"
    />

    <GrandeCarteTerrain
      nom="Terrain de Basket Châteaudun"
      note="3.8"
      distance="210 m"
      image="public\basket1.jpg"
      class="z-10 duration-500 transition-transform"
      :class="{ '-translate-y-72': CarteVisible }"
    />

    <GrandeCarteTerrainNotif
      @click="
        {
          MatchOrgaView = !MatchOrgaView;
          boutonorga = true;
          CarteVisiblenotif = false;
          CarteVisible = false;
          CarteVisiblefoot1 = false;
          MatchOrgaView2 = false;
          CarteVisiblerun = false;
          CarteVisiblefoot2 = false;
          CarteVisiblenotifskate = false;
          MatchOrgaViewtennis = false;
        }
      "
      nom="Terrain de tennis Hanckock"
      note="3.5"
      distance="4.3 km"
      image="public\terraintennis.jpg"
      class="z-10 duration-500 transition-transform"
      :class="{ '-translate-y-72': CarteVisiblenotif }"
    />

    <GrandeCarteTerrainNotif
      @click="
        {
          MatchOrgaViewtennis = !MatchOrgaViewtennis;
          boutonorga = true;
          CarteVisiblenotifskate = false;
          CarteVisiblenotif = false;
          CarteVisible = false;
          CarteVisiblefoot1 = false;
          MatchOrgaView = false;
          MatchOrgaView2 = false;
          CarteVisiblerun = false;
          CarteVisiblefoot2 = false;
          MatchOrgaView = false;
        }
      "
      nom="Skatepark Pascal Pané"
      note="4.6"
      distance="200 m"
      image="public\skatepark_pane.jpg"
      class="z-10 duration-500 transition-transform"
      :class="{ '-translate-y-72': CarteVisiblenotifskate }"
    />

    <MatchOrgaView
      date="jeudi 9 juin"
      heure="16:00"
      actuel="1 participant"
      organisateur="Tedy Vincent"
      image="public\terraintennis.jpg"
      notevue="4.2"
      sport="public/images/tennis.png"
      regle="Match de tennis en 2 sets 6 jeux "
      nom="Terrain de tennis Hanckock"
      class="z-0 duration-500 transition-transform"
      :class="{ '-translate-y-[750px]': MatchOrgaView }"
    />

    <MatchOrgaView
      date="jeudi 9 juin"
      heure="14:30"
      actuel="7 participants"
      organisateur="Anthony Hawk"
      notevue="3.8"
      image="public\skatepark_pane.jpg"
      sport="public/images/skate.png"
      regle="apres midi détente"
      nom="Skatepark Pascal Pane"
      class="z-0 duration-500 transition-transform"
      :class="{ '-translate-y-[750px]': MatchOrgaViewtennis }"
    />

    <boutonorga
      class="z-10 duration-700 transition-transform"
      :class="{ '-translate-y-[200px]': boutonorga }"
      @click="
        {
          MatchOrgaViewtennis = false;
          MatchOrgaView = false;
          boutonorga = !boutonorga;
        }
      "
    />

    <RouterLink to="/creerMatch">
      <buttonPlusMap class="fixed right-4 bottom-28" />
    </RouterLink>

    <!--MENU-->
    <div
      class="
        z-10
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
import GrandeCarteTerrainRun from "../components/GrandeCarteTerrainRun.vue";
import boutonorga from "../components/boutonorga.vue";
import loupe from "../components/icons/loupe.vue";
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
import MatchOrgaView from "../components/MatchOrgaView.vue";
import MatchOrgaView2 from "../components/MatchOrgaView2.vue";

import buttonPlusMap from "../components/icons/buttonPlusMap.vue";

import BoussoleGreenIcon from "../components/icons/boussoleGreen.vue";
import EnregistreWhiteIcon from "../components/icons/enregistrementWhite.vue";
import FriendsGrayIcon from "../components/icons/friendsGray.vue";
import AvatarGrayIcon from "../components/icons/avatarGray.vue";
import GrandeCarteTerrain from "../components/GrandeCarteTerrain.vue";

export default {
  name: "HomeView",
  components: {
    GrandeCarteTerrainRun,
    boutonorga,
    MatchOrgaView2,
    MatchOrgaView,
    loupe,
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

  data() {
    return {
      CarteVisible: false,
      CarteVisiblenotif: false,
      MatchOrgaView: false,
      MatchOrgaView2: false,
      boutonorga: false,
      CarteVisiblerun: false,
      CarteVisiblefoot1: false,
      CarteVisiblefoot2: false,
      CarteVisiblenotifskate: false,

      MatchOrgaViewtennis: false,
    };
  },
};
</script>

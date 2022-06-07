<template>
    <div class="max-w-6xl m-auto">

        <RouterLink to="/enregistre">
            <flecheRetour class="m-5"/>
        </RouterLink>

        <h1 class="m-5 text-xl font-arial font-bold">Terrain de Frambouhans</h1>

        <div class="mx-auto w-max my-10 flex flex-col lg:flex-row lg:flex-wrap lg:w-full gap-10">
            <GrandeCarteTerrain class="flex-none"
                nom="Terrain de Basket Châteaudun"
                adresse="22 Rue Louis Papin, 25140 Frambouhans "
                note="3.8"
                distance="210 m"
                image="public\basket1.jpg"/>
                
            <GrandeCarteTerrain class="flex-none"
                nom="Terrain de Basket Châteaudun"
                adresse="22 Rue Louis Papin, 25140 Frambouhans "
                note="3.8"
                distance="210 m"
                image="public\basket1.jpg"/>

            <GrandeCarteTerrain class="flex-none"
                nom="Terrain de Basket Châteaudun"
                adresse="22 Rue Louis Papin, 25140 Frambouhans "
                note="3.8"
                distance="210 m"
                image="public\basket1.jpg"/>
        </div>

        <hr class="border-gray-500 w-11/12 mt-5 mx-auto" />

        <div>
            <h2 class="m-5 text-xl font-arial font-bold">Ajouter un terrain</h2>

            <div class="flex overflow-x-scroll py-2">
                <carteTerrainPlus nom="Skatepark  Harley Davidson"
                            note="4.7"
                            distance="4.3km"
                            image="public\basket1.jpg"
                            class="flex-none basis-auto"/>
        
                <carteTerrainPlus nom="Skatepark  Harley Davidson"
                            note="4.7"
                            distance="4.3km"
                            image="public\basket1.jpg"
                            class="flex-none basis-auto"/>

                <carteTerrainPlus nom="Skatepark  Harley Davidson"
                            note="4.7"
                            distance="4.3km"
                            image="public\basket1.jpg"
                            class="flex-none basis-auto"/>
            </div>
        </div>

    <!--MENU-->
    <div class="h-28"></div>

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

import flecheRetour from "../../components/icons/flecheRetour.vue";
import GrandeCarteTerrain from "../../components/GrandeCarteTerrain.vue";
import carteTerrainPlus from "../../components/carteTerrainPlus.vue";

export default {
  name: "EnregistreView",
  components: {
    BoussoleGrayIcon,
    EnregistreGreenIcon,
    FriendsGrayIcon,
    AvatarGrayIcon,

    flecheRetour,
    GrandeCarteTerrain,
    carteTerrainPlus,
  },

  data() {
    return {};
  },
};
</script>

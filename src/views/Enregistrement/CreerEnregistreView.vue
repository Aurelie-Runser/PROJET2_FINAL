<template>
    <div class="max-w-5xl m-auto">

        <h1 class="m-5 text-xl font-arial font-bold">Nouvelle liste</h1>

        <div class="mx-auto w-80">
            <input type="text" 
                    placeholder="Donnez un nom à votre liste"
                    required
                    class="w-full my-3 py-2 border-b-2 border-b-gray-300 font-arial text-base text-green-550">
            <input type="text" 
                    placeholder="Ajoutez une description à votre liste"
                    class="w-full my-3 py-2 border-b-2 border-b-gray-300 font-arial text-base text-green-550">

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

            <button type="submit" class="block mx-auto my-10 w-max p-4 bg-green-450 rounded-xl shadow-md shadow-gray-300 font-arial font-bold text-white text-4xl text-center">
                Créer la liste
            </button>

            <RouterLink to="/enregistre">
                <button class="block mx-auto w-max p-4 bg-white border-2 border-red-550 rounded-xl shadow-md shadow-gray-300 font-arial font-bold text-2xl text-center">
                    Abandonner
                </button>
            </RouterLink>

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
            to="/map"
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

import carteTerrainPlus from "../../components/carteTerrainPlus.vue";

export default {
  name: "EnregistreView",
  components: {
    BoussoleGrayIcon,
    EnregistreGreenIcon,
    FriendsGrayIcon,
    AvatarGrayIcon,

    carteTerrainPlus,
  },

  data() {
    return {};
  },
};
</script>

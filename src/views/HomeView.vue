<template>
  <div>
    <RouterLink to="/creerMatch">
      <buttonPlusMap class="fixed right-4 bottom-28"/>
    </RouterLink>


    <!--MENU-->

    <div class="fixed bottom-0 left-0 right-0 w-11/12 h-20 mx-auto my-4 py-2 font-arial bg-white text-gray-500 text-sm border border-gray-500 rounded-3xl">      
      <nav class="flex w-full h-full align-center">
        
        <RouterLink to="/" class="flex w-1/4 h-full flex-col items-center justify-center
                                  text-green-550 font-bold">
          <BoussoleGreenIcon class="w-auto h-6 mb-2" />
          Découvrire
        </RouterLink>

        <RouterLink to="/enregistre" class="flex w-1/4 h-full flex-col items-center justify-center">
          <EnregistreWhiteIcon class="w-auto h-6 mb-2 focus:hidden" />
          Enregistré
        </RouterLink>

        <RouterLink to="/Amis" class="flex w-1/4 h-full flex-col items-center justify-center">
          <FriendsGrayIcon class="w-auto h-6 mb-2 focus:hidden" />
          Amis
        </RouterLink>

        <RouterLink to="/profil" class="flex w-1/4 h-full flex-col items-center justify-center">
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

import buttonPlusMap from "../components/icons/buttonPlusMap.vue";
  
import BoussoleGreenIcon from "../components/icons/boussoleGreen.vue";
import EnregistreWhiteIcon from "../components/icons/enregistrementWhite.vue";
import FriendsGrayIcon from "../components/icons/friendsGray.vue";
import AvatarGrayIcon from "../components/icons/avatarGray.vue";
  
  export default {
    name: 'HomeView',
    components: {buttonPlusMap,
                BoussoleGreenIcon, EnregistreWhiteIcon,
                FriendsGrayIcon, AvatarGrayIcon
    },

    data(){
      return{
        
      }
    },
  }
</script>

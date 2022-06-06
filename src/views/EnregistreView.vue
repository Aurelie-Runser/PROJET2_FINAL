<template>
    <div>
        Enregistre

        <!--MENU-->
    
        <div class="fixed bottom-0 left-0 right-0 w-11/12 h-20 mx-auto my-4 py-2 font-arial bg-white text-gray-500 text-sm border border-gray-500 rounded-3xl">      
        <nav class="flex w-full h-full align-center">
            
            <RouterLink to="/" class="flex w-1/4 h-full flex-col items-center justify-center">
            <BoussoleGrayIcon class="w-auto h-6 mb-2" />
            Découvrire
            </RouterLink>

            <RouterLink to="/enregistre" class="flex w-1/4 h-full flex-col items-center justify-center  text-green-550 font-bold">
            <EnregistreGreenIcon class="w-auto h-6 mb-2" />
            Enregistré
            </RouterLink>

            <RouterLink to="/Amis" class="flex w-1/4 h-full flex-col items-center justify-center">
            <FriendsGrayIcon class="w-auto h-6 mb-2" />
            Amis
            </RouterLink>

            <RouterLink to="/profil" class="flex w-1/4 h-full flex-col items-center justify-center">
            <AvatarGrayIcon class="w-auto h-6 mb-2" />
            Profil
            </RouterLink>
        </nav>
        </div>
    </div>
</template>


<script>
 
import BoussoleGrayIcon from "../components/icons/boussoleGray.vue";
import EnregistreGreenIcon from "../components/icons/enregistrementGreen.vue";
import FriendsGrayIcon from "../components/icons/friendsGray.vue";
import AvatarGrayIcon from "../components/icons/avatarGray.vue";
  
  export default {
    name: 'EnregistreView',
    components: {BoussoleGrayIcon, EnregistreGreenIcon,
                  FriendsGrayIcon, AvatarGrayIcon
    },

    data(){
      return{
        
      }
    },
  }
</script>

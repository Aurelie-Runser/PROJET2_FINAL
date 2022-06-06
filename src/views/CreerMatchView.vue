<template>
    <div class="p-5 max-w-5xl m-auto">
        <h1 class="font-arial text-2xl my-5">Créer un Match</h1>
        <p class="font-arial text-gray-500">Attention, vous vous apprêtez à créer un événement public.
            <br/>Après confirmation de la création, celui-ci sera visible par tous et ne pourrat être supprimé que sous certaines conditions.
        </p>

        <div>
            <div class="inline-block mx-4 my-5 py-2 font-arial font-bold border-b border-b-black">
                <span>Sport : </span>
                <select class="bg-white">
                    <option></option>
                    <option>Football</option>   <!--v-for="pays in listeSport" :key='sport'-->
                    <option>Basketball</option>
                </select>
            </div>

            <div class="my-5 py-2 font-arial font-bold flex flex-col">
                <textarea name="regleMatch" 
                          id="regleMatch" 
                          cols="44" rows="10" 
                          required 
                          placeholder="Précisez les régles du match" 
                          autocomplete="off" 
                          class="border-b border-b-gray-500 border-l border-l-gray-500 my-4 p-2"></textarea>

                <input type="number" 
                       id="nombreJoueurs" 
                       name="nombreJoueurs" 
                       required 
                       placeholder="Indiquez le nombre de participant"
                       min="2" max="30" 
                       size="44"
                       class="border-b border-b-gray-500 my-4 py-2"/>

                <div class="my-4">
                    <div class=" my-2 flex justify-between border-b py-2 border-b-black">
                        <p >Choisissez un terrain</p>
                        <button class="font-bold text-green-550">
                            Autres listes
                        </button>
                    </div>
                    <div class="flex overflow-x-scroll py-2">
                        <carteTerrain class="flex-none basis-auto"/>
                        <carteTerrain class="flex-none basis-auto"/>
                        <carteTerrain class="flex-none basis-auto"/>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8 -mx-3 my-3 max-w-lg sm:mx-auto sm:gap-32">
                    <div class="border-b border-b-black">
                        <span>Date : </span>
                        <input class="inline" type="date" name="date" id="date" required>
                    </div>

                    <div class="border-b border-b-black">
                        <span>Horraire : </span>
                        <input class="inline" type="time" name="date" id="date" required>
                    </div>
                </div>

                <div class="my-4">
                    <div class="flex flex-row items-center my-4">
                        <input type="checkbox" name="checkboxPart" id="checkboxPart" required
                               class="flex-none w-[30px] h-[30px]"> <!--modif ça-->
                        <p class="mx-4 font-normal text-lg">Je m’engage à participer à ce match, et accepte d’éventuel sanctions dans le cas contraire.</p>
                    </div>
                    <div class="flex flex-row items-center my-4">
                        <input type="checkbox" name="checkboxAccepte" id="checkboxAccepte" required
                               class="flex-none w-[30px] h-[30px]"> <!--modif ça-->
                        <p class="mx-4 font-normal text-lg">Accepter de rendre mon profile visible par tous le monde, tant que l’évenement sera affiché.</p>
                    </div>
                </div>

                <div class="flex justify-center">
                    <input type="image" src="Créer" alt="Créer"
                            class="w-52 p-4 bg-green-450 rounded-xl font-arial font-bold text-white text-4xl text-center">
                </div>
            </div>
        </div>
        <div class="h-24"></div>

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

<script>
import carteTerrain from "../components/carteTerrain.vue";

import BoussoleGreenIcon from "../components/icons/boussoleGreen.vue";
import EnregistreWhiteIcon from "../components/icons/enregistrementWhite.vue";
import FriendsGrayIcon from "../components/icons/friendsGray.vue";
import AvatarGrayIcon from "../components/icons/avatarGray.vue";

export default{
    name:"CreerMatch",
    components:{carteTerrain,
                BoussoleGreenIcon, EnregistreWhiteIcon,
                FriendsGrayIcon, AvatarGrayIcon},
    data(){
      return {
      } 
    },
}

</script>
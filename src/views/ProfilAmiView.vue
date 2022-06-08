<template>
    <form class="max-w-5xl m-auto"  @submit.prevent="deleteAmi">
        <div class="w-auto h-12 bg-gray-500">
            <p class="text-center  text-[22.000993728637695px] font-bold italic  text-black">
                PUB
            </p>
        </div>

        <div class="relative mt-9 w-11/12 mx-auto ml-auto">
            <img class="w-full aspect-video md:aspect-[9/3] rounded-2xl" :src="Banniere" alt="banniere">

            <div class="w-max absolute left-0 right-0 mx-auto -bottom-10">
                <div class="relative w-24 h-24 rounded-full overflow-hidden">
                    <img class="object-cover" :src="Avatar" alt="avatar">
                </div>
            </div>
        </div>

        <h2 class="text-center mt-14 mb-5 text-3xl font-medium">{{Ami.prenom}} {{Ami.Nom}}</h2>

        <noteVue>
            {{Ami.Note}}
        </noteVue>

        <p class="m-5">Description</p>
        <div class="grid grid-cols-3 justify-center">  
        <BoxVue
            :nbr="Ami.Nbr_match_organise"
            texte="Match organisés "/>
        <BoxVue
            :nbr="Ami.Nbr_match_joue"
            texte="Match joué "/>
        <BoxVue
            :nbr="Ami.medailles"
            texte="Médailles"/>
        </div>

        <h2 class=" mt-10 ml-3 text-3xl font-medium">Médailles</h2>

        <div class="grid grid-cols-3 ">
            <medaillesVue image="/public/images/medailles1.png" txt="Homme du match"/>
            <medaillesVue image="/public/images/blocnote.png" txt="Organisateur né"/>
            <medaillesVue image="/public/images/trophee1.png" txt="Précurseur"/>
        </div>

        <div class="cursor-pointer mx-auto my-10 w-max p-4 bg-green-450 rounded-xl shadow-md shadow-gray-500 font-arial font-bold text-white text-2xl text-center">Envoyer un message</div>

        <div class="w-full p-5 flex justify-end gap-5">
            <div class="cursor-pointer flex-none w-max p-3 bg-white border-2 border-red-550 rounded-xl shadow-md shadow-gray-300 font-arial font-bold text-red-550 text-lg text-center">
                Signaler
            </div>
            <div class="cursor-pointer flex-none w-max p-3 bg-white border-2 border-black rounded-xl shadow-md shadow-gray-300 font-arial font-bold text-lg text-center"
                @click="PopUp = true">
                Bloquer
            </div>
        </div>

        <div class="fixed opacity-0 top-[30%] mx-5 w-auto max-w-sm p-5 bg-red-500 rounded-3xl text-center duration-100 transition-opacity"
            :class="{ 'opacity-100': PopUp }"
            type="alert">
            <p class="font-arial text-3xl text-white">Attention, êtes vous bien sûr de vouloir bloquer cet ami ? Cette action est définitive.</p>
            <button class="mt-5 p-3 border-4 border-black rounded-xl shadow-lg font-arial font-bold text-xl text-center"
                   type="submit">
                Bloquer définitivement
            </button>
            <div class="cursor-pointer mt-5 p-3 border-4 border-white rounded-xl shadow-lg font-arial font-bold text-xl text-white text-center"
                    @click="PopUp = false">
                Ne pas bloquer
            </div>
        </div>

        <div class="h-24"></div>

<!--MENU-->
    
        <div class="fixed bottom-0 left-0 right-0 w-11/12 h-20 mx-auto my-4 py-2 font-arial bg-white text-gray-500 text-sm border border-gray-500 rounded-3xl">      
        <nav class="flex w-full h-full align-center">
            
            <RouterLink to="/" class="flex w-1/4 h-full flex-col items-center justify-center">
            <BoussoleGrayIcon class="w-auto h-6 mb-2" />
            Découvrire
            </RouterLink>

            <RouterLink to="/enregistre" class="flex w-1/4 h-full flex-col items-center justify-center">
            <EnregistreWhiteIcon class="w-auto h-6 mb-2" />
            Enregistré
            </RouterLink>

            <RouterLink to="/Amis" class="flex w-1/4 h-full flex-col items-center justify-center text-green-550 font-bold">
            <FriendsGreenIcon class="w-auto h-6 mb-2" />
            Amis
            </RouterLink>

            <RouterLink to="/profil" class="flex w-1/4 h-full flex-col items-center justify-center">
            <AvatarGrayIcon class="w-auto h-6 mb-2" />
            Profil
            </RouterLink>
        </nav>
        </div>
</form> 


</template>

<script>

import BoussoleGrayIcon from "../components/icons/boussoleGray.vue";
import EnregistreWhiteIcon from "../components/icons/enregistrementWhite.vue";
import FriendsGreenIcon from "../components/icons/friendsGreen.vue";
import AvatarGrayIcon from "../components/icons/avatarGray.vue";

import photoVue from "../components/icons/photo.vue";
import noteVue from "../components/icons/note.vue";
import starsVue from "../components/icons/stars.vue";
import BoxVue from "../components/icons/box.vue";
import medaillesVue from "../components/icons/medailles.vue";
import FriendsVue from "../components/icons/friends.vue";
import Friends from "../components/icons/friends2.vue";

import{
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js"

import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadBytes,
    uploadString,
    deleteObject,
    listAll } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
  name: 'ProfilAmiView',
  components: { BoussoleGrayIcon, EnregistreWhiteIcon, FriendsGreenIcon, AvatarGrayIcon, 
                photoVue, noteVue, starsVue, BoxVue, medaillesVue, FriendsVue, Friends },

  data(){
    return{
      Ami:{
          prenom: null,
          Nom: null,
          avata: null,
          banniere: null,
          Note: null,
          Nbr_match_joue: null,
          Nbr_match_organise: null,
          medailles: null,
      },
      Avatar:null,
      Banniere:null,

      PopUp: false,
    }
  },

  mounted(){
    console.log("id Amis", this.$route.params.id);
    this.getAmi(this.$route.params.id);
  },

  methods: {

    async getAmi(id){
        const firestore = getFirestore();
        const docRef = doc(firestore, "Amis", id);
        this.refAmi = await getDoc(docRef);

        if(this.refAmi.exists()){
            this.Ami = this.refAmi.data();
            this.Avatar = this.Ami.avatar;
            this.Banniere = this.Ami.banniere;
        }
        else{
            console.log("Ami inexistant");
        }
        const storage = getStorage();
        const spaceRef = ref(storage, 'avatar/'+this.Ami.avatar);
        getDownloadURL(spaceRef)
        .then((url) => {
            this.Avatar = url;
        })
        const spaceRef2 = ref(storage, 'banniere/'+this.Ami.banniere);
        getDownloadURL(spaceRef2)
        .then((url) => {
            this.Banniere = url;
        })
        .catch((error) =>{
            console.log('erreur downloadUrl', error);
        })
    },

    async deleteAmi(){
        const firestore = getFirestore();
        await deleteDoc(doc(firestore, "Amis", this.$route.params.id));

        const storage = getStorage();
        let docRef = ref(storage, 'avatar/'+this.Ami.avatar);
        deleteObject(docRef);
        let docRef2 = ref(storage, 'banniere/'+this.Ami.banniere);
        deleteObject(docRef2);

        this.$router.push('/Amis');       
    }
  },
}
</script>

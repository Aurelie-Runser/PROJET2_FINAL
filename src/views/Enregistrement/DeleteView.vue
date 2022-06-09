<template>
    <div class="p-5">
        <h1 class="font-arial text-2xl mb-5">Ajout d'un terrain dans Favories</h1>
        <form @submit.prevent="deleteTerrain">

            <EnregistreCarteTerrain
                :nom="Terrains.nom"
                :adresse="Terrains.adresse"
                :note="Terrains.note"
                :distance="Terrains.distance"
                :image="imgActuelle"/>            

            <div class="my-14 flex flex-wrap items-center justify-center gap-10">

                <p class="bg-red-300 p-5 flex-none w-full text-center text-xl">Attention, cet action est irréversible !</p>

                <button type="submit" 
                    class="block w-max h-max p-5 bg-red-550 text-white font-arial font-bold text-xl rounded-xl shadow-md">   
                    Supprimer le terrain
                </button>

                <RouterLink to="/modifEnregistre">
                    <button class="block
                            w-max
                            p-5
                            bg-white
                            border-2 border-green-550
                            rounded-xl
                            shadow-md shadow-gray-300
                            font-arial font-bold
                            text-xl text-center">   
                        Annuler
                    </button>
                </RouterLink>

            </div>
        </form>

        <div class="h-24"></div>

<!--Menu-->
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

import EnregistreCarteTerrain from "../../components/EnregistreCarteTerrain.vue";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadBytes,
    uploadString,
    deleteObject,
    listAll } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
  name: "EnregistreView",
  components: {
    BoussoleGrayIcon,
    EnregistreGreenIcon,
    FriendsGrayIcon,
    AvatarGrayIcon,

    EnregistreCarteTerrain,
  },

  data() {
    return {
        Terrains:{
            nom: null,
            adresse: null,
            note: null,
            distance: null,
            photo: null
        },
        refTerrains: null,
        imgActuelle: null,
    };
  },

  mounted() {
    this.getTerrains(this.$route.params.id);
  },

  methods: {
    async getTerrains(id){
        const firestore = getFirestore();
        const docRef = doc(firestore, "Terrains", id);
        this.refTerrain = await getDoc(docRef);
        if(this.refTerrain.exists()){
            this.Terrains = this.refTerrain.data();
            this.imgActuelle = this.Terrains.photo;
        }
        else{
            this.console.log("Terrain inexistant");
        }
        const storage = getStorage();
        const spaceRef = ref(storage, 'terrains/'+this.Terrains.photo);
        getDownloadURL(spaceRef)
        .then((url) => {
            this.imgActuelle = url;
        })
        .catch((error) =>{
            console.log('erreur downloadUrl', error);
        })
    },

    async deleteTerrain(){
        const firestore = getFirestore();
        await deleteDoc(doc(firestore, "Terrains", this.$route.params.id));

        const storage = getStorage();
        let docRef = ref(storage, 'terrains/'+this.Terrains.photo);
        deleteObject(docRef);

        this.$router.push("/modifEnregistre");     
    }
  },  
  
};
</script>

<template>
    <div class="p-5 max-w-5xl mx-auto">
        <h1 class="font-arial text-2xl mb-5">Modification du terrain</h1>
        <form @submit.prevent="updateTerrain">
            <input type="text"
                    class="border-2 border-green-550 mx-5 my-3 px-3 py-2"
                    placeholder="Nom du terrain"
                    v-model="Terrains.nom"
                    required />

            <input class="border-2 border-green-550 mx-5 my-3 px-3 py-2"
                    placeholder="Adresse du terrain"
                    v-model="Terrains.adresse"
                    required />
            
            <input type="text"
                    class="border-2 border-green-550 mx-5 my-3 px-3 py-2"
                    placeholder="Note du terrain"
                    v-model="Terrains.note"
                    required />
            
            <input type="text"
                    class="border-2 border-green-550 mx-5 my-3 px-3 py-2"
                    placeholder="Distance jusqu-au terrain"
                    v-model="Terrains.distance"
                    required />

            <input type="file"
                    class="block my-12 w-full h-max"
                    ref="file"
                    id="file"
                    @change="previewImage" >

            <div class="mx-5 w-60 h-60 flex items-center justify-center border-2 border-black"> 
                <img class="object-cover" :src="imgData" alt="photo que vous devez rentrer"/>
            </div>

            <div class="my-14 flex flex-wrap items-center justify-center gap-10">

                <button type="submit" 
                    class="block w-max h-max p-5 bg-green-450 text-white font-arial font-bold text-xl rounded-xl shadow-md">   
                    Modifier le terrain
                </button>

                <RouterLink to="/modifEnregistre">
                    <button class="block
                            w-max
                            p-5
                            bg-white
                            border-2 border-red-550
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

import carteTerrainPlus from "../../components/carteTerrainPlus.vue";

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
  name: "EnregistreView",
  components: {
    BoussoleGrayIcon,
    EnregistreGreenIcon,
    FriendsGrayIcon,
    AvatarGrayIcon,

    carteTerrainPlus,
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
        imgData: null,
        refTerrains: null,
        imgModifie:false,
        imgActuelle: null,
    };
  },

  mounted(){
    this.getTerrain(this.$route.params.id);
  },

  methods: {

    async getTerrain(id){
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
            this.imgData = url;
        })
        .catch((error) =>{
            console.log('erreur downloadUrl', error);
        })
    },

    previewImage: function(event) {
        this.file = this.$refs.file.files[0];
        this.Terrains.photo = this.file.name;
        this.imgModifie = true;
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.imgData = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);        
        }
    },

    async updateTerrain(){
            if(this.imgModifie){
                const storage = getStorage();
                let docRef = ref(storage, 'Terrains/'+this.imgActuelle);
                deleteObject(docRef);
                docRef = ref(storage, 'terrains/'+this.Terrains.photo);
                await uploadString(docRef, this.imgData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.Terrains.photo);                
                });                   
            }
            const firestore = getFirestore();
            await updateDoc(doc(firestore, "Terrains", this.$route.params.id), this.Terrains);
            this.$router.push("/modifEnregistre");        
        }
  },
};
</script>

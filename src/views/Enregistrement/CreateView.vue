<template>
    <div class="p-5 max-w-5xl mx-auto">
        <h1 class="font-arial text-2xl mb-5">Ajout d'un terrain dans Favories</h1>
        <form @submit.prevent="createTerrain">
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
                    Ajouter le terrain
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
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";


export default {
  name: "EnregistreView",
  components: {
    BoussoleGrayIcon,
    EnregistreGreenIcon,
    FriendsGrayIcon,
    AvatarGrayIcon,
  },

  data() {
    return {
        imgData: null,
        Terrains:{
            nom: null,
            adresse: null,
            note: null,
            distance: null,
            photo: null
        }
    };
  },

  mounted() {
    this.getTerrains();
  },

  methods: {
    async getTerrains() {
      const firestore = getFirestore();
      const dbTerrains = collection(firestore, "Terrains");
      const query = await onSnapshot(dbTerrains, (snapshot) => {
        this.listeTerrains = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.listeTerrains.forEach(function (terrain) {
          const storage = getStorage();
          const spaceRef = ref(storage, "terrains/" + terrain.photo);
          getDownloadURL(spaceRef)
            .then((url) => {
              terrain.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },

    previewImage: function(event) {
            this.file = this.$refs.file.files[0];
            this.Terrains.photo = this.file.name;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imgData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);        
            }
        },

    async createTerrain(){
            const storage = getStorage();
            const refStorage = ref(storage, 'terrains/'+this.Terrains.photo);
            await uploadString(refStorage, this.imgData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'Terrains'), this.Terrains );
            });
            this.$router.push("/modifEnregistre");           
        }
  },  
  
};
</script>

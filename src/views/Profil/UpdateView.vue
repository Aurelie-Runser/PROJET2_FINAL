<template>
  <div class="max-w-5xl mx-auto">
    <div class="w-auto h-12 bg-gray-500">
      <p class="text-center text-[22.000993728637695px] font-bold italic text-black">
        PUB
      </p>
    </div>

    <h1 class="mx-5 my-5 text-xl font-arial font-bold">Modification profil</h1>

    <form @submit.prevent="updateProfil">

        <div class="m-5">
            <h2 class="mx-5 my-3 text-lg font-arial font-bold">Bannière</h2>

            <div class="mx-auto w-11/12 aspect-video md:aspect-[9/3] rounded-2xl overflow-hidden">
                <img class="w-full object-cover" alt="banniere" :src="banniereData"/>
            </div>
            <input type="file"
                    class="mx-3 my-5" 
                    ref="file"
                    id="file"
                    @change="previewBanniere">
        </div>
    
        <div class="m-5">
            <h2 class="mx-5 my-5 text-lg font-arial font-bold">Photo de profil</h2>
            
            <div class="rounded-full overflow-hidden mx-auto w-32 h-32">
                <img class="h-full object-cover" :src="avatarData" alt="avatar" />
            </div>
            <input type="file"
                    class="mx-3 my-5"
                    ref="file"
                    id="file"
                    @change="previewAvatar">
        </div>
    
        <div class="m-5 flex flex-col">
            <h2 class="mx-5 my-5 text-lg font-arial font-bold">Prénom, Nom et Description</h2>

            <input class="border-2 border-green-550 my-3 px-3 py-2"
                    placeholder="Votre prénom"
                    v-model="Profils.prenom"
                    required /> 

            <input class="border-2 border-green-550 my-3 px-3 py-2"
                    placeholder="Votre Nom"
                    v-model="Profils.Nom"
                    required /> 
        
            <textarea
            name="DescriptionProfil"
            id="DescriptionProfil"
            cols="30"
            rows="5"
            required
            placeholder="Ajouter description ✏️"
            autocomplete="off"
            class="border-2 border-green-550 my-3 px-3 py-2"
            v-model="Profils.description">
            </textarea>
        </div>

        <button class="block mx-auto my-5 p-3 bg-green-450 rounded-xl shadow-lg font-arial font-bold text-xl text-white text-center"
                   type="submit">
                Modifier
            </button>

    </form>


    <div class="h-24"></div>

    <!--MENU-->

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
          Découvrir
        </RouterLink>

        <RouterLink
          to="/enregistre"
          class="flex w-1/4 h-full flex-col items-center justify-center"
        >
          <EnregistreWhiteIcon class="w-auto h-6 mb-2" />
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
          <AvatarGreenIcon class="w-auto h-6 mb-2" />
          Profil
        </RouterLink>
      </nav>
    </div>
  </div>
</template> 


<script>
import BoussoleGrayIcon from "../../components/icons/boussoleGray.vue";
import EnregistreWhiteIcon from "../../components/icons/enregistrementWhite.vue";
import FriendsGrayIcon from "../../components/icons/friendsGray.vue";
import AvatarGreenIcon from "../../components/icons/avatarGreen.vue";

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
  name: "UpdateView",
  components: {
    BoussoleGrayIcon,
    EnregistreWhiteIcon,
    FriendsGrayIcon,
    AvatarGreenIcon,
  },

  data(){
    return{
        avatarData: null,
        banniereData: null,
        Profils:{
            prenom: null,
            Nom: null,
            description: null,
            avatar: null,
            banniere: null,
        },

        refProfil: null,

        avatarModifie: false,
        banniereModifie: false,
        avatarActuelle: null,
        banniereActuelle: null,
    }
  },

  mounted(){
    this.getProfils(this.$route.params.id);
  },

  methods: {

    async getProfils(id){
        const firestore = getFirestore();
        const docRef = doc(firestore, "Profils", id);
        this.refProfil = await getDoc(docRef);
        if(this.refProfil.exists()){
            this.Profils = this.refProfil.data();
            this.avatarActuelle = this.Profils.avatar;
            this.banniereActuelle = this.Profils.banniere;
        }
        else{
            this.console.log("Groupe inexistant");
        }
        const storage = getStorage();
        const spaceRef = ref(storage, 'avatar/'+this.Profils.avatar);
        getDownloadURL(spaceRef)
        .then((url) => {
            this.avatarData = url;
        })
        .catch((error) =>{
            console.log('erreur downloadUrl', error);
        })
        const spaceRef2 = ref(storage, 'banniere/'+this.Profils.banniere);
        getDownloadURL(spaceRef2)
        .then((url) => {
            this.banniereData = url;
        })
        .catch((error) =>{
            console.log('erreur downloadUrl', error);
        })
    },

    previewAvatar: function(event) {
        this.file = this.$refs.file.files[0];
        this.Profils.avatar = this.file.name;
        this.avatarModifie = true;
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.avatarData = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);        
        }
    },

    previewBanniere: function(event) {
        this.file = this.$refs.file.files[0];
        this.Profils.banniere = this.file.name;
        this.banniereModifie = true;
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.banniereData = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);        
        }
    },


    async updateProfil(){
            if(this.avatarModifie){
                const storage = getStorage();
                let docRef = ref(storage, 'avatar/'+this.avatarActuelle);
                deleteObject(docRef);
                docRef = ref(storage, 'avatar/'+this.Profils.avatar);
                await uploadString(docRef, this.avatarData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.Profils.avatar);                
                });                   
            }
            if(this.banniereModifie){
                const storage = getStorage();
                let docRef = ref(storage, 'banniere/'+this.banniereActuelle);
                deleteObject(docRef);
                docRef = ref(storage, 'banniere/'+this.Profils.banniere);
                await uploadString(docRef, this.banniereData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.Profils.banniere);                
                });                   
            }
            const firestore = getFirestore();
            await updateDoc(doc(firestore, "Profils", this.$route.params.id), this.Profils);
            this.$router.push("/profil");        
        }
  },

};
</script>

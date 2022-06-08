<template>
  <div class="max-w-5xl m-auto">
    <div class="w-auto h-12 bg-gray-500">
      <p class="text-center text-[22.000993728637695px] font-bold italic text-black">
        PUB
      </p>
    </div>

    <form>

        <div class="w-full aspect-video md:aspect-[9/3] rounded-2xl overflow-hidden">
            <img class="object-cover" alt="banniere" :src="banniereData"/>

            <input type="file" class="block my-12 w-full h-max" ref="file" id="file"
                                @change="previewImage" >
        </div>

        <div class="w-max">
            <div class="relative rounded-full overflow-hidden w-24 h-24">
            <img class="h-full object-cover" :src="avatarData" alt="avatar" />
            </div>
            <input type="file" class="block my-12 w-full h-max" ref="file" id="file"
                                @change="previewImage" >
        </div>
    

        <h2 class="text-center mt-14 mb-5 text-3xl font-medium">{{Profils.prenom}} {{Profils.Nom}}</h2>

        <input class="block my-12 w-full h-max" placeholder="Votre prénom"
                                v-model="Profils.prenom"
                                required /> 

        <input class="block my-12 w-full h-max" placeholder="Votre prénom"
                                v-model="Profils.Nom"
                                required /> 

        <textarea
        name="DescriptionProfil"
        id="DescriptionProfil"
        cols="35"
        rows="5"
        required
        placeholder="Ajouter description ✏️"
        autocomplete="off"
        class="border-b border-b-gray-500 mx-5 my-5 py-2"
        v-model="Profils.desciption">
        </textarea>

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
          to="/"
          class="flex w-1/4 h-full flex-col items-center justify-center"
        >
          <BoussoleGrayIcon class="w-auto h-6 mb-2" />
          Découvrire
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
    },

    previewImage: function(event) {
        this.file = this.$refs.file.files[0];
            // Récupérer le nom du fichier pour la photo du participant
        this.Profils.avatar = this.file.name;
            // Si cette fonction s'exécute, c'est que l'image est modifiée 
        this.avatarModifie = true;
            // Reference du fichier à prévisualiser
        var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.avatarData = e.target.result;
            }
               // Demarrage du reader pour la transformer en data URL (format base 64) 
            reader.readAsDataURL(input.files[0]);        
        }
    },
  },

};
</script>

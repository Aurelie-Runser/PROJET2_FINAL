<template>
  <div>
    <label class="block mt-10 pl-2 pr-2">
      <input
        type="search"
        name="searchbar"
        class="
          mt-1
          px-3
          py-2
          bg-white
          border
          shadow-sm
          border-slate-300
          placeholder-slate-400
          focus:outline-none focus:border-green-500 focus:ring-green-500
          block
          w-full
          rounded-xl
          sm:text-sm
          focus:ring-1"
        placeholder="Votre recherche"
        v-model="query">
    </label>

    <h2 class="mt-7 ml-7">Connectés</h2>
    <div  v-for="a in listeAmisSearch" :key="a.id"
          class="grid mt-10 grid-cols-1">

      <RouterLink :to="{name:'ProfilAmiView', params:{id:a.id}}">
        <Friends2 :image="a.avatar" :txt="a.prenom+' '+a.Nom" />
      </RouterLink>
    </div>

    <h2 class="mt-7 ml-7">Hors Ligne</h2>
    <div class="grid mt-10 grid-cols-1">
      <FriendsHL image="/public/images/Paul2.png" txt="Judie Winehouse " />
      <FriendsHL1
        image="/public/images/Nathanael.png"
        txt="Christopher Mccandless "
      />
    </div>

    <h2 class="mt-7 ml-7">En attente</h2>
    <div class="grid mt-10 grid-cols-1">
      <FriendsAttente image="/public/images/Thomas.png" txt="Thomas Alonzo" />
    </div>

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
          <FriendsGreenIcon class="w-auto h-6 mb-2" />
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
import BoussoleGrayIcon from "../components/icons/boussoleGray.vue";
import EnregistreWhiteIcon from "../components/icons/enregistrementWhite.vue";
import FriendsGreenIcon from "../components/icons/friendsGreen.vue";
import AvatarGrayIcon from "../components/icons/avatarGray.vue";

import Friends2Vue from "../components/icons/photo.vue";
import Friends2 from "../components/icons/friends2.vue";
import FriendsHLVue from "../components/icons/friendsHL.vue";
import FriendsHL from "../components/icons/friendsHL.vue";
import FriendsHL1 from "../components/icons/friendsHL.vue";
import FriendsAttente from "../components/icons/friendsAttente.vue";

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
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js"


export default {
  name: "HomeView",
  components: {
    BoussoleGrayIcon, EnregistreWhiteIcon, FriendsGreenIcon, AvatarGrayIcon,

    Friends2Vue, Friends2, FriendsHLVue, FriendsHL, FriendsHL1, FriendsAttente,
  },

  data(){
    return{
      listeAmis:[],
      query:"",
    }
  },

  computed:{
    orderByName:function(){
      return this.listeAmis.sort(function(a,b){
        if(a.prenom < b.prenom) return -1;
        if(a.prenom > b.prenom) return 1;
        return 0;
      });
    },
    listeAmisSearch:function(){
      if(this.query.length > 0){
        let query = this.query.toLowerCase();
        return this.orderByName.filter(function(a){
          return a.prenom.toLowerCase().includes(query);
        })
      }
      else{
        return this.orderByName;
      }
    }
  },

  mounted(){
    this.getAmis();
  },

  methods: {

    async getAmis() {
    const firestore = getFirestore();
    const dbAmis = collection(firestore, "Amis");
    const query = await onSnapshot(dbAmis, (snapshot) => {
        console.log("query", query);
      this.listeAmis = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      this.listeAmis.forEach(function (ami) {
        const storage = getStorage();
        const spaceRef = ref(storage, "avatar/" + ami.avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            ami.avatar = url;
            console.log("Ami", ami);
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
        });
        console.log("listeAmis", this.listeAmis);
      });
    },
  },
};
</script>

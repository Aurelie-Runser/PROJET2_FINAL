<template>
  <div class="ml-5 mt-9">
    <p class="text-xl font-arial font-bold">Enregistrés récemment</p>

    <slider />

    <p class="text-base mt-7 font-arial font-bold">
      Favories
    </p>

    <div class="py-2 flex flex-row overflow-x-scroll">

        <PetitCarteTerrain v-for="t in listeTerrains" :key="t.id"
          class="flex-none"
          :nom="t.nom"
          :note="t.note"
          :distance="t.distance"
          :image="t.photo"/>

  </div>

    <hr class="border-gray-600 w-11/12 mt-5" />

    <div class="grid grid-cols-2">
      <p class="text-base font-arial font-bold">Vos listes</p>
      <div class="justify-center">
        <plusgreen class="inline align-top pt-1" />

        <RouterLink to="/creerEnregistre">
          <button class="text-base inline text-green-550 font-arial">
            Ajouter une liste
          </button>
        </RouterLink>
      </div>

      <RouterLink to="/modifEnregistre">
        <button class="text-left">
          <p class="font-arial mt-2">Favories</p>
          <p class="text-xs font-bold text-gray-500 inline">
            Modifer ✏️
          </p>
        </button>
      </RouterLink>
    </div>

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

import slider from "../../components/SliderView.vue";
import PetitCarteTerrain from "../../components/PetitCarteTerrain.vue";
import plusgreen from "../../components/icons/plusgreen.vue";

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
    slider,
    BoussoleGrayIcon,
    EnregistreGreenIcon,
    FriendsGrayIcon,
    AvatarGrayIcon,
    PetitCarteTerrain,
    plusgreen,
  },

  data() {
    return {
      listeTerrains: [],
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
        console.log("query", query);
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
              console.log("Terrain", terrain);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        console.log("listeTerrains", this.listeTerrains);
      });
    },
  },  
  
};
</script>

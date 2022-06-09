<template>
    <div class="max-w-6xl m-auto">

        <RouterLink to="/enregistre">
            <flecheRetour class="m-5"/>
        </RouterLink>

        <h1 class="m-5 text-xl font-arial font-bold">Favories</h1>

        <RouterLink to="/createEnregistre" class="block w-max">
          <button class="block
          w-max
          h-max
          p-5
          mx-10
          bg-green-450
          text-white
          font-arial font-bold
          text-base
          uppercase
          rounded-xl
          shadow-md
          hover:bg-green-550 hover:shadow-lg
          focus:bg-green-550 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-550 active:shadow-lg
          transition
          duration-150
          ease-in-out">   
            Ajouter un terrain
          </button>
        </RouterLink>

        <hr class="border-gray-500 w-11/12 mt-5 mx-auto" />

        <div class="mx-auto w-max my-10 flex flex-col lg:flex-row lg:flex-wrap lg:w-full gap-5">
            <div v-for="t in listeTerrains" :key="t.id"
            class="flex flex-col items-end">
              <EnregistreCarteTerrain
                  class="flex-none"
                  :nom="t.nom"
                  :adresse="t.adresse"
                  :note="t.note"
                  :distance="t.distance"
                  :image="t.photo"/>

              <div class="mt-1 flex flex-row gap-2">
                <RouterLink  :to="{ name: 'UpdateEnregistre', params: { id: t.id } }">
                  <p class="border border-green-550 rounded-xl shadow-md p-1.5 text-xl">✏️</p>
                </RouterLink>
                <RouterLink  :to="{ name: 'DeleteEnregistre', params: { id: t.id } }">
                  <buttonMoinsTerrain class="w-14 h-14"/>
                </RouterLink>
              </div>
            </div>
        </div>

    <!--MENU-->
    <div class="h-28"></div>

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

import flecheRetour from "../../components/icons/flecheRetour.vue";
import EnregistreCarteTerrain from "../../components/EnregistreCarteTerrain.vue";
import buttonMoinsTerrain from "../../components/icons/buttonMoinsTerrain.vue";

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
  name: "ModifEnregistreView",
  components: {
    BoussoleGrayIcon,
    EnregistreGreenIcon,
    FriendsGrayIcon,
    AvatarGrayIcon,

    flecheRetour,
    EnregistreCarteTerrain,
    buttonMoinsTerrain
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
  }, 
};
</script>

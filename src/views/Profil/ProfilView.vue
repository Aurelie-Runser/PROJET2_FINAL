<template>
  <div v-for="p in listeProfils" :key="p.id" class="max-w-5xl m-auto">
    <div class="w-auto h-12 bg-gray-500">
      <p
        class="
          text-center text-[22.000993728637695px]
          font-bold
          italic
          text-black
        "
      >
        PUB
      </p>
    </div>

    <div class="relative mt-9 w-11/12 mx-auto ml-auto">
      <div
        class="w-full aspect-video md:aspect-[9/3] rounded-2xl overflow-hidden"
      >
        <img class="object-cover" alt="banniere" :src="p.banniere" />
      </div>
      <RouterLink :to="{ name: 'UpdateProfil', params: { id: p.id } }">
        <photo-vue class="absolute -bottom-2 -right-1" />
      </RouterLink>

      <div class="w-max absolute left-0 right-0 mx-auto -bottom-10">
        <div class="relative w-24 h-24">
          <img
            class="h-full rounded-full object-cover"
            :src="p.avatar"
            alt="avatar"
          />
          
          <RouterLink :to="{ name: 'UpdateProfil', params: { id: p.id } }">
            <photo-vue class="absolute right-0 bottom-0" />
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center gap-3 mt-14 mb-5">
      <h2 class="text-3xl font-medium">
        {{ p.prenom }} {{ p.Nom }}
      </h2>

      <RouterLink :to="{ name: 'UpdateProfil', params: { id: p.id } }">
        <button class=" text-xl font-medium">✏️</button>
      </RouterLink>
    </div>

    <noteVue>{{ p.Note }}</noteVue>

    <div class="m-5">
      <p class="text-lg">{{ p.description }}</p>

      <RouterLink :to="{ name: 'UpdateProfil', params: { id: p.id } }">
        <button class="text-xl font-medium">✏️</button>
      </RouterLink>
    </div>

    <div class="grid grid-cols-3 justify-center">
      <BoxVue :nbr="p.Nbr_match_organise" texte="Match organisés " />
      <BoxVue :nbr="p.Nbr_match_joue" texte="Match joué " />
      <BoxVue nbr="5" texte="Médailles" />
    </div>

    <h2 class="mt-10 ml-3 text-3xl font-medium">Médailles</h2>

    <div class="grid grid-cols-3">
      <medaillesVue image="/images/medailles1.png" txt="Homme du match"/>
      <medaillesVue image="/images/blocnote.png" txt="Organisateur né" />
      <medaillesVue image="/images/trophee1.png" txt="Précurseur" />
    </div>

    <h2 class="mt-9 mb-6 ml-3 text-3xl font-medium">Amis</h2>
    <div class="grid gap-3 grid-cols-1">
      <Friends image="/images/Paul2.png" txt="Paul Montavon" />
      <Friends image="/images/TheoDumont.jpg" txt="Theo Dumont" />
      <Friends image="/images/Nathanael.png" txt="Nathanaël Desmeules" />
      <Friends image="/images/Claire.webp" txt="Claire Chateau"/>
      <Friends image="/images/Marion.jpg" txt="Marion Comeira" />
    </div>

    <RouterLink to="/" class="block w-max mx-auto my-10">
      <button @click="onDcnx()"
          class="
          flex-none
          mx-auto
          w-max
          p-4
          bg-white
          border-2 border-red-550
          rounded-xl
          shadow-md shadow-gray-300
          font-arial font-bold
          text-xl text-center
        "
      >
        Se déconnecter
      </button>
    </RouterLink>

    <div class="mt-4 mb-2 flex justify-center">
      <RouterLink to="/mentionlegale">
        <div class="px-2 font-arial font-bold">Mention legales</div>
      </RouterLink>
      <p->-</p->
      <RouterLink to="/contact">
        <div class="px-2 font-arial font-bold">Contact</div>
      </RouterLink>
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

import photoVue from "../../components/icons/photo.vue";
import noteVue from "../../components/icons/note.vue";
import starsVue from "../../components/icons/stars.vue";
import BoxVue from "../../components/icons/box.vue";
import medaillesVue from "../../components/icons/medailles.vue";
import FriendsVue from "../../components/icons/friends.vue";
import Friends from "../../components/icons/friends2.vue";

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

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import {emitter} from "../../main.js";

export default {
  name: "ProfilView",
  components: {
    BoussoleGrayIcon,
    EnregistreWhiteIcon,
    FriendsGrayIcon,
    AvatarGreenIcon,

    photoVue,
    noteVue,
    starsVue,
    BoxVue,
    medaillesVue,
    FriendsVue,
    Friends,
  },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      listeProfils: [],
    };
  },

  mounted() {
    this.getProfils();
  },

  methods: {
    async getProfils() {
      const firestore = getFirestore();
      const dbProfils = collection(firestore, "Profils");
      const query = await onSnapshot(dbProfils, (snapshot) => {
        this.listeProfils = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.listeProfils.forEach(function (profil) {
          const storage = getStorage();
          const spaceRef = ref(storage, "avatar/" + profil.avatar);
          getDownloadURL(spaceRef)
            .then((url) => {
              profil.avatar = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });

          const spaceRef2 = ref(storage, "banniere/" + profil.banniere);
          getDownloadURL(spaceRef2)
            .then((url) => {
              profil.banniere = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },

    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          console.log("deconecter");
          emitter.emit("deConnectUser", {user: this.user})
          this.message = "Vous n'êtes pas connecté";
          this.user = {
            email: null,
            password: null,
          };
        })
        .catch((error) => {
          console.log("Erreur déconnexion ", error);
        });
    }
  },
};
</script>

<template>
  <div class="max-w-5xl m-auto">
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
      <img
        class="w-full aspect-video md:aspect-[9/3] rounded-2xl"
        alt="banniere"
        src="../../public/images/banniere__profile.jpg"
      />
      <photo-vue class="absolute -bottom-2 -right-1" />

      <div class="w-max absolute left-0 right-0 mx-auto -bottom-10">
        <div class="relative">
          <img class="w-24" src="../../public/images/homme.png" alt="avatar" />
          <photo-vue class="absolute right-0 bottom-0" />
        </div>
      </div>
    </div>

    <h2 class="text-center mt-14 mb-5 text-3xl font-medium">Antoine Perez</h2>

    <noteVue> 4.5 </noteVue>

    <textarea
      name="regleMatch"
      id="regleMatch"
      cols="35"
      rows="1"
      required
      placeholder="Ajouter description ✏️"
      autocomplete="off"
      class="border-b border-b-gray-500 mx-5 my-5 py-2"
    ></textarea>

    <div class="grid grid-cols-3 justify-center">
      <BoxVue nbr="19" texte="Match organisés " />
      <BoxVue nbr="34" texte="Match joué " />
      <BoxVue nbr="21" texte="Médailles" />
    </div>

    <h2 class="mt-10 ml-3 text-3xl font-medium">Médailles ✏️</h2>

    <div class="grid grid-cols-3">
      <medaillesVue
        image="/public/images/medailles1.png"
        txt="Homme du match  "
      />
      <medaillesVue image="public/images/blocnote.png" txt="Organisateur né " />
      <medaillesVue image="/public/images/trophee1.png" txt="Précurseur   " />
    </div>

    <h2 class="mt-9 mb-6 ml-3 text-3xl font-medium">Amis ✏️</h2>
    <div class="grid gap-3 grid-cols-1">
      <Friends image="/public/images/Paul2.png" txt="Paul Montavon" />
      <Friends image="/public/images/Judie.png" txt="Judie Winehouse " />
      <Friends image="/public/images/Nathanael.png" txt="Nathanaël Desmeules" />
      <Friends
        image="/public/images/Christopher.png"
        txt="Christopher Mccandless "
      />
      <Friends image="/public/images/Marion.png" txt="Marion Comeira" />
    </div>

    <RouterLink to="/connexion" class="block w-max mx-auto my-10">
      <button
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
import BoussoleGrayIcon from "../components/icons/boussoleGray.vue";
import EnregistreWhiteIcon from "../components/icons/enregistrementWhite.vue";
import FriendsGrayIcon from "../components/icons/friendsGray.vue";
import AvatarGreenIcon from "../components/icons/avatarGreen.vue";

import photoVue from "../components/icons/photo.vue";
import noteVue from "../components/icons/note.vue";
import starsVue from "../components/icons/stars.vue";
import BoxVue from "../components/icons/box.vue";
import medaillesVue from "../components/icons/medailles.vue";
import FriendsVue from "../components/icons/friends.vue";
import Friends from "../components/icons/friends2.vue";

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
};
</script>

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
          focus:ring-1
        "
        placeholder="   Votre recherche"
      />
    </label>

    <h2 class="mt-7 ml-7">Connecté (3)</h2>
    <div class="grid mt-10 grid-cols-1">
      <RouterLink to="/profilAmi">
        <Friends2 image="/public/images/Paul2.png" txt="Paul Montavon " />
      </RouterLink>

      <Friends2 image="/public/images/Nathanael.png" txt="Nathanaël Desmeules"/>
      <Friends2 image="/public/images/Marion.png" txt="Marion Comeira" />
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

export default {
  name: "HomeView",
  components: {
    BoussoleGrayIcon,
    EnregistreWhiteIcon,
    FriendsGreenIcon,
    AvatarGrayIcon,
    Friends2Vue,
    Friends2,
    FriendsHLVue,
    FriendsHL,
    FriendsHL1,
    FriendsAttente,
  },

  data() {
    return {};
  },
};
</script>

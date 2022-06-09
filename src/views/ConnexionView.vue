<template>
  <div class="max-w-5xl mx-auto">
    <img
      class="mx-auto w-[35vw]"
      src="/images/logo.png"
      alt="logo de notre projet"
    />

    <form class="w-11/12 mx-auto mt-10" @submit.prevent="onCnx">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-Beige-150
              mt-2
              text-xs
              font-bold
              mb-2
            "
            for="grid-first-name"
          >
            Adresse Email
          </label>
          <input
            v-model="user.email"
            id="grid-first-name"
            type="email"
            required
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-noir
              mt-2
              border border-gray-500
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white
            "
          />

          <p class="text-red-500 text-xs italic">
            Veuillez renseigner ce champs.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="relative w-full px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-Beige-150
              -mt-4
              text-xs
              font-bold
              mb-2
            "
            for="grid-first-name"
          >
            Mot de passe
          </label>
          <input
            v-model="user.password"
            required
            id="grid-first-name"
            :type="type"
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-noir
              mt-2
              border border-gray-500
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white
            "
          />

          <p class="text-red-500 text-xs italic">
            Veuillez renseigner ce champs.
          </p>

          <eyeIcon class="absolute top-4 right-5"
                    @click.prevent="affiche()"/>
        </div>
      </div>

      <div class="-mt-6">
        <div class="form-check">
          <input
            class="
              flex
              justify-start
              ml-10
              lg:ml-16
              form-check-input
              appearance-none
              h-4
              w-4
              border border-gray-600
              rounded-sm
              bg-white
              checked:bg-green-550 checked:border-green-550
              focus:outline-none
              transition
              duration-200
              mt-1
              align-top
              bg-no-repeat bg-center bg-contain
              float-left
              mr-2
              cursor-pointer
            "
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />

          <div class="lg:mt-10">
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            >
              Se souvenir de moi
            </label>
          </div>
        </div>
      </div>

      <div
        class="
          mx-auto
          my-5
          p-3
          w-max
          border-2
          rounded-xl
          text-lg
          font-arial
          border-green-550
          text-center text-green-550
        "
      >
        <p>{{ message }}</p>
      </div>

      <button
        type="submit"
        class="
          block
          w-max
          h-max
          p-5
          mx-auto
          my-10
          bg-green-450
          text-white
          font-arial font-bold
          text-xl
          uppercase
          rounded-xl
          shadow-md
          hover:bg-green-550 hover:shadow-lg
          focus:bg-green-550 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-550 active:shadow-lg
          transition
          duration-150
          ease-in-out
        "
      >
        Se connecter
      </button>

      <RouterLink to="/profil">
        <button
          class="
            block
            w-max
            h-max
            p-5
            mx-auto
            my-10
            bg-green-450
            text-white
            font-arial font-bold
            text-xl
            uppercase
            rounded-xl
            shadow-md
            hover:bg-green-550 hover:shadow-lg
            focus:bg-green-550 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-green-550 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Aller sur mon profil
        </button>
      </RouterLink>

      <div class="mt-4 flex justify-center">
        <RouterLink class="mx-2" to="/mentionlegale"> S'inscrire </RouterLink>
        <p>|</p>
        <RouterLink class="mx-2" to="/mentionlegale">
          <p class="pb-12">Mot de passe oublié</p>
        </RouterLink>
        <p>|</p>
        <RouterLink class="mx-2" to="/contact">
          <p class="pb-12">Contact</p>
        </RouterLink>
      </div>
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

import eyeIcon from "../components/icons/eye.vue";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import {emitter} from "../main.js";


export default {
  name: "ConnexionView",
  components: {
    BoussoleGrayIcon,
    EnregistreWhiteIcon,
    FriendsGrayIcon,
    AvatarGreenIcon,

    eyeIcon,
  },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      message: null,
      view: false,
      type:"password",
      imgData: null,
    };
  },

  mounted() {
    this.message = "Vous n'êtes pas connecté";
  },

  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          emitter.emit("connectUser", { user: this.user });
          this.message = "Bienvenue " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur de connexion", error);
          this.message = "Erreur d'autentification";
        });
    },

    affiche(){
      this.view = !this.view;
      if(this.view)   {this.type = "text";}
      else            {this.type = "password";}
    },
  },
};
</script>

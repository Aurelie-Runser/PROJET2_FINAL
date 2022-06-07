<template>
  <div class="max-w-7xl mx-auto">
    <img
      class="mx-auto w-[35vw]"
      src="public\images\logo.png"
      alt="logo de notre projet"
    />

    <form class="w-11/12 mx-auto mt-10">
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
            Nom d’utilisateur ou Adresse Email
          </label>
          <input
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
            id="grid-first-name"
            type="text"
          />
          <p class="text-red-500 text-xs italic">
            Veuillez renseigner ce champs.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6 md:mb-0">
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
            id="grid-first-name"
            type="text"
          />
          <p class="text-red-500 text-xs italic">
            Veuillez renseigner ce champs.
          </p>
        </div>
      </div>
    </form>

    <div class="-mt-6">
      <div>
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
    </div>

    <div class="flex space-x-2 justify-center">
      <button
        type="button"
        class="
          inline-block
          w-11/12
          h-8
          lg:h-10 lg:text-lg
          mt-5
          bg-green-550
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-green-700 hover:shadow-lg
          focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-700 active:shadow-lg
          transition
          duration-150
          ease-in-out
        "
      >
        Se connecter
      </button>
    </div>

    <div class="mt-4 flex justify-center">
      <RouterLink class="mx-2" to="/contact"> S'inscrire </RouterLink>
      <p>|</p>
      <RouterLink class="mx-2" to="/mentionlegale">
        <p class="pb-12">Mot de passe oublié</p>
      </RouterLink>
    </div>
  </div>
</template>


<script>
export default {
  name: "ConnexionView",
};
</script>

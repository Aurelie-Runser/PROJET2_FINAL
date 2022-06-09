<template>
  <div class="max-w-5xl mx-auto p-5">
    <p
      class="
        xl:text-8xl
        lg:text-6xl
        md:text-4xl
        sm:text-3xl
        font-arial
        my-5
        text-lg
        font-bold
        text-left text-green-550
      "
    >
      NOUS CONTACTER
    </p>

    <p class="text-center font-arial my-5">
      Si vous avez des questions à propos de notre site web, vous pouvez nous
      contacter par ce formulaire. Nos équipes tâcheront de vous répondre dans
      les plus bref délais.
    </p>

    <img
      class="w-32 mx-auto my-5"
      src="/logocamatch.png"
      alt="logo ca match"
    />

    <form class="w-full mr-auto ml-auto max-w-screen-xl">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
            Nom*
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-noir
              mt-2
              border border-red-500
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white
            "
            id="grid-first-name"
            type="text"
            placeholder="Dumont"
          />
          <p class="text-red-500 text-xs italic">
            Veuillez renseigner ce champs.
          </p>
        </div>

        <div class="w-full md:w-1/2 px-3">
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
            for="grid-last-name"
          >
            Prenom*
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-noir
              mt-2
              border border-red-500
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white
            "
            id="grid-first-name"
            type="text"
            placeholder="Valentin"
          />
          <p class="text-red-500 text-xs italic">
            Veuillez renseigner ce champs.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
            Email*
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-noir
              mt-2
              border border-red-500
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white
            "
            id="grid-first-name"
            type="text"
            placeholder="adresseemail123@mail.fr"
          />
          <p class="text-red-500 text-xs italic">
            Veuillez renseigner ce champs.
          </p>
        </div>

        <div class="w-full md:w-1/2 px-3">
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
            for="grid-last-name"
          >
            Objet
          </label>

          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-noir
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="grid-last-name"
            type="text"
            placeholder="Objet"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <label
          for="message"
          class="block mb-2 mx-3 text-sm font-medium dark:text-Beige-150"
          >SUJET
        </label>
        <textarea
          id="message"
          rows="4"
          class="
            block
            mx-3
            p-2.5
            w-full
            text-gray-900
            bg-gray-50
            rounded-lg
            border border-gray-300
            focus:ring-blue-500 focus:border-blue-500
            dark:bg-gray-200
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-noir
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="Écrivez ici les raisons de votre demande.
Nous tâcherons de vous répondre dans les plus brefs délais."
        ></textarea>

        <RouterLink to="/">
          <button
            class="
              bg-green-550
              hover:bg-green-600
              text-white
              font-bold
              py-2
              mt-4
              ml-3
              px-4
              rounded
            "
          >
            Envoyer
          </button>
        </RouterLink>
      </div>
    </form>
  </div>
</template>

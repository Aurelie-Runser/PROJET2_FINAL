<template>
  <RouterView />
</template>


<script>
import { emitter } from "./main.js";

export default {
  name: "App",
  components: {},
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  mounted() {
    emitter.on("connectUser", (e) => {
      this.user = e.user;
      //console.log("App => Reception user connecté", this.user);
    });
    emitter.on("deconnectUser", (e) => {
      this.user = e.user;
      //console.log("App => Reception user deconnecté", this.user);
    });
  },
};
</script>

<template>
  <RouterView />
</template>


<script>
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
};
</script>

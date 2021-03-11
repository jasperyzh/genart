<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link :to="{ name: 'Home' }" class="navbar-brand"
        >GenArt</router-link
      >

      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Play' }">Play</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@use "~bootstrap/scss/bootstrap";
</style>

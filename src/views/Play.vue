<template>
  <main class="container">
    <div class="row">
      <h1>Play</h1>

      <ul class="nav nav-pills justify-content-center">
        <router-link class="btn btn-secondary mx-1" :to="{ name: 'TailwindStart' }">TailwindStart</router-link>
        <router-link class="btn btn-secondary mx-1" :to="{ name: 'AnchorScrolling' }"
          >AnchorScrolling</router-link
        >
        <router-link class="btn btn-secondary mx-1" :to="{ name: 'MapTooltip' }"
          >MapTooltip</router-link
        >
      </ul>
      <router-view />
    </div>
  </main>
</template>
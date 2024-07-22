<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        PokeAPI
      </router-link>
      <div>
        <router-link class="btn btn-outline-primary me-2" to="/">Home</router-link>
        <router-link class="btn btn-outline-primary me-2" to="/pokemons">Pokemons</router-link>
      </div>
    </div>
  </nav>
  <div class="container mt-5">
    <RouterView />
  </div>
</template>

<style scoped>

</style>

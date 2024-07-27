<template>
    <h1>Register</h1>
    <button @click="userStore.registerUser('Ignacio')">Acceder</button>
</template>

<script setup>
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
</script>
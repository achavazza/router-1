<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const back = () =>{
    router.push('/pokemons')
}
</script>

<template>
    <h1>404</h1>
    <button @click="back" class="btn btn-primary">Back</button>
</template>
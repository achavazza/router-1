<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from 'vue-router'
import { useGetData } from '@/composables/getData'

const route = useRoute()
const router = useRouter()
const {data, getData, loading, error} = useGetData();

const back = () =>{
    router.push('/pokemons')
}

//const poke = ref({});

/* 
--> composable getData.js

import axios from 'axios'
const getData = async() =>{
    try{
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        poke.value = data;
    }catch(error){
        console.log(error)
        poke.value = null
    }
}
getData();*/
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>

<template>
    <p v-if="loading">Cargando</p>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div v-if="data">
        <div v-if="data">
            <img :src="data.sprites?.front_default" alt="">
            <h1>Poke Name: {{ $route.params.name }}</h1>
        </div>
        <h1 v-else>No existe ese pokemon</h1>
    </div>
    <button @click="back" class="btn btn-primary">Back</button>
</template>
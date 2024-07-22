<script setup>
    import {ref} from "vue";
    import { RouterLink } from "vue-router";
    import { useGetData } from '@/composables/getData'

    //const pokemons = ref([]);
    const {data, getData, loading, error} = useGetData();
    
/*
    --> composables getData.js
    
    import axios from "axios";
    const getData = async () => {
        try{
            const {data} = await axios.get("http://pokeapi.co/api/v2/pokemon");
            pokemons.value = data.results //.value porque es un const
            //console.log(pokemons)
            } catch (error) {
                console.log(error)
            }
    }
    getData()    
*/
getData("http://pokeapi.co/api/v2/pokemon")    

</script>

<template>
    <h1>Pokemones</h1>
    <p v-if="loading">Cargando</p>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div v-if="data">
        <ul class="list-group">
            <li v-for="poke in data.results" class="list-group-item">
                <router-link :to="`/pokemons/${poke.name}`">{{poke.name}}</router-link>
            </li>
        </ul>
        <div class="my-2">
            <button class="btn btn-success me-2" @click="getData(data.next)" :disabled="!data.previous">Prev</button>
            <button class="btn btn-success me-2" @click="getData(data.next)" :disabled="!data.next">next</button>
        </div>
    </div>
</template>
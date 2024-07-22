<script setup>
import {useFavoritosStore} from '@/store/favoritos'
import {storeToRefs} from 'pinia'

const useFavoritos = useFavoritosStore()
//const {add} = useFavoritos 
const { remove } = useFavoritos

const {favoritos} = storeToRefs(useFavoritos)
</script>

<template>
    <h1>Favoritos</h1>
    <div class="alert alert-warning" v-if="favoritos.length === 0">No hay favoritos</div>
    <ul class="list-group" v-else>
        <li v-for="poke in favoritos" :key="poke.id" class="list-group-item">
            <div>{{ poke.name }}</div>

            <div class="mt-2">
                <router-link class="btn btn-success me-2 btn-sm" :to="`/pokemons/${poke.name}`">Mas información</router-link>
                <button class="btn btn-danger me-2 btn-sm" @click="remove(poke.id)">Eliminar</button>
            </div>
        </li>
    </ul>
</template>
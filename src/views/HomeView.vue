<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
import {useCounterStore} from '@/store/counter'
import {storeToRefs} from 'pinia'
const useCounter = useCounterStore()

const {increment} = useCounter //los metodos se pueden destructurar sin drama
const {double, count} = storeToRefs(useCounter) //pasa que los datos se vuelven reactive, y la destructuracion asi como asi no funciona
</script>

<template>
  <main>
    <h1>Count: {{ count }}</h1>
    <p>{{ double }}</p>
    <button @click="increment">Increment</button>
  </main>
</template>

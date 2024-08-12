<template>
    <div>
        <h1>Editar id:{{route.params.id}}</h1>

        <form @submit.prevent="handleSubmit">
            <input type="text" name="" placeholder="ingrese url" v-model="url">
            <button type="submit">Editar</button>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useDatabaseStore } from '@/stores/database';

const route = useRoute();
console.log(route.params.id);

const handleSubmit = () => {
    //console.log('Editar')
    databaseStore.updateURL(route.params.id, url.value);
}

const url = ref('')
const databaseStore = useDatabaseStore()

onMounted(async() => {
    url.value = await databaseStore.leerURL(route.params.id)
})

</script>
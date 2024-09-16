<template>
    <div>
        <h1>Home</h1>
        {{ userStore.userData?.email }}

        <form @submit.prevent="handleSubmit">
            <input type="text" name="" placeholder="ingrese url" v-model="url">
            <button type="submit">Agregar</button>
        </form>


        <p v-if="databaseStore.loadingDoc">Loading docs ...</p>
        <ul v-else>
            <li v-for="item of databaseStore.documents" :key="item.id">
                {{ item.name }}
                <br/>
                {{ item.short }}
                <br/>
                {{ item.id }}
                <br/>
                <a-button type="primary" @click="databaseStore.deleteURL(item.id)">Eliminar</a-button>
                <a-button type="default" @click="router.push(`/editar/${item.id}`)">Editar</a-button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import { useDatabaseStore } from '../stores/database'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const databaseStore = useDatabaseStore()
databaseStore.getUrls();

const url = ref()

const handleSubmit = () => {
    //cuando usas compAPI+setup agregas .value cuando queres leer componentes de vistas, no en las vistas
    databaseStore.addUrl(url.value);
}

const router = useRouter()

</script>
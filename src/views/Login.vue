<template>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
        <input v-model="email" type="email" name="email" placeholder="ingrese email" id="register-email">
        <input v-model="password" type="password" name="password" placeholder="ingrese password" id="register-password">
        <input type="submit" value="Ingresar">
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from "../stores/user"
//import { useRouter } from "vue-router"

const email = ref('alalala@lala.com')
const password = ref('123123')

//const router = useRouter()

const userStore = useUserStore()

const handleSubmit = async () => {
    if(!email.value || password.value.length < 6){
        alert('ingrese user y pass');
    }
    
    await userStore.loginUser(email.value, password.value)
    //router.push('/')

    console.log(email.value)
    console.log(password.value)
    console.log('procesando formulario')

}
</script>
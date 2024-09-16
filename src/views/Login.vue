<template>
    <a-row>
        <a-col span="12" offset="6" :sm="{span:24, offset:0}">
            <a-form @submit.prevent="handleSubmit" name="basicLogin" autocomplete="off" layout="horizontal">
                <a-form-item name="email" label="Ingresa tu correo" :rules="[{required:true, message: 'Ingresa un email'}]">
                    <a-input v-model:value="email"></a-input>
                </a-form-item>
                <input v-model="password" type="password" name="password" placeholder="ingrese password" id="register-password">
                <input type="submit" value="Ingresar">
            </a-form>
        </a-col>
    </a-row>
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
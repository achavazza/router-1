<script setup>
import {reactive} from 'vue';
const formState =  reactive({
    url:''
})
const onFinish = async (value)=>{
    console.log('todo correcto')
}
</script>
<template>
    <a-form 
    name="addForm"
    autocomplete="off"
    layout="vertical"
    :model="formState"
    @finish="onFinish"
    >
        <a-form-item
            name="url"
            label="Ingresa una url"
            :rules="[{required:true, whitespace:true,pattern:/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/, message: 'Ingresa una url'}]"
        >
            <a-input v-model:value="formState.url"></a-input>
        </a-form-item>
        <a-form-item name="submit">
            <a-button 
                type="primary" 
                html-type="submit"
            >
                Guardar
            </a-button>
        </a-form-item>
    </a-form>
    
</template>

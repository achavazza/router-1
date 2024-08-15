import { ref } from 'vue'
import { defineStore } from "pinia";

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([])

    //leo si esta en LS
    if(localStorage.getItem('favoritos')){
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
    }
    
    const add = (poke) =>{
        //guardo en LS
        favoritos.value.push(poke)
        localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
    }
    const remove = (id) =>{
        // es igual a el filtro de todo lo contrario al id
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        
        
        //guardo la nueva lista en LS
        localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
    }

    const findPoke = (name) => favoritos.value.some((item) => item.name === name);

    return {
        favoritos,
        add,
        remove,
        findPoke,
    }
})
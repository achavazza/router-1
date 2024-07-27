import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore",{
    state:()=>({
        userData: "pepito@lala.com"
    }),
    getters:{
        minuscula(state) {
            return state.userData.toLowerLowerCase()
        }
    },
    actions:{
        registerUser(name) {
            this.userData = name;
        }
    }
})
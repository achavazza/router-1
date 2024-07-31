import { defineStore } from "pinia";
import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import router from '@/router/index.js';

export const useUserStore = defineStore("userStore",{
    state:()=>({
        userData: null,
        loadingUser: false,
    }),
    getters:{
        minuscula(state) {
            return state.userData.toLowerLowerCase()
        }
    },
    actions:{
        async registerUser(email,password) {
            this.loadingUser = true;
            //this.userData = name;
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid:user.uid}
                router.push('/');
                console.log(user);
                
            } catch (error){
                console.log(error);
            } finally {
                this.loadingUser = false;
            }
        },
        async loginUser(email, password) {
            this.loadingUser = true;
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid:user.uid}
                router.push('/');
                console.log(user);
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false;
            }
        },
        async logoutUser() {
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login');
            } catch (error) {
                console.log(error);
            }
        }
    }
})
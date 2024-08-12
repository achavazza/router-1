import { defineStore } from "pinia";
import { auth } from "@/firebaseConfig";
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import router from '@/router/index.js';
import { useDatabaseStore } from "./database";

export const useUserStore = defineStore("userStore",{
    state:()=>({
        userData: null,
        loadingUser: false,
        loadingSession: false,
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
        },

        currentUser() {
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged(
                    auth,
                    (user) => {
                        if (user) {
                            this.userData = {
                                email: user.email,
                                uid: user.uid,
                            };
                        } else {
                            this.userData = null;
                            const databaseStore = useDatabaseStore();
                            databaseStore.$reset();
                        }
                        resolve(user);
                    },
                    (e) => reject(e)
                );
                return unsuscribe;
            });
        },
    }
})
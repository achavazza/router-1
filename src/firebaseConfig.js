// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-5twBb6n5l6rKu2hlpvGiSQ7WUcEMPCI",
    authDomain: "vue-3-bluuweb2024.firebaseapp.com",
    projectId: "vue-3-bluuweb2024",
    storageBucket: "vue-3-bluuweb2024.appspot.com",
    messagingSenderId: "839429165293",
    appId: "1:839429165293:web:898391ed0b1e8b28893ce4"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
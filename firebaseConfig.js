// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAdvZZ4C1Qif0BieagAO_00VJqe-6vKwtc", //import.meta.env.VUE_FIREBASE_API_KEY,
  authDomain: "desafioautentificacion-d67e0.firebaseapp.com", //import.meta.en.VUE_FIREBASE_AUTH_DOMAIN, 
  projectId: "desafioautentificacion-d67e0", //import.meta.env.VUE_FIREBASE_PROJECTID,
  storageBucket: "desafioautentificacion-d67e0.firebasestorage.app", //import.meta.env.VUE_FIREBAE_STORAGEB,
  messagingSenderId: "447027999710", //import.meta.env.VUE_FIREBAE_MESSAGEIN,
  appId:"1:447027999710:web:cdbd18904b8c4d1985e34f", //import.meta.env.VUE_FIREBASE_APPI_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
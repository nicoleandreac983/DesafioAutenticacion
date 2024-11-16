// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VUE_FIREBASE_API_KEY,
  authDomain: import.meta.en.VUE_FIREBASE_AUTH_DOMAIN, 
  projectId: import.meta.env.VUE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VUE_FIREBAE_STORAGEB,
  messagingSenderId: import.meta.env.VUE_FIREBAE_MESSAGEIN,
  appId: import.meta.env.VUE_FIREBASE_APPI_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
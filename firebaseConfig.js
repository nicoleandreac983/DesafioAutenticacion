// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdvZZ4C1Qif0BieagAO_00VJqe-6vKwtc",
  authDomain: "desafioautentificacion-d67e0.firebaseapp.com",
  projectId: "desafioautentificacion-d67e0",
  storageBucket: "desafioautentificacion-d67e0.firebasestorage.app",
  messagingSenderId: "447027999710",
  appId: "1:447027999710:web:cdbd18904b8c4d1985e34f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
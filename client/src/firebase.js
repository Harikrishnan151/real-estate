// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1c8c9.firebaseapp.com",
  projectId: "mern-estate-1c8c9",
  storageBucket: "mern-estate-1c8c9.appspot.com",
  messagingSenderId: "840631635009",
  appId: "1:840631635009:web:037bc5a4662d1204974ac0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
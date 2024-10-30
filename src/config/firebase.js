// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB557aHq032iKf-AKGs49sJhlqWu_QuyzU",
  authDomain: "vite-contact-71b31.firebaseapp.com",
  projectId: "vite-contact-71b31",
  storageBucket: "vite-contact-71b31.appspot.com",
  messagingSenderId: "636251319386",
  appId: "1:636251319386:web:4a2eead81cd55b86543c63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
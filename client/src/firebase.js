// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-9b0cd.firebaseapp.com",
  projectId: "mern-real-estate-9b0cd",
  storageBucket: "mern-real-estate-9b0cd.appspot.com",
  messagingSenderId: "554908048916",
  appId: "1:554908048916:web:e9043ec2cdd53a7451d101"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
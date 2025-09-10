// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase config (get this from your Firebase project settings)
const firebaseConfig = {
 apiKey: "AIzaSyBNcOLrpESIYUO2ojCI7E3NDfw4Se_TmkA",
  authDomain: "healthcare-84378.firebaseapp.com",
  projectId: "healthcare-84378",
  storageBucket: "healthcare-84378.firebasestorage.app",
  messagingSenderId: "417483524102",
  appId: "1:417483524102:web:e81d0f928c2514285f1b87",
  measurementId: "G-136JT2E58F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;
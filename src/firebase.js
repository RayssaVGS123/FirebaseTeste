import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAdciUzcgvLxMThKYAHJGVFD1jMid8g2Kg",
  authDomain: "malagon-b9246.firebaseapp.com",
  projectId: "malagon-b9246",
  storageBucket: "malagon-b9246.firebasestorage.app",
  messagingSenderId: "1009882146655",
  appId: "1:1009882146655:web:76795b666339882a75f8ea",
  measurementId: "G-6WGSLE7DJ8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
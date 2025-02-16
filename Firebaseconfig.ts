// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuHQR20DqUN3BGH2q87v-cSrQDBU9pQAc",
  authDomain: "voluntariado-b153e.firebaseapp.com",
  projectId: "voluntariado-b153e",
  storageBucket: "voluntariado-b153e.firebasestorage.app",
  messagingSenderId: "997267161982",
  appId: "1:997267161982:web:2ffeab51fd4f0a5ed4a92f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);
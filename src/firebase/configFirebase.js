import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDYPHc6fVzsKwa2kZuHugTBGX8kt735k0E",
  authDomain: "react-cart-3a55f.firebaseapp.com",
  projectId: "react-cart-3a55f",
  storageBucket: "react-cart-3a55f.appspot.com",
  messagingSenderId: "715681411938",
  appId: "1:715681411938:web:27b8b105622fa660a8323b",
  measurementId: "G-5Q5X8KKB4X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)
export const storage = getStorage(app)


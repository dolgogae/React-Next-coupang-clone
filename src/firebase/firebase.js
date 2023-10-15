// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeQU-Fv3UvnaCKhhUCEbW-FQ2qSTSR7Co",
  authDomain: "react-next-shop-app-b9555.firebaseapp.com",
  projectId: "react-next-shop-app-b9555",
  storageBucket: "react-next-shop-app-b9555.appspot.com",
  messagingSenderId: "603619154276",
  appId: "1:603619154276:web:fdc032b75ca0981e080271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
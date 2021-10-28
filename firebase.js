// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvSlGScx0931GvvkJpaJGiQ6XDKE65O-k",
  authDomain: "next-insta-9bb1b.firebaseapp.com",
  projectId: "next-insta-9bb1b",
  storageBucket: "next-insta-9bb1b.appspot.com",
  messagingSenderId: "599178903162",
  appId: "1:599178903162:web:f0e931540d5980575245c3",
  measurementId: "G-5DM8HBTLGC",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

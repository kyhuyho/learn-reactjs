import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBW6xH218iR94lYgJIGBz3Sc74jI1ytTuY",
  authDomain: "learn-firebase-a97e7.firebaseapp.com",
  projectId: "learn-firebase-a97e7",
  storageBucket: "learn-firebase-a97e7.appspot.com",
  messagingSenderId: "159128207822",
  appId: "1:159128207822:web:2fb518f4d0680035aa2b9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init service
export const db = getFirestore(app);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1XcDlQhzNUTsmZpbYdLKeh95BYH8Wa5U",
  authDomain: "house-marketplace-27a33.firebaseapp.com",
  projectId: "house-marketplace-27a33",
  storageBucket: "house-marketplace-27a33.appspot.com",
  messagingSenderId: "874664870947",
  appId: "1:874664870947:web:aa8fbc11c923ecf090dd96"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
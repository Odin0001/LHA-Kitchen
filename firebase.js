// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_HLb_q3AcEnqWnuwCSEI8pZHgIHj87Jg",
  authDomain: "lha-kitchen-1f16e.firebaseapp.com",
  projectId: "lha-kitchen-1f16e",
  storageBucket: "lha-kitchen-1f16e.appspot.com",
  messagingSenderId: "611951393409",
  appId: "1:611951393409:web:6ad7c053b40a2e3a16ab80"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
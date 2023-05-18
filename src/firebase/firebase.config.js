// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAinhi1pgg6rEeo8kLAQqYUwVB2U63PUrQ",
  authDomain: "toy-market-place-26dab.firebaseapp.com",
  projectId: "toy-market-place-26dab",
  storageBucket: "toy-market-place-26dab.appspot.com",
  messagingSenderId: "641403509346",
  appId: "1:641403509346:web:3f2bd69eec0d9b7fc84f3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
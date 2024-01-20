// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUarqTTm0OxLj3lHabDW0GbiiFcan7DAM",
  authDomain: "netflixgpt-76a48.firebaseapp.com",
  projectId: "netflixgpt-76a48",
  storageBucket: "netflixgpt-76a48.appspot.com",
  messagingSenderId: "234941415745",
  appId: "1:234941415745:web:011d788045cb14a00161c0",
  measurementId: "G-G0Z20QCQG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

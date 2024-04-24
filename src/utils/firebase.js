// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwEwmiEXwSal37tyQR4-xHm9cKDjdUPk8",
  authDomain: "flix-gpt-c7385.firebaseapp.com",
  projectId: "flix-gpt-c7385",
  storageBucket: "flix-gpt-c7385.appspot.com",
  messagingSenderId: "362462106984",
  appId: "1:362462106984:web:c6aafb8364722902b4b2dd",
  measurementId: "G-D5XPKXGP4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
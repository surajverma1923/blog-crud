// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-5a1d1.firebaseapp.com",
  projectId: "blog-5a1d1",
  storageBucket: "blog-5a1d1.appspot.com",
  messagingSenderId: "992208590727",
  appId: "1:992208590727:web:8c301f46302248ef7f6522",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

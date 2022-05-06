// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh2tpjam_olt4kn1QNqUWu5JJzI0oeB60",
  authDomain: "flashcardapp-a29a7.firebaseapp.com",
  projectId: "flashcardapp-a29a7",
  storageBucket: "flashcardapp-a29a7.appspot.com",
  messagingSenderId: "115449690712",
  appId: "1:115449690712:web:755be63f2a0f53f431a82d",
  measurementId: "G-79055MZRG3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);
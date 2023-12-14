// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5bGRgW6kUY5wZNxMpWOJn7PwbHM-zyA0",
  authDomain: "project-student-bfc1e.firebaseapp.com",
  projectId: "project-student-bfc1e",
  storageBucket: "project-student-bfc1e.appspot.com",
  messagingSenderId: "998694574385",
  appId: "1:998694574385:web:24cb42cb7df50858fc3810",
  measurementId: "G-L6TBX4J95S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
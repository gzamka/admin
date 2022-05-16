// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-74ZhuPx-V-qxFUeaCJhNzm7REVMVQfk",
  authDomain: "website-team1.firebaseapp.com",
  projectId: "website-team1",
  storageBucket: "website-team1.appspot.com",
  messagingSenderId: "1017416791665",
  appId: "1:1017416791665:web:af5cd02d6bda3c86f4cdd0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
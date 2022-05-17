import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB-74ZhuPx-V-qxFUeaCJhNzm7REVMVQfk",
  authDomain: "website-team1.firebaseapp.com",
  projectId: "website-team1",
  storageBucket: "website-team1.appspot.com",
  messagingSenderId: "1017416791665",
  appId: "1:1017416791665:web:af5cd02d6bda3c86f4cdd0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:5500/validate",
  // This must be true.
  handleCodeInApp: true,
};


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC50Vb9vCVqdiQT5yAePzN2d1Yp3OdefKM",
  authDomain: "demoday-3c8d0.firebaseapp.com",
  projectId: "demoday-3c8d0",
  storageBucket: "demoday-3c8d0.appspot.com",
  messagingSenderId: "712774865518",
  appId: "1:712774865518:web:cae8a81ade42dd3c24cc7f"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
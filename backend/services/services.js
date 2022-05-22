import { actionCodeSettings, auth, db } from "../firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { collection, addDoc, doc, getDocs } from "firebase/firestore";
const categoryCollection = "categoryProducts";
const userEmailCollection = `userEmails`;
// services

export const signInWithEmailToFirebase = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (e) {
    console.log(e);
  }
};

export const addEmailToFirebase = async (email) => {
  try {
    const userEmailRef = await addDoc(collection(db, userEmailCollection), {
      email: email,
    });
    console.log("Document written with ID: ", userEmailRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    res.status(400).json({ success: false, error });
  }
};

export const getCategoryProductsFromFirebase = async () => {
  const products = [];
  try {
    const docSnaps = await getDocs(collection(db, categoryCollection));
    docSnaps.forEach((doc) => {
      const datas = doc.data();
      console.log(doc);
      products.push(datas);
    });
    return products;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getUserEmailsFromFirebase = async () => {
  const emails = [];
  try {
    const docRefs = doc(db, userEmailCollection);
    const docSnaps = await getDocs(docRefs);
    docSnaps.forEach((doc) => {
      const datas = doc.data();
      console.log(doc.id`=>`, datas);
      emails.push(datas);
    });
  } catch (e) {
    console.log(e);
    res.status(300).json({ success: false, error });
  }
  return emails;
};

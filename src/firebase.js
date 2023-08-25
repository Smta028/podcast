// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9bTdAjpbIkjqjlg2WiXH2QTAQgdF0rEk",
  authDomain: "podcast-readiness.firebaseapp.com",
  projectId: "podcast-readiness",
  storageBucket: "podcast-readiness.appspot.com",
  messagingSenderId: "476113848341",
  appId: "1:476113848341:web:24238ba13c8767bd52261c",
  measurementId: "G-XYXK9E1E4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth, db, storage};


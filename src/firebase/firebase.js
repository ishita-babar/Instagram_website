import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGZ8v-sEZ1oYnUIN4fTBlLuoD5Aapy7Jk",
  authDomain: "instagram-clone-566c4.firebaseapp.com",
  projectId: "instagram-clone-566c4",
  storageBucket: "instagram-clone-566c4.appspot.com",
  messagingSenderId: "679054031823",
  appId: "1:679054031823:web:ead40297c1fb875c73b0ba",
  measurementId: "G-H0WQHB3FBL"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};

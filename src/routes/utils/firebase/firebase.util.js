import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXn-9fT0X8rzR2kNwYmYpi7cHeE8ObRGw",
  authDomain: "crwn-clothing-db-17963.firebaseapp.com",
  projectId: "crwn-clothing-db-17963",
  storageBucket: "crwn-clothing-db-17963.appspot.com",
  messagingSenderId: "576319533750",
  appId: "1:576319533750:web:b291e35b9c78392ecb6c17",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
// sign in with google popup
export const signinWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// save user info
export const createUserDocumentFromAuth = async (userAuth) => {
  const uesrDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(uesrDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(uesrDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return uesrDocRef;
};

// create new user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// sign in user with email and password
export const signinAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthUserStateChanged = (callback) =>
  onAuthStateChanged(auth, callback);

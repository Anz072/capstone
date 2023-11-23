import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFJoKCM78kBGQ6T-yc8V31di8vp3GgG2Y",
  authDomain: "capstone-db-bfe64.firebaseapp.com",
  projectId: "capstone-db-bfe64",
  storageBucket: "capstone-db-bfe64.appspot.com",
  messagingSenderId: "512927371579",
  appId: "1:512927371579:web:9c549c2fbc40987322271e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //exist - return doc, doesnt exist create doc

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("Creation of user failed");
      console.log(err);
    }
  }
  return userDocRef;
};

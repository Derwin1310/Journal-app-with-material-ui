// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaWzlGq3Ky4Uw0JCTaKSXjoOM4kduTPRg",
  authDomain: "journal-app-2792b.firebaseapp.com",
  projectId: "journal-app-2792b",
  storageBucket: "journal-app-2792b.appspot.com",
  messagingSenderId: "515340338826",
  appId: "1:515340338826:web:f73d3fdf968ac043cc8f73"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp)

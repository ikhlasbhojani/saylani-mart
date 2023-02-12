import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyAknQ0B259pFpHdQNDBsOi5mGyZRbfPKC4",
  authDomain: "saylani-mart-app.firebaseapp.com",
  projectId: "saylani-mart-app",
  storageBucket: "saylani-mart-app.appspot.com",
  messagingSenderId: "704736034239",
  appId: "1:704736034239:web:1f68df4b49f23e306a350a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
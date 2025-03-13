import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}  from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC-5Tn7NRVzE-Yrzv6yw3dFGlW1aQGh7qg",
  authDomain: "medai-d81fe.firebaseapp.com",
  projectId: "medai-d81fe",
  storageBucket: "medai-d81fe.firebasestorage.app",
  messagingSenderId: "738175804855",
  appId: "1:738175804855:web:0c5ca9fed6972bafd5f432",
  measurementId: "G-ZXR1CBEX9M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore= getFirestore(app);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;
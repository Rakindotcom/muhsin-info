// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfUc8b7_-kxMFIeZOdw7rMm6KRifM7VPM",
  authDomain: "muhsin-mashkur-7615a.firebaseapp.com",
  projectId: "muhsin-mashkur-7615a",
  storageBucket: "muhsin-mashkur-7615a.firebasestorage.app",
  messagingSenderId: "826227619446",
  appId: "1:826227619446:web:7af1346181c53d33ec5157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);

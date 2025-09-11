// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfUc8b7_-kxMFIeZOdw7rMm6KRifM7VPM",
  authDomain: "muhsin-mashkur-7615a.firebaseapp.com",
  databaseURL: "https://muhsin-mashkur-7615a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "muhsin-mashkur-7615a",
  storageBucket: "muhsin-mashkur-7615a.appspot.com",
  messagingSenderId: "826227619446",
  appId: "1:826227619446:web:7af1346181c53d33ec5157",
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firestore instance (if you need)
export const db = getFirestore(app);

// Export Realtime Database instance
export const rtdb = getDatabase(app);
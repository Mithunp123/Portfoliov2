import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBIPYstyhjqCFR6U17JGbFcaZHSaSOuZFY",
  authDomain: "portfolio-583a7.firebaseapp.com",
  projectId: "portfolio-583a7",
  storageBucket: "portfolio-583a7.firebasestorage.app",
  messagingSenderId: "923012488632",
  appId: "1:923012488632:web:965a75cb8d7a85e959c34d",
  measurementId: "G-TG941XZ1WT",
  databaseURL: "https://portfolio-583a7-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { app, database };

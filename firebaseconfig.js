import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// TODO: Replace each placeholder with your Firebase project's values.
// You can find these in the Firebase console under Project Settings.
const firebaseConfig = {
  apiKey: "AIzaSyAKeKBuSZBNHkgR5kF68h5aYn50ONJofPQ",
  authDomain: "nexus-c130b.firebaseapp.com",
  databaseURL: "https://nexus-c130b-default-rtdb.firebaseio.com/",
  projectId: "nexus-c130b",
  storageBucket: "nexus-c130b.firebasestorage.app",
  messagingSenderId: "530744870754",
  appId: "1:530744870754:web:1a1c7436c4c977b8610e3b",
  measurementId: "G-G4K7FZ5XYC"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
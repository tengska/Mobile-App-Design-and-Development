import { IonToast } from "@ionic/react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateCurrentUser,
  onAuthStateChanged
} from "firebase/auth";
import { useHistory } from 'react-router-dom';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT745ok_AsGMDZ8utVuRHfFVOaOCpdcl0",
  authDomain: "labwork-4-development.firebaseapp.com",
  projectId: "labwork-4-development",
  storageBucket: "labwork-4-development.appspot.com",
  messagingSenderId: "371944394506",
  appId: "1:371944394506:web:3869d34b73582b6c1b74f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
      const auth = getAuth(); // Initialize Firebase Auth
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user); // User is signed in
        } else {
          resolve(null); // No user is signed in
        }
        unsubscribe(); // Clean up the listener
      }, (error) => {
        reject(error); // Handle errors
      });
    });
}

export function logoutUser() {
    const auth = getAuth(); // Initialize Firebase Auth
    return signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  }

export async function loginUser(email: string, password: string, history: any) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful:", res.user);

    // Redirect to dashboard after login
    history.push('/dashboard');
    return { success: true, message: 'Login successful!' };
  } catch (error: any) {
    console.error("Error logging in:", error.message);
    return { success: false, message: error.message };
  }
}


export async function signupUser(email: string, password: string, history: any) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", res);
    history.push('/dashboard');
    return { success: true };
  } catch (error: any) {
    console.error("Registration failed:", error.message);
    return { success: false, message: error.message };
  }
}
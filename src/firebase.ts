import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Verify this file exists in the folder above this one!
import firebaseConfig from '../firebase-applet-config.json';

// 1. Initialize the app
const app = initializeApp(firebaseConfig);

// 2. Export Auth and DB (Simplified)
export const auth = getAuth(app);
export const db = getFirestore(app); // Standard initialization
export const googleProvider = new GoogleAuthProvider();

// 3. Helper Functions
export const loginAnonymously = async () => {
  try {
    const result = await signInAnonymously(auth);
    return result.user; // This gives the student a temporary UID
  } catch (error) {
    console.error("Anonymous login failed:", error);
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export const logout = () => signOut(auth);
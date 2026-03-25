import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signOut, updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export const signInAsStudent = async (nickname: string) => {
  try {
    const result = await signInAnonymously(auth);
    await updateProfile(result.user, { displayName: nickname });
    return result.user;
  } catch (error) {
    console.error("Error signing in anonymously", error);
    throw error;
  }
};

export const logout = () => signOut(auth);

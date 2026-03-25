import { 
  collection, 
  addDoc, 
  getDoc,
  getDocs, 
  doc,
  query, 
  where,
  orderBy, 
  limit, 
  Timestamp,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';

export interface StudentStats {
  name: string;
  email: string;
  totalScore: number;
  totalQuizzesTaken: number;
}

/**
 * Checks if a username is already taken in the 'users' collection.
 */
export const isUsernameAvailable = async (name: string, currentUid?: string): Promise<boolean> => {
  try {
    const coll = collection(db, 'users');
    const q = query(coll, where('name', '==', name));
    const snapshot = await getDocs(q);

    if (snapshot.empty) return true;

    // If it's the same user, it's fine
    if (currentUid && snapshot.docs.some(d => d.id === currentUid)) return true;

    return false;
  } catch (error) {
    console.error(`Error checking username availability for "${name}":`, error);
    throw error; // Rethrow to show the real error
  }
};

/**
 * Creates or updates a user profile.
 */
export const createUserProfile = async (uid: string, data: { name: string, email: string }) => {
  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, {
      ...data,
      userId: uid,
      createdAt: Timestamp.now()
    }, { merge: true });
  } catch (error) {
    console.error("Error creating user profile", error);
    throw error;
  }
};

/**
 * Saves a student's score from a quiz attempt.
 */
export const saveStudentScore = async (result: any) => {
  try {
    const coll = collection(db, 'leaderboard');
    await addDoc(coll, {
      ...result,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error saving score:", error);
    throw error;
  }
};

/**
 * Fetches the top students based on their cumulative performance.
 */
export const fetchTopStudents = async (toplimit: number = 20, subject?: string): Promise<StudentStats[]> => {
  try {
    const coll = collection(db, 'leaderboard');
    let q;
    if (subject) {
      q = query(coll, where('subject', '==', subject), orderBy('score', 'desc'), limit(toplimit));
    } else {
      q = query(coll, orderBy('score', 'desc'), limit(toplimit));
    }
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data() as any;
      return {
        name: data.userName || 'Anonymous',
        email: data.email || 'Unknown',
        totalScore: data.score || 0,
        totalQuizzesTaken: 1 // Simplified for now
      };
    });
  } catch (error) {
    console.error("Error fetching top students", error);
    return [];
  }
};

import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  Timestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

export interface StudentStats {
  name: string;
  email: string;
  totalScore: number;
  totalQuizzesTaken: number;
}

/**
 * Saves a student's score from a quiz attempt.
 */
export const saveStudentScore = async (result: any) => {
  try {
    const coll = collection(db, 'quiz_attempts');
    await addDoc(coll, {
      ...result,
      timestamp: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error saving score", error);
    throw error;
  }
};

/**
 * Fetches the top students based on their cumulative performance.
 * This is a simplified version for now.
 */
export const fetchTopStudents = async (toplimit: number = 10): Promise<StudentStats[]> => {
  try {
    const coll = collection(db, 'leaderboard');
    const q = query(coll, orderBy('score', 'desc'), limit(toplimit));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
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

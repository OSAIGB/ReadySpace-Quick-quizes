import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  addDoc,
  query, 
  orderBy, 
  limit, 
  getDocs,
  serverTimestamp,
  increment
} from 'firebase/firestore';
import { db } from '../firebase';
import { QuizResult, Subject } from '../types';

/**
 * 📊 DATA MODEL:
 * 
 * 1. `quiz_attempts` (Collection): 
 *    Stores individual quiz results for historical tracking and analytics.
 * 
 * 2. `student_leaderboard` (Collection): 
 *    Stores aggregated stats per student (email used as the unique Document ID).
 *    This allows us to rank students by their total cumulative score across all quizzes.
 */

export interface StudentStats {
  email: string;
  name: string;
  totalScore: number;
  totalQuizzesTaken: number;
  lastActive: any; // Firestore Timestamp
}

/**
 * Saves an individual quiz score AND updates the student's cumulative leaderboard stats.
 */
export const saveStudentScore = async (
  resultData: Omit<QuizResult, 'id' | 'timestamp'>
) => {
  try {
    // 1. Save the individual quiz attempt for history
    await addDoc(collection(db, 'quiz_attempts'), {
      ...resultData,
      timestamp: serverTimestamp()
    });

    // 2. Update the aggregated student leaderboard document
    // Using the user's email as the unique identifier since there's no complex auth
    if (resultData.email && resultData.email !== 'Unknown') {
      const studentDocRef = doc(db, 'student_leaderboard', resultData.email);
      
      const studentDoc = await getDoc(studentDocRef);
      
      if (studentDoc.exists()) {
        // Update existing stats
        await setDoc(studentDocRef, {
          totalScore: increment(resultData.score),
          totalQuizzesTaken: increment(1),
          lastActive: serverTimestamp(),
          name: resultData.userName // Update name in case they changed it
        }, { merge: true });
      } else {
        // Create new student stat entry
        await setDoc(studentDocRef, {
          email: resultData.email,
          name: resultData.userName,
          totalScore: resultData.score,
          totalQuizzesTaken: 1,
          lastActive: serverTimestamp()
        });
      }
    }
    
    return true;
  } catch (error) {
    console.error('Error saving student score:', error);
    throw error;
  }
};

/**
 * Fetches and ranks the top students based on their cumulative total score.
 */
export const fetchTopStudents = async (topCount: number = 10): Promise<StudentStats[]> => {
  try {
    const q = query(
      collection(db, 'student_leaderboard'),
      orderBy('totalScore', 'desc'),
      limit(topCount)
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as StudentStats);
  } catch (error) {
    console.error('Error fetching top students:', error);
    return [];
  }
};

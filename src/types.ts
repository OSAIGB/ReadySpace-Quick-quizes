export interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
  section: string;
  instruction: string;
  explanation?: string;
}

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
}

export interface QuizResult {
  id?: string;
  userId: string;
  userName: string;
  email: string;
  subject: string;
  topic: string;
  score: number;
  totalQuestions: number;
  timestamp: any;
  cheated: boolean;
}

export type Subject = 'English' | 'Math' | 'Physics' | 'Chemistry' | 'Biology' | 'Government' | 'C.R.S' | 'Economics';

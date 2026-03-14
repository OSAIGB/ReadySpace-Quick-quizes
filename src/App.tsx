/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { 
  BookOpen, 
  Lock, 
  User, 
  Mail, 
  Key, 
  Trophy, 
  LogOut, 
  ChevronRight, 
  ChevronLeft,
  AlertCircle, 
  CheckCircle2, 
  XCircle,
  ShieldAlert,
  Timer,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  onSnapshot, 
  serverTimestamp,
} from 'firebase/firestore';
import { db, signInAnonymously } from './firebase';
import { ENGLISH_QUESTIONS } from './data/questions';
import { Question, QuizResult, Subject } from './types';

type Screen = 'auth' | 'subjects' | 'topics' | 'quiz' | 'results' | 'leaderboard';

export default function App() {
  const [user, setUser] = useState<{ name: string, email: string, uid: string } | null>(null);
  const [screen, setScreen] = useState<Screen>('auth');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Simple Name Entry State
  const [tempName, setTempName] = useState('');
  const [tempEmail, setTempEmail] = useState('');

  // Quiz State
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{questionId: number, selected: string, isCorrect: boolean}[]>([]);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);
  const [cheatAttempts, setCheatAttempts] = useState(0);
  const [showFeedback, setShowFeedback] = useState<{isCorrect: boolean, correctAnswer: string, explanation?: string} | null>(null);
  const [leaderboard, setLeaderboard] = useState<QuizResult[]>([]);

  const [timeLeft, setTimeLeft] = useState<number>(900); // 15 minutes in seconds

  // Subjects
  const subjects: Subject[] = ['English', 'Math', 'Physics', 'Chemistry', 'Biology', 'Government', 'C.R.S', 'Economics'];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (screen === 'quiz' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            finishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [screen, timeLeft]);

  useEffect(() => {
    // Load local user if exists
    const savedName = localStorage.getItem('readyspace_user_name');
    const savedEmail = localStorage.getItem('readyspace_user_email');
    if (savedName && savedEmail) {
      setUser({ 
        name: savedName, 
        email: savedEmail,
        uid: 'local_' + Math.random().toString(36).substr(2, 9) 
      });
      setScreen('subjects');
    }
  }, []);

  useEffect(() => {
    if (screen === 'leaderboard') {
      const q = query(collection(db, 'leaderboard'), orderBy('score', 'desc'), limit(10));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as QuizResult));
        setLeaderboard(results);
      });
      return unsubscribe;
    }
  }, [screen]);

  // Anti-cheat: Detect tab switching or window blur
  useEffect(() => {
    if (screen === 'quiz') {
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
          handleCheatAttempt('Tab switched');
        }
      };

      const handleBlur = () => {
        handleCheatAttempt('Window focus lost');
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('blur', handleBlur);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('blur', handleBlur);
      };
    }
  }, [screen]);

  const handleCheatAttempt = (reason: string) => {
    setCheatAttempts(prev => prev + 1);
    setError(`Warning: Cheat attempt detected (${reason}). This will be recorded.`);
    setTimeout(() => setError(null), 3000);
  };

  const handleEnter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim().length < 2 || !tempEmail.includes('@')) {
      setError("Please enter your full name and a valid email.");
      return;
    }

    // Attempt anonymous sign-in (uses Firebase anonymous auth if enabled).
    let uid = 'local_' + Math.random().toString(36).substr(2, 9);
    try {
      const anonUser = await signInAnonymously();
      if (anonUser && anonUser.uid) uid = anonUser.uid;
    } catch (err) {
      // If anonymous sign-in fails, continue with a local fallback id
      console.warn('Anonymous sign-in failed, using local id', err);
    }

    const newUser = { 
      name: tempName, 
      email: tempEmail,
      uid
    };
    setUser(newUser);
    localStorage.setItem('readyspace_user_name', tempName);
    localStorage.setItem('readyspace_user_email', tempEmail);
    setScreen('subjects');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('readyspace_user_name');
    localStorage.removeItem('readyspace_user_email');
    setScreen('auth');
  };

  const handleSubjectSelect = (subject: Subject) => {
    if (subject !== 'English') {
      setError(`${subject} is currently unavailable.`);
      setTimeout(() => setError(null), 3000);
      return;
    }
    setSelectedSubject(subject);
    setScreen('topics');
  };

  const startQuiz = () => {
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setQuizStartTime(Date.now());
    setTimeLeft(900); // Reset to 15 minutes
    setCheatAttempts(0);
  };

  const handleAnswer = (selectedOption: string) => {
    if (showFeedback) return;

    const currentQuestion = ENGLISH_QUESTIONS[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    
    if (isCorrect) setScore(prev => prev + 1);
    
    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selected: selectedOption,
      isCorrect
    }]);

    setShowFeedback({
      isCorrect,
      correctAnswer: currentQuestion.answer,
      explanation: currentQuestion.explanation
    });
  };

  const nextQuestion = () => {
    setShowFeedback(null);
    if (currentQuestionIndex < ENGLISH_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    setShowFeedback(null);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const finishQuiz = async () => {
    const result: QuizResult = {
      userId: user?.uid || 'anonymous',
      userName: user?.name || 'Anonymous',
      email: user?.email || 'Unknown',
      subject: selectedSubject!,
      topic: 'LEXIS AND STRUCTURE',
      score: score,
      totalQuestions: ENGLISH_QUESTIONS.length,
      timestamp: serverTimestamp(),
      cheated: cheatAttempts > 0
    };

    try {
      await addDoc(collection(db, 'leaderboard'), result);
      setScreen('results');
    } catch (err: any) {
      setError("Failed to save result: " + err.message);
      setScreen('results');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-100">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => user && setScreen('subjects')}>
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-bold text-xl tracking-tight text-stone-800">Ready<span className="text-emerald-600">Space</span></h1>
          </div>
          
          {user && (
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setScreen('leaderboard')}
                className="text-stone-600 hover:text-emerald-600 transition-colors"
              >
                <Trophy className="w-5 h-5" />
              </button>
              <div className="h-8 w-px bg-stone-200"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-stone-600 hidden sm:block">{user.name}</span>
                <button 
                  onClick={handleLogout}
                  className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-4 sm:py-8">
        <AnimatePresence mode="wait">
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-700"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </motion.div>
          )}

          {screen === 'auth' && (
            <motion.div 
              key="auth"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200"
            >
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-stone-800 italic serif">Welcome to ReadySpace</h2>
                <p className="text-sm sm:text-base text-stone-500 mt-2">Enter your name to start practicing</p>
              </div>

              <form onSubmit={handleEnter} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-500 ml-1">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input 
                      required
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-500 ml-1">Student Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input 
                      required
                      type="email"
                      value={tempEmail}
                      onChange={(e) => setTempEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-200 mt-4"
                >
                  Enter Portal
                </button>
              </form>
            </motion.div>
          )}

          {screen === 'subjects' && (
            <motion.div 
              key="subjects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 italic serif">Available Subjects</h2>
                <p className="text-sm sm:text-base text-stone-500 mt-2">Select a subject to begin your practice session</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    onClick={() => handleSubjectSelect(subject)}
                    className={`p-6 rounded-2xl border transition-all text-left group relative overflow-hidden ${
                      subject === 'English' 
                        ? 'bg-white border-stone-200 hover:border-emerald-500 hover:shadow-md' 
                        : 'bg-stone-100 border-stone-200 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      subject === 'English' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' : 'bg-stone-200 text-stone-400'
                    }`}>
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-stone-800">{subject}</h3>
                    <p className="text-xs text-stone-500 mt-1">
                      {subject === 'English' ? '60 Questions Available' : 'Coming Soon'}
                    </p>
                    {subject === 'English' && (
                      <ChevronRight className="absolute bottom-6 right-6 w-5 h-5 text-stone-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {screen === 'topics' && (
            <motion.div 
              key="topics"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto space-y-6 sm:space-y-8"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button onClick={() => setScreen('subjects')} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                  <ChevronRight className="w-5 h-5 sm:w-6 h-6 rotate-180 text-stone-400" />
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 italic serif">Topics</h2>
              </div>

              <div className="space-y-4">
                <button
                  onClick={startQuiz}
                  className="w-full p-6 bg-white border border-stone-200 rounded-2xl hover:border-emerald-500 hover:shadow-md transition-all text-left flex items-center justify-between group"
                >
                  <div>
                    <h3 className="font-bold text-xl text-stone-800">LEXIS AND STRUCTURE</h3>
                    <p className="text-sm text-stone-500 mt-1">Synonyms, Antonyms, Sentence Patterns, Mechanics</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {screen === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onContextMenu={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
              className="max-w-3xl mx-auto space-y-3 select-none"
            >
              {/* Section Info & Stats */}
              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Trophy className="w-3.5 h-3.5 sm:w-4 h-4" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">{ENGLISH_QUESTIONS[currentQuestionIndex].section}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                      Q{currentQuestionIndex + 1} / {ENGLISH_QUESTIONS.length}
                    </div>
                    <div className={`flex items-center gap-1.5 text-[10px] sm:text-xs font-bold ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-stone-500'}`}>
                      <Timer className="w-3 h-3 sm:w-3.5 h-3.5" />
                      <span className="font-mono">
                        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
                
                {cheatAttempts > 0 && (
                  <div className="flex items-center gap-2 text-red-500 text-[10px] font-bold uppercase tracking-widest bg-red-50 p-2 rounded-lg">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Security Warning
                  </div>
                )}

                <div className="flex items-start gap-2 p-2 sm:p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <Info className="w-3.5 h-3.5 sm:w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div className="text-[11px] sm:text-xs text-stone-600 font-medium leading-relaxed">
                    <Markdown>{ENGLISH_QUESTIONS[currentQuestionIndex].instruction}</Markdown>
                  </div>
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white p-4 sm:p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4 sm:space-y-6">
                <div className="text-base sm:text-xl font-medium text-stone-800 leading-relaxed markdown-body">
                  <Markdown>{ENGLISH_QUESTIONS[currentQuestionIndex].text}</Markdown>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {ENGLISH_QUESTIONS[currentQuestionIndex].options.map((option) => {
                    const currentAnswer = answers.find(a => a.questionId === ENGLISH_QUESTIONS[currentQuestionIndex].id);
                    const isSelected = currentAnswer?.selected === option;
                    const isCorrect = option === ENGLISH_QUESTIONS[currentQuestionIndex].answer;
                    const hasBeenAnswered = !!currentAnswer;
                    
                    let buttonClass = "w-full p-4 sm:p-5 text-left rounded-xl sm:rounded-2xl border-2 transition-all font-medium flex items-center justify-between group text-sm sm:text-base ";
                    
                    if (showFeedback || hasBeenAnswered) {
                      if (isCorrect) {
                        buttonClass += "bg-emerald-50 border-emerald-500 text-emerald-700";
                      } else if (isSelected) {
                        buttonClass += "bg-red-50 border-red-500 text-red-700";
                      } else {
                        buttonClass += "bg-stone-50 border-stone-100 text-stone-400 opacity-50";
                      }
                    } else {
                      buttonClass += "bg-white border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 text-stone-700";
                    }

                    return (
                      <button
                        key={option}
                        disabled={!!showFeedback || hasBeenAnswered}
                        onClick={() => handleAnswer(option)}
                        className={buttonClass}
                      >
                        <span>{option}</span>
                        {(showFeedback || hasBeenAnswered) && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                        {(showFeedback || hasBeenAnswered) && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                      </button>
                    );
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-end pt-4 border-t border-stone-100">
                  <button
                    onClick={nextQuestion}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 sm:py-3 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all active:scale-95"
                  >
                    {currentQuestionIndex === ENGLISH_QUESTIONS.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-stone-900/40 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      className={`max-w-lg w-full p-8 rounded-3xl border shadow-2xl ${
                        showFeedback.isCorrect 
                          ? 'bg-white border-emerald-100' 
                          : 'bg-white border-red-100'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-1.5 rounded-lg ${showFeedback.isCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                          {showFeedback.isCorrect ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <XCircle className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h4 className={`text-sm sm:text-base font-bold italic serif ${showFeedback.isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                            {showFeedback.isCorrect ? 'Correct!' : 'Incorrect'}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium">
                            {showFeedback.isCorrect ? 'Great job, keep it up!' : 'Don\'t worry, learn from this:'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {!showFeedback.isCorrect && (
                          <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-100">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 mb-0.5">Correct Answer</p>
                            <p className="text-sm font-bold text-emerald-800">{showFeedback.correctAnswer}</p>
                          </div>
                        )}

                        {showFeedback.explanation && (
                          <div className="space-y-1.5">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-stone-400">Explanation & Usage</p>
                            <div className="text-stone-700 text-[11px] leading-relaxed markdown-body bg-stone-50 p-3 rounded-lg border border-stone-100">
                              <Markdown>{showFeedback.explanation}</Markdown>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 pt-4 border-t border-stone-100 flex justify-center">
                        <button
                          onClick={nextQuestion}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-stone-900 text-white hover:bg-stone-800 transition-all active:scale-95 shadow-lg text-sm"
                        >
                          {currentQuestionIndex === ENGLISH_QUESTIONS.length - 1 ? 'Finish Quiz' : 'Continue'}
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {screen === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8"
            >
              <div className="bg-white p-6 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6">
                <div className="w-16 h-16 sm:w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 sm:w-12 h-12" />
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-stone-800 italic serif">Quiz Completed!</h2>
                <div className="flex justify-center gap-8 sm:gap-12 py-6 sm:py-8 border-y border-stone-100">
                  <div className="text-center">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Your Score</p>
                    <p className="text-3xl sm:text-5xl font-black text-emerald-600">{score}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Total Questions</p>
                    <p className="text-3xl sm:text-5xl font-black text-stone-800">{ENGLISH_QUESTIONS.length}</p>
                  </div>
                </div>
                
                <div className="space-y-4 pt-4">
                  <p className="text-stone-600">
                    Percentage: <span className="font-bold text-stone-800">{Math.round((score / ENGLISH_QUESTIONS.length) * 100)}%</span>
                  </p>
                  {cheatAttempts > 0 && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-xl text-sm flex items-center justify-center gap-2">
                      <ShieldAlert className="w-4 h-4" />
                      Security violations were recorded during this session.
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={() => setScreen('subjects')}
                    className="flex-1 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
                  >
                    Back to Subjects
                  </button>
                  <button 
                    onClick={() => setScreen('leaderboard')}
                    className="flex-1 py-4 bg-white border border-stone-200 text-stone-700 font-bold rounded-2xl hover:bg-stone-50 transition-all"
                  >
                    View Leaderboard
                  </button>
                </div>

                {/* Review Answers Section */}
                <div className="mt-8 sm:mt-12 text-left space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-800 italic serif border-b border-stone-100 pb-4">Review Your Answers</h3>
                  <div className="space-y-4 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {answers.map((ans, idx) => {
                      const question = ENGLISH_QUESTIONS.find(q => q.id === ans.questionId);
                      if (!question) return null;
                      return (
                        <div key={idx} className={`p-4 rounded-2xl border ${ans.isCorrect ? 'bg-emerald-50/50 border-emerald-100' : 'bg-red-50/50 border-red-100'}`}>
                          <p className="text-sm font-bold text-stone-400 mb-2">Question {idx + 1}</p>
                          <div className="text-stone-800 font-medium mb-3 markdown-body">
                            <Markdown>{question.text}</Markdown>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-stone-400">Your Answer:</span>
                              <span className={`font-bold ${ans.isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>{ans.selected}</span>
                            </div>
                            {!ans.isCorrect && (
                              <div className="flex items-center gap-2">
                                <span className="text-stone-400">Correct Answer:</span>
                                <span className="font-bold text-emerald-600">{question.answer}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {screen === 'leaderboard' && (
            <motion.div 
              key="leaderboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto space-y-6 sm:space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <button onClick={() => setScreen('subjects')} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                    <ChevronRight className="w-5 h-5 sm:w-6 h-6 rotate-180 text-stone-400" />
                  </button>
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 italic serif">Leaderboard</h2>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm inline-block self-start sm:self-auto">
                  Top 10 Students
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="grid grid-cols-12 bg-stone-50 p-4 border-b border-stone-200 text-xs font-bold uppercase tracking-widest text-stone-400">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5">Student</div>
                  <div className="col-span-2 text-right">Score</div>
                  <div className="col-span-2 text-right">Email</div>
                  <div className="col-span-2 text-right">Status</div>
                </div>
                <div className="divide-y divide-stone-100">
                  {leaderboard.length > 0 ? leaderboard.map((res, idx) => (
                    <div key={res.id} className="grid grid-cols-12 p-4 items-center hover:bg-stone-50/50 transition-colors">
                      <div className="col-span-1 font-mono text-stone-400">{idx + 1}</div>
                      <div className="col-span-5">
                        <p className="font-bold text-stone-800">{res.userName}</p>
                        <p className="text-[10px] text-stone-400">{res.subject} • {res.topic}</p>
                      </div>
                      <div className="col-span-2 text-right font-black text-emerald-600 text-base sm:text-lg">
                        {res.score}
                      </div>
                      <div className="col-span-2 text-right text-[9px] text-stone-500 truncate px-1">
                        {res.email}
                      </div>
                      <div className="col-span-2 text-right">
                        {res.cheated ? (
                          <span className="text-[10px] bg-red-50 text-red-500 px-2 py-1 rounded-full font-bold uppercase">Flagged</span>
                        ) : (
                          <span className="text-[10px] bg-emerald-50 text-emerald-500 px-2 py-1 rounded-full font-bold uppercase">Verified</span>
                        )}
                      </div>
                    </div>
                  )) : (
                    <div className="p-12 text-center text-stone-400">
                      No results recorded yet. Be the first!
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-12 text-center text-stone-400 text-sm">
        <p>© 2026 ReadySpace. All rights reserved.</p>
        <p className="mt-1">Secure Examination Environment</p>
      </footer>
    </div>
  );
}

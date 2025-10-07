import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import CourseScreen from './components/CourseScreen';
import ResultsScreen from './components/ResultsScreen';
import { User } from './types';
import { COURSE_DATA } from './constants';

type AppState = 'login' | 'course' | 'results';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('login');
  const [user, setUser] = useState<User | null>(null);
  const [finalScore, setFinalScore] = useState(0);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    setAppState('course');
  };

  const handleCourseComplete = (score: number) => {
    setFinalScore(score);
    if (user && user.licenseNumber.toUpperCase() !== 'DEMO') {
      localStorage.setItem(`course_completed_${user.licenseNumber}`, 'true');
    }
    setAppState('results');
  };

  const handleRestart = () => {
    setAppState('login');
    setUser(null);
    setFinalScore(0);
  };

  const totalQuestions = COURSE_DATA.reduce((total, module) => total + module.quiz.length, 0);

  const renderContent = () => {
    switch (appState) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'course':
        if (user) {
          return <CourseScreen user={user} courseData={COURSE_DATA} onCourseComplete={handleCourseComplete} />;
        }
        // Fallback to login if user is not set
        setAppState('login');
        return <LoginScreen onLogin={handleLogin} />;
      case 'results':
        if (user) {
          return <ResultsScreen user={user} finalScore={finalScore} totalQuestions={totalQuestions} onRestart={handleRestart} />;
        }
        // Fallback to login if user is not set
        setAppState('login');
        return <LoginScreen onLogin={handleLogin} />;
      default:
        return <LoginScreen onLogin={handleLogin} />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default App;
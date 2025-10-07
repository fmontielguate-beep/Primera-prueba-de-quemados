
import React, { useState } from 'react';
import { User, Module as ModuleType } from '../types';
import ModuleView from './ModuleView';
import Quiz from './Quiz';
import ProgressBar from './ProgressBar';
import Button from './Button';

interface CourseScreenProps {
  user: User;
  courseData: ModuleType[];
  onCourseComplete: (finalScore: number) => void;
}

const CourseScreen: React.FC<CourseScreenProps> = ({ user, courseData, onCourseComplete }) => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const currentModule = courseData[currentModuleIndex];

  const handleStartQuiz = () => {
    setIsQuizActive(true);
  };

  const handleQuizComplete = (score: number) => {
    setTotalScore(totalScore + score);
    setIsQuizActive(false);
    
    if (currentModuleIndex < courseData.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
    } else {
      const finalTotalScore = totalScore + score;
      onCourseComplete(finalTotalScore);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-4 sm:p-6 lg:p-8">
      <header className="max-w-5xl mx-auto bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-green-800">Curso ABIQ</h1>
            <p className="text-gray-600">Participante: {user.fullName}</p>
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
             <ProgressBar current={currentModuleIndex + (isQuizActive ? 0.5 : 0)} total={courseData.length} />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        {!isQuizActive ? (
          <div>
            <ModuleView module={currentModule} />
            <div className="mt-6 text-center">
              <Button onClick={handleStartQuiz}>Iniciar Autoevaluación del Módulo</Button>
            </div>
          </div>
        ) : (
          <Quiz 
            questions={currentModule.quiz} 
            onQuizComplete={handleQuizComplete} 
            moduleTitle={currentModule.title} 
          />
        )}
      </main>
    </div>
  );
};

export default CourseScreen;

import React, { useState } from 'react';
import { Question } from '../types';
import Button from './Button';

interface QuizProps {
  questions: Question[];
  onQuizComplete: (score: number) => void;
  moduleTitle: string;
}

const Quiz: React.FC<QuizProps> = ({ questions, onQuizComplete, moduleTitle }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    if (showExplanation) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };
  
  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const score = selectedAnswers.reduce((acc, answer, index) => {
        return answer === questions[index].correctAnswerIndex ? acc + 1 : acc;
      }, 0);
      onQuizComplete(score);
    }
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-bold text-green-800 mb-4">Autoevaluación: {moduleTitle}</h3>
      <p className="text-lg text-gray-700 mb-6">{currentQuestion.questionText}</p>

      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-colors ";
          if (showExplanation) {
            if (index === currentQuestion.correctAnswerIndex) {
              buttonClass += "bg-green-100 border-green-500 text-green-800";
            } else if (index === selectedAnswer) {
              buttonClass += "bg-red-100 border-red-500 text-red-800";
            } else {
              buttonClass += "bg-gray-100 border-gray-300";
            }
          } else {
            buttonClass += "bg-white hover:bg-green-50 border-gray-300 hover:border-green-400";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={buttonClass}
              disabled={showExplanation}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 text-green-900' : 'bg-red-50 text-red-900'}`}>
          <p className="font-bold">{isCorrect ? "¡Correcto!" : "Incorrecto."}</p>
          <p>{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="mt-8 text-right">
        <Button onClick={handleNext} disabled={!showExplanation}>
          {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Módulo'}
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
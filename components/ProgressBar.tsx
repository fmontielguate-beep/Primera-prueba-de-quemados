
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-green-700">Progreso del Curso</span>
        <span className="text-sm font-medium text-green-700">{current} de {total} Módulos</span>
      </div>
      <div className="w-full bg-green-200 rounded-full h-4">
        <div 
          className="bg-green-600 h-4 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;


import React from 'react';
import { Module } from '../types';

interface ModuleViewProps {
  module: Module;
}

const ModuleView: React.FC<ModuleViewProps> = ({ module }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold text-green-800 mb-2">{module.title}</h2>
      <p className="italic text-gray-600 mb-6 bg-green-50 p-3 rounded-md">{module.summary}</p>
      <div className="prose max-w-none">
        {module.content}
      </div>
    </div>
  );
};

export default ModuleView;

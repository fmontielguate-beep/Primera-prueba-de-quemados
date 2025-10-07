
import React from 'react';

export interface User {
  fullName: string;
  licenseNumber: string;
}

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Module {
  id: number;
  title: string;
  summary: string;
  content: React.ReactNode;
  quiz: Question[];
}

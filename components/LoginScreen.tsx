import React, { useState } from 'react';
import { User } from '../types';
import Button from './Button';

interface LoginScreenProps {
  onLogin: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [fullName, setFullName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset error at the start

    const trimmedFullName = fullName.trim();
    const trimmedLicense = licenseNumber.trim();

    if (!trimmedFullName || !trimmedLicense) {
        setError('Todos los campos son obligatorios.');
        return;
    }
    
    if (localStorage.getItem(`course_completed_${trimmedLicense}`)) {
        setError('Este número de colegiado ya ha completado el curso.');
        return;
    }

    // Handle Demo User separately
    if (trimmedLicense.toUpperCase() === 'DEMO') {
        if (password === 'Helena2016') {
            onLogin({ fullName: trimmedFullName, licenseNumber: trimmedLicense });
        } else {
            setError('Contraseña incorrecta.');
        }
        return; // End execution for demo user path
    }
    
    // Handle regular user
    onLogin({ fullName: trimmedFullName, licenseNumber: trimmedLicense });
  };
  
  const handleDemoClick = () => {
    setFullName('Usuario de Prueba');
    setLicenseNumber('DEMO');
    setPassword('');
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-green-800">Curso ABIQ</h1>
            <p className="text-gray-600 mt-2">Atención Básica Inicial del Quemado</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nombre y Apellido</label>
                <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Ej: Dra. Ana Pérez"
                />
            </div>
            <div>
                <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">Número de Colegiado</label>
                <input
                    id="licenseNumber"
                    type="text"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Ingrese su número o 'DEMO'"
                />
            </div>
            {licenseNumber.trim().toUpperCase() === 'DEMO' && (
                 <div>
                    <label htmlFor="password"  className="block text-sm font-medium text-gray-700">Contraseña de Prueba</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="Ingrese la contraseña"
                    />
                 </div>
            )}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div className="space-y-4">
                <Button type="submit" className="w-full">
                    Iniciar Curso
                </Button>
                <div className="text-center">
                    <button
                        type="button"
                        onClick={handleDemoClick}
                        className="text-sm font-medium text-green-600 hover:text-green-800 hover:underline focus:outline-none"
                    >
                        O acceder al curso de prueba
                    </button>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
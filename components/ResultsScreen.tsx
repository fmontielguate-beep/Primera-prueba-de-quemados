import React from 'react';
import { User } from '../types';
import Button from './Button';

interface ResultsScreenProps {
  user: User;
  finalScore: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Certificate: React.FC<Omit<ResultsScreenProps, 'onRestart'>> = ({ user, finalScore, totalQuestions }) => {
    const percentage = Math.round((finalScore / totalQuestions) * 100);
    const passed = percentage >= 70;
    const today = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div id="certificate" className="p-10 border-4 border-green-800 bg-white rounded-lg shadow-lg text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 mb-2">Certificado de Finalización</h1>
            <p className="text-lg text-gray-600 mb-6">Curso de Atención Básica Inicial del Quemado (ABIQ)</p>
            <p className="text-xl my-4">Se certifica que</p>
            <p className="text-3xl font-semibold text-green-700 underline my-4">{user.fullName}</p>
            <p className="text-xl my-4">
                con número de colegiado <span className="font-semibold">{user.licenseNumber}</span>,
                ha completado satisfactoriamente el curso en la fecha {today}.
            </p>
            <div className="mt-8">
                <p className="text-2xl">Puntuación Obtenida</p>
                <p className={`text-5xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>{percentage}%</p>
                <p className="text-gray-700">({finalScore} de {totalQuestions} respuestas correctas)</p>
            </div>
             <p className={`mt-6 text-xl font-semibold ${passed ? 'text-green-600' : 'text-red-600'}`}>
                {passed ? '¡Curso Aprobado!' : 'Curso No Aprobado'}
            </p>
        </div>
    );
};

const ResultsScreen: React.FC<ResultsScreenProps> = ({ user, finalScore, totalQuestions, onRestart }) => {
  const handlePrint = () => {
    const printContents = document.getElementById('certificate-wrapper')?.innerHTML;
    const originalContents = document.body.innerHTML;
    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Recargar para restaurar los scripts de React
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-4">
        <div id="certificate-wrapper">
           <Certificate user={user} finalScore={finalScore} totalQuestions={totalQuestions} />
        </div>
        
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Puntos Clave de Aprendizaje</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>
                    <strong>Evaluación Inicial (ABCDE):</strong> La prioridad absoluta es seguir el protocolo ABCDE, asegurando la vía aérea (A) con control cervical, especialmente si se sospecha lesión por inhalación.
                </li>
                <li>
                    <strong>Profundidad y Extensión:</strong> Clasificar correctamente la profundidad (1°, 2°, 3° grado) y estimar la extensión (%SCQ) con la "Regla de los 9" o tablas pediátricas es fundamental para determinar la gravedad y el tratamiento.
                </li>
                <li>
                    <strong>Reanimación Hídrica:</strong> El shock por quemadura se combate con una reanimación hídrica precoz y agresiva, usando la fórmula de Parkland (4ml x Kg x %SCQ) como guía y ajustando según la diuresis horaria (0.5-1 ml/kg/hr).
                </li>
                <li>
                    <strong>Lesión por Inhalación:</strong> Es una emergencia vital. La presencia de quemaduras faciales, esputo carbonáceo o quemaduras en espacios cerrados debe llevar a una intubación endotraqueal temprana para prevenir la obstrucción por edema.
                </li>
                <li>
                    <strong>Consideraciones Pediátricas:</strong> Los niños no son adultos pequeños. Tienen mayor superficie corporal, piel más delgada y menos reservas energéticas, lo que exige ajustes en la reanimación hídrica, un estricto control de la temperatura y la adición de glucosa.
                </li>
            </ul>
        </div>

        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handlePrint}>
                Imprimir / Guardar Certificado
            </Button>
             <Button onClick={onRestart} variant="secondary">
                Volver al Inicio
            </Button>
          </div>
            <p className="text-sm text-gray-500 mt-4">Puede usar la función de "Guardar como PDF" de su navegador.</p>
        </div>
    </div>
  );
};

export default ResultsScreen;
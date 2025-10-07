
import React from 'react';
import { Module } from './types';

export const COURSE_DATA: Module[] = [
  {
    id: 1,
    title: "Módulo 1: Evaluación y Manejo Inicial",
    summary: "Este módulo cubre los principios fundamentales de la atención inicial al paciente quemado, desde la anatomía de la piel hasta la evaluación de la gravedad y las primeras maniobras de estabilización.",
    // Fix: Replaced JSX with React.createElement calls to be valid in a .ts file.
    content: React.createElement(
      'div',
      { className: 'space-y-4 text-gray-700' },
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-green-800 mb-2' },
        'Anatomía y Fisiología de la Piel'
      ),
      React.createElement(
        'p',
        null,
        'La piel, el órgano más grande del cuerpo, se compone de dos capas principales: la epidermis y la dermis. La epidermis es la capa más superficial, actuando como barrera protectora. La dermis, más profunda, contiene vasos sanguíneos, nervios, folículos pilosos y glándulas. Debajo se encuentra la hipodermis o tejido subcutáneo. Las funciones vitales de la piel incluyen protección contra infecciones, prevención de la pérdida de fluidos, regulación de la temperatura y contacto sensorial.'
      ),
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-green-800 mb-2' },
        'Determinación de la Gravedad de la Quemadura'
      ),
      React.createElement(
        'p',
        null,
        'La gravedad de una quemadura depende de su profundidad y extensión. En niños y ancianos, la piel es más delgada, lo que puede resultar en lesiones más profundas de lo que aparentan inicialmente.'
      ),
      React.createElement(
        'ul',
        { className: 'list-disc list-inside space-y-2 pl-4' },
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Profundidad (Grado):'),
          React.createElement(
            'ul',
            { className: 'list-disc list-inside space-y-1 pl-6' },
            React.createElement(
              'li',
              null,
              React.createElement('strong', null, '1er Grado (Superficial):'),
              ' Afecta solo la epidermis. Causa enrojecimiento, dolor e hipersensibilidad. Cura en 5-7 días sin cicatriz.'
            ),
            React.createElement(
              'li',
              null,
              React.createElement('strong', null, '2do Grado (Espesor parcial):'),
              ' Afecta la epidermis y parte de la dermis. Se subdivide en superficial (con flictenas o ampollas, muy dolorosa) y profunda (aspecto más pálido, menos dolor). La superficial cura en 10-15 días, la profunda puede tardar más y dejar cicatriz.'
            ),
            React.createElement(
              'li',
              null,
              React.createElement('strong', null, '3er Grado (Espesor total):'),
              ' Destrucción completa de epidermis y dermis. La piel se ve blanquecina, marrón o acartonada. No hay dolor por la destrucción de las terminaciones nerviosas. Requiere injertos de piel.'
            )
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Extensión:'),
          ' Se utiliza la "Regla de los 9" en adultos para estimar el porcentaje de superficie corporal quemada (SCQ). En niños, se usan tablas como la de Lund-Browder, que ajustan los porcentajes según la edad, ya que la cabeza es proporcionalmente más grande. La palma de la mano del paciente (incluyendo dedos) representa aproximadamente el 1% de su SCQ.'
        )
      ),
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-green-800 mb-2' },
        'Evaluación y Estabilización Inicial (ABCDE)'
      ),
      React.createElement(
        'p',
        null,
        'La atención inicial sigue el mismo protocolo que cualquier paciente traumatizado:'
      ),
      React.createElement(
        'ul',
        { className: 'list-disc list-inside space-y-2 pl-4' },
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'A - Vía Aérea (Airway):'),
          ' Asegurar la permeabilidad de la vía aérea con control de la columna cervical. Buscar signos de lesión inhalatoria (quemaduras faciales, vibrisas nasales quemadas, esputo carbonáceo).'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'B - Ventilación (Breathing):'),
          ' Evaluar la calidad de la respiración. Administrar oxígeno al 100%. En quemaduras circunferenciales de tórax, puede ser necesaria una escarotomía para permitir la expansión torácica.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'C - Circulación (Circulation):'),
          ' Evaluar pulsos, relleno capilar y estado de conciencia. Iniciar fluidoterapia intravenosa con Ringer Lactato.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'D - Déficit Neurológico (Disability):'),
          ' Evaluar el nivel de conciencia (escala de Glasgow). Un paciente quemado debe estar inicialmente alerta; si no lo está, sospechar hipoxia o trauma asociado.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'E - Exposición (Exposure):'),
          ' Retirar toda la ropa y joyas para detener el proceso de quemadura y evaluar la extensión completa. Cubrir al paciente con sábanas limpias y secas para prevenir la hipotermia.'
        )
      )
    ),
    quiz: [
      {
        questionText: "¿Qué estructura de la piel contiene las terminaciones nerviosas y los vasos sanguíneos?",
        options: ["Epidermis", "Hipodermis", "Dermis", "Membrana basal"],
        correctAnswerIndex: 2,
        explanation: "La dermis es la capa profunda que alberga las estructuras vitales como nervios, vasos, y folículos, siendo crucial para la sensibilidad y nutrición de la piel."
      },
      {
        questionText: "Una quemadura que presenta ampollas (flictenas) y es muy dolorosa se clasifica como:",
        options: ["Primer grado", "Segundo grado superficial", "Segundo grado profundo", "Tercer grado"],
        correctAnswerIndex: 1,
        explanation: "La presencia de ampollas y dolor intenso es característica de las quemaduras de segundo grado superficial, que afectan la epidermis y la dermis papilar."
      },
      {
        questionText: "En un adulto, ¿qué porcentaje de superficie corporal representa un brazo completo según la Regla de los 9?",
        options: ["4.5%", "9%", "18%", "1%"],
        correctAnswerIndex: 1,
        explanation: "La Regla de los 9 asigna un 9% a cada brazo completo (4.5% cara anterior y 4.5% cara posterior)."
      },
      {
        questionText: "¿Cuál es el primer paso en la evaluación inicial de un paciente quemado grave?",
        options: ["Calcular la extensión de la quemadura", "Administrar analgésicos", "Asegurar la vía aérea con control cervical", "Iniciar fluidoterapia"],
        correctAnswerIndex: 2,
        explanation: "Siguiendo el protocolo ABCDE, la prioridad absoluta es la evaluación y aseguramiento de la Vía Aérea (A) y la ventilación."
      },
      {
        questionText: "¿Por qué es crucial retirar las joyas de un paciente quemado?",
        options: ["Para evitar infecciones", "Para evitar el efecto torniquete por el edema", "Para facilitar la limpieza de la herida", "Para cumplir con el protocolo hospitalario"],
        correctAnswerIndex: 1,
        explanation: "El edema post-quemadura se desarrolla rápidamente, y las joyas pueden actuar como un torniquete, comprometiendo la circulación distal de la extremidad."
      }
    ]
  },
  {
    id: 2,
    title: "Módulo 2: Vía Aérea y Lesión por Inhalación",
    summary: "Este módulo se enfoca en el diagnóstico y manejo de la lesión por inhalación, una de las principales causas de mortalidad en pacientes quemados, detallando su fisiopatología y tratamiento específico.",
    content: React.createElement(
      'div',
      { className: 'space-y-4 text-gray-700' },
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-green-800 mb-2' },
        'Fisiopatología de la Lesión por Inhalación'
      ),
      React.createElement(
        'p',
        null,
        'La lesión por inhalación agrupa tres problemas distintos que pueden coexistir:'
      ),
      React.createElement(
        'ol',
        { className: 'list-decimal list-inside space-y-2 pl-4' },
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Lesión térmica supraglótica (por encima de la glotis):'),
          ' El aire caliente causa un edema masivo en la orofaringe, pudiendo obstruir la vía aérea superior rápidamente. El edema suele empeorar con la reanimación hídrica.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Lesión química infraglótica (por debajo de la glotis):'),
          ' La inhalación de productos de la combustión (aldehídos, óxidos de azufre, etc.) provoca una respuesta inflamatoria severa en la tráquea, bronquios y alvéolos. Esto lleva a broncoespasmo, aumento de secreciones, y edema pulmonar.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Intoxicación sistémica:'),
          ' Principalmente por monóxido de carbono (CO) y cianuro. El CO tiene una afinidad por la hemoglobina ~200 veces mayor que el oxígeno, causando hipoxia tisular severa a pesar de una saturación de oxígeno normal en el pulsioxímetro.'
        )
      ),
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-green-800 mb-2' },
        'Diagnóstico y Sospecha Clínica'
      ),
      React.createElement(
        'p',
        null,
        'La sospecha es clave. Se debe considerar lesión por inhalación en todo paciente con:'
      ),
      React.createElement(
        'ul',
        { className: 'list-disc list-inside space-y-2 pl-4' },
        React.createElement('li', null, 'Quemaduras en un espacio cerrado.'),
        React.createElement(
          'li',
          null,
          'Quemaduras faciales, especialmente alrededor de boca y nariz.'
        ),
        React.createElement('li', null, 'Vibrisas nasales quemadas.'),
        React.createElement('li', null, 'Esputo carbonáceo (con hollín).'),
        React.createElement('li', null, 'Cambios en la voz (ronquera) o estridor.'),
        React.createElement('li', null, 'Dificultad respiratoria o taquipnea.')
      ),
      React.createElement(
        'p',
        null,
        'El diagnóstico de certeza se realiza mediante fibrobroncoscopia, que permite visualizar directamente el edema, eritema y depósitos de hollín en la vía aérea.'
      ),
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-green-800 mb-2' },
        'Manejo Específico'
      ),
      React.createElement(
        'p',
        null,
        'El manejo es proactivo y se centra en asegurar la vía aérea antes de que el edema la comprometa por completo.'
      ),
      React.createElement(
        'ul',
        { className: 'list-disc list-inside space-y-2 pl-4' },
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Oxigenoterapia:'),
          ' Administrar oxígeno humidificado al 100% a todos los pacientes con sospecha. Esto acelera la eliminación del CO.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Intubación Precoz:'),
          ' Es la medida más importante. Si hay alta sospecha o signos de obstrucción inminente (estridor, ronquera), se debe intubar al paciente sin demora. Esperar puede hacer la intubación imposible debido al edema.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Soporte Ventilatorio:'),
          ' Una vez intubado, el paciente requerirá ventilación mecánica, a menudo con estrategias de protección pulmonar para manejar el posible desarrollo de un síndrome de distrés respiratorio agudo (SDRA).'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Manejo de Secreciones:'),
          ' Fisioterapia respiratoria y aspiración frecuente son necesarias para manejar la broncorrea.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Broncodilatadores:'),
          ' Pueden ser útiles para tratar el broncoespasmo.'
        )
      ),
      React.createElement(
        'p',
        null,
        React.createElement('strong', null, 'Importante en Pediatría:'),
        ' La vía aérea de los niños es de menor calibre, por lo que el edema progresa mucho más rápido y la obstrucción es más probable. La indicación de intubación debe ser aún más precoz.'
      )
    ),
    quiz: [
      {
        questionText: "¿Cuál es el principal peligro de una lesión térmica por encima de la glotis?",
        options: ["Infección pulmonar", "Broncoespasmo severo", "Obstrucción de la vía aérea por edema", "Intoxicación por cianuro"],
        correctAnswerIndex: 2,
        explanation: "La lesión térmica supraglótica causa un edema masivo de la faringe y laringe que puede obstruir completamente la vía aérea superior, siendo una emergencia vital."
      },
      {
        questionText: "Un paciente llega con quemaduras faciales y esputo con hollín. ¿Cuál es la medida más crítica a considerar?",
        options: ["Administrar antibióticos", "Realizar una radiografía de tórax", "Intubación endotraqueal precoz", "Aplicar crema en la cara"],
        correctAnswerIndex: 2,
        explanation: "Los signos de lesión por inhalación, como el esputo carbonáceo, indican un alto riesgo de edema de la vía aérea. La intubación precoz es crucial para prevenir la obstrucción."
      },
      {
        questionText: "¿Por qué un pulsioxímetro puede mostrar una saturación de 100% en un paciente con intoxicación grave por CO?",
        options: ["Porque el CO no afecta la sangre", "Porque el pulsioxímetro no diferencia entre oxihemoglobina y carboxihemoglobina", "Porque el paciente está respirando oxígeno al 100%", "Porque la intoxicación por CO es leve"],
        correctAnswerIndex: 1,
        explanation: "El pulsioxímetro mide la absorción de luz para estimar la saturación, pero no puede distinguir si la hemoglobina está unida a oxígeno o a monóxido de carbono (CO), dando una lectura falsamente alta."
      },
      {
        questionText: "El diagnóstico definitivo de lesión por inhalación se confirma mediante:",
        options: ["Radiografía de tórax", "Gases en sangre arterial", "Auscultación pulmonar", "Fibrobroncoscopia"],
        correctAnswerIndex: 3,
        explanation: "La fibrobroncoscopia permite la visualización directa de la vía aérea, confirmando la presencia de edema, eritema, y depósitos de hollín, lo que establece el diagnóstico."
      },
      {
        questionText: "En niños con sospecha de lesión inhalatoria, el manejo debe ser más agresivo porque:",
        options: ["Tienen menos reservas de oxígeno", "Su vía aérea es de menor calibre y se obstruye más rápido", "Son más propensos a infecciones", "No cooperan durante el examen"],
        correctAnswerIndex: 1,
        explanation: "El diámetro reducido de la vía aérea pediátrica significa que una cantidad similar de edema puede causar una obstrucción completa mucho más rápidamente que en un adulto."
      }
    ]
  },
   {
    id: 3,
    title: "Módulo 3: Shock y Reanimación Hídrica",
    summary: "Este módulo detalla la respuesta fisiopatológica sistémica a las quemaduras graves, el desarrollo del shock hipovolémico y los principios de la reanimación con líquidos, incluyendo el cálculo y monitoreo.",
    content: React.createElement(
      'div',
      { className: 'space-y-4 text-gray-700' },
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-green-800 mb-2' },
        'Fisiopatología del Shock por Quemadura'
      ),
      React.createElement(
        'p',
        null,
        "Una quemadura extensa desencadena una respuesta inflamatoria sistémica masiva. Los mediadores inflamatorios provocan un aumento drástico de la permeabilidad capilar, no solo en la zona quemada sino en todo el cuerpo. Esto causa una fuga masiva de fluido rico en proteínas (plasma) desde el espacio intravascular hacia el intersticio, lo que se conoce como 'tercer espacio'."
      ),
      React.createElement('p', null, 'Esta pérdida de volumen plasmático conduce a:'),
      React.createElement(
        'ul',
        { className: 'list-disc list-inside space-y-2 pl-4' },
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Hipovolemia severa:'),
          ' Disminución del volumen sanguíneo circulante.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Hemoconcentración:'),
          ' Aumento del hematocrito por la pérdida de plasma.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Disminución del gasto cardíaco:'),
          ' El corazón no tiene suficiente volumen para bombear.'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Hipoperfusión tisular:'),
          ' Los órganos no reciben suficiente oxígeno y nutrientes, llevando a disfunción orgánica y shock.'
        )
      ),
      React.createElement(
        'p',
        null,
        'El pico de esta fuga capilar ocurre en las primeras 8-12 horas post-quemadura y comienza a resolverse después de 24 horas.'
      ),
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-green-800 mb-2' },
        'Reanimación con Líquidos: La Fórmula de Parkland'
      ),
      React.createElement(
        'p',
        null,
        'El objetivo de la reanimación hídrica es reponer el volumen intravascular perdido para mantener la perfusión de los órganos vitales. La fórmula más utilizada es la de Parkland:'
      ),
      React.createElement(
        'p',
        { className: 'font-semibold text-center p-2 bg-green-100 rounded' },
        'Volumen total (primeras 24h) = 4 ml x Peso (kg) x %SCQ'
      ),
      React.createElement(
        'p',
        null,
        'La administración de este volumen se realiza de la siguiente manera:'
      ),
      React.createElement(
        'ul',
        { className: 'list-disc list-inside space-y-2 pl-4' },
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'La primera mitad'),
          ' del volumen total se administra en las ',
          React.createElement('strong', null, 'primeras 8 horas'),
          ' desde el momento de la quemadura (no desde la llegada al hospital).'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'La segunda mitad'),
          ' se administra en las ',
          React.createElement('strong', null, 'siguientes 16 horas'),
          '.'
        )
      ),
      React.createElement(
        'p',
        null,
        'El fluido de elección en las primeras 24 horas es una solución cristaloide isotónica, como el ',
        React.createElement('strong', null, 'Ringer Lactato'),
        '.'
      ),
      React.createElement(
        'p',
        null,
        React.createElement('strong', null, 'En pediatría:'),
        ' La fórmula puede ajustarse a 3-4 ml/kg/%SCQ. Además, los niños pequeños tienen pocas reservas de glucógeno, por lo que requieren líquidos de mantenimiento con glucosa además de la reanimación para prevenir la hipoglucemia.'
      ),
      React.createElement(
        'h3',
        { className: 'text-xl font-bold text-green-800 mb-2' },
        'Monitoreo de la Reanimación'
      ),
      React.createElement(
        'p',
        null,
        'La fórmula de Parkland es solo una guía inicial. La reanimación debe ser ajustada según la respuesta del paciente. El mejor indicador de una perfusión adecuada es la ',
        React.createElement('strong', null, 'diuresis horaria'),
        ':'
      ),
      React.createElement(
        'ul',
        { className: 'list-disc list-inside space-y-2 pl-4' },
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Adultos:'),
          ' El objetivo es 0.5 ml/kg/hora (aproximadamente 30-50 ml/hora).'
        ),
        React.createElement(
          'li',
          null,
          React.createElement('strong', null, 'Niños (< 30 kg):'),
          ' El objetivo es 1 ml/kg/hora.'
        )
      ),
      React.createElement(
        'p',
        null,
        'Otros parámetros a monitorear incluyen la frecuencia cardíaca, la presión arterial media y el estado de conciencia. Si la diuresis es baja, se debe aumentar el ritmo de infusión. Si es demasiado alta, se puede reducir para evitar la sobrecarga de líquidos y el edema excesivo.'
      )
    ),
    quiz: [
      {
        questionText: "¿Cuál es el evento fisiopatológico clave que causa el shock en un gran quemado?",
        options: ["Infección severa", "Pérdida de sangre", "Aumento de la permeabilidad capilar y fuga de plasma", "Fallo cardíaco primario"],
        correctAnswerIndex: 2,
        explanation: "La liberación masiva de mediadores inflamatorios aumenta la permeabilidad de los capilares en todo el cuerpo, causando una fuga masiva de plasma al intersticio, lo que lleva a hipovolemia y shock."
      },
      {
        questionText: "Según la fórmula de Parkland, ¿cómo se administra el volumen total de líquidos calculado para las primeras 24 horas?",
        options: ["Todo en las primeras 8 horas", "La mitad en las primeras 8h y la otra mitad en las siguientes 16h", "Un tercio cada 8 horas", "A un ritmo constante durante 24 horas"],
        correctAnswerIndex: 1,
        explanation: "La fórmula de Parkland especifica que la mitad del volumen se infunde en las primeras 8 horas desde la lesión, y la otra mitad en las 16 horas restantes, para compensar la fase de máxima fuga capilar."
      },
      {
        questionText: "Un adulto de 70 kg sufre quemaduras en el 40% de su SCQ. ¿Qué volumen de Ringer Lactato necesita en las primeras 8 horas?",
        options: ["11,200 ml", "5,600 ml", "2,800 ml", "1,400 ml"],
        correctAnswerIndex: 1,
        explanation: "Cálculo total: 4 ml x 70 kg x 40% = 11,200 ml. La mitad se administra en las primeras 8 horas: 11,200 / 2 = 5,600 ml."
      },
      {
        questionText: "El parámetro más fiable para monitorizar la eficacia de la reanimación hídrica es:",
        options: ["La presión arterial", "La frecuencia cardíaca", "El nivel de hematocrito", "La diuresis horaria"],
        correctAnswerIndex: 3,
        explanation: "La diuresis horaria es el mejor indicador de la perfusión renal y, por extensión, de la perfusión de otros órganos vitales. Refleja directamente si el volumen intravascular es adecuado."
      },
      {
        questionText: "¿Por qué los niños pequeños quemados necesitan soluciones glucosadas además de la reanimación con Ringer Lactato?",
        options: ["Para prevenir la deshidratación", "Porque pierden más glucosa por la piel", "Para prevenir la hipoglucemia debido a sus bajas reservas de glucógeno", "Porque la glucosa ayuda a la cicatrización"],
        correctAnswerIndex: 2,
        explanation: "Los lactantes y niños pequeños tienen reservas de glucógeno muy limitadas, y el estrés metabólico de la quemadura puede agotarlas rápidamente, llevando a una hipoglucemia peligrosa si no se administra glucosa."
      }
    ]
  }
];

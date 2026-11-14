import { Question } from '../models/question';

export const QUESTIONS_DATA: Question[] = [
  {
    id: 1,
    category: '🎨 Arte',
    text: 'Cuando nos juntamos e hicimos un cuadro juntos, ¿qué animal fue el que dibujé yo?',
    options: ['Un gato', 'Un perro', 'Un Pingüino', 'Un sapo'],
    correctAnswer: 'Un Pingüino',
    color: '#FFB3BA'
  },
  {
    id: 2,
    category: '📜 Historia',
    text: '¿Dónde o cómo fue la primera vez que interactuamos?',
    options: ['En la escuela', 'En un cumple familiar', 'En una plaza', 'Por chat'],
    correctAnswer: 'En un cumple familiar',
    color: '#A8D8FF'
  },
  {
    id: 3,
    category: '🔬 Educación',
    text: 'Cuando me colé en tu aula como "ayudanteJAKS", ¿qué clase tocaba?',
    options: ['Matemática', 'Literatura', 'Inglés', 'Geografía'],
    correctAnswer: 'Inglés',
    color: '#FFF4A3'
  },
  {
    id: 4,
    category: '🌍 Lugares',
    text: '¡Esta seguro la sabésXD! ¿A qué lugar todavía no fuimos y es el que más veces dijimos para ir?',
    options: ['Al cine', 'Al Barrio Chino', 'A merendar', 'A mi casa'],
    correctAnswer: 'Al cine',
    color: '#B8F2D0'
  },
  {
    id: 5,
    category: '⏰ Tiempo',
    text: '¿Cuánto tiempo hace que nos conocemos?',
    options: ['No nos conocemos...(deah)', '1 año', '3 años', '10 años'],
    correctAnswer: '3 años',
    color: '#D6C2FF'
  },
  {
    id: 6,
    category: '💌 Mensajes',
    text: ' ¿Qué es lo que me dijiste que sentís que me debes?',
    options: ['Una salida si o si😭', 'Un peluche de perro salchicha🦴', 'Un audio de voz cantando (pofavor:3)', 'Un pin de martín'],
    correctAnswer: 'Una salida si o si😭',
    color: '#FFD6A5'
  },
  {
    id: 7,
    category: '💭 Sueños',
    text: '¿De que se trataban (principalmente) mis sueños en el que estabas presente?',
    options: ['De ir al cine Ali, vos y yo', 'De que nos peleábamos y nos reconciliábamos', 'De que me pedias que te dibuje', 'De ir a una plaza'],
    correctAnswer: 'De ir al cine Ali, vos y yo',
    color: '#CFE8FF'
  },
  {
    id: 8,
    category: '🧩 Misterio',
    text: 'Pregunta trampa: ¿Qué es aquello que perdimos y que no volveremos a recuperar?',
    options: ['El tiempo que pasamos separados', 'La oportunidad de ir al cine (ahre y seguia con eso)', 'La chance de llegar a ser más cercanos y así tener todavía más tiempo para arruinarnos mutuamente la paz mental. Porque estoy harto de estar tan tranquilo y no poder decirte lo que siento', 'TODAS las anteriores (menos la últimaxD)'],
    correctAnswer: 'TODAS las anteriores (menos la últimaxD)',
    color: '#C7F0A1'
  }
];

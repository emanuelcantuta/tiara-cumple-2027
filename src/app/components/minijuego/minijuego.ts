import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { Question } from './models/question';
import { AnswerStatus } from './models/answer-status';

@Component({
  imports: [CommonModule],
  selector: 'app-minijuego',
  standalone: true,
  styleUrl: './minijuego.css',
  templateUrl: './minijuego.html',
})
export class Minijuego implements OnInit, OnDestroy {
  @Output() gameWon = new EventEmitter<void>();
  @Output() gameLost = new EventEmitter<void>();

  private cdr = inject(ChangeDetectorRef);
  AnswerStatus = AnswerStatus;

  isSystemLoading: boolean = true;
  isGameOver: boolean = false;

  // estado del jugador
  lives: number = 3;
  score: number = 0;
  hasBomb: boolean = true;

  // estado del juego
  isSpinning: boolean = false;
  currentQuestion: Question | null = null;
  askedQuestionsIds: number[] = [];
  currentRotation: number = 0;
  wonQuestionsIds: number[] = [];

  // Variables para el reloj
  timeLeft: number = 15;
  private timerInterval: any;

  selectedAnswer: string | null = null;
  answerResult: AnswerStatus | null = null;
  hiddenOptions: string[] = [];

  questionsList: Question[] = [
    {
      id: 1,
      category: '🎨 Arte',
      text: 'Cuando nos juntamos e hicimos un cuadro juntos, ¿qué animal fue el que dibujé yo?',
      options: ['Un gato', 'Un perro', 'Un Pingüino', 'Un sapo'],
      correctAnswer: 'Un Pingüino',
      color: '#FFB3BA' // Rosa pastel
    },
    {
      id: 2,
      category: '📜 Historia',
      text: '¿Dónde o cómo fue la primera vez que interactuamos?',
      options: ['En la escuela', 'En un cumple familiar', 'En una plaza', 'Por chat'],
      correctAnswer: 'En un cumple familiar',
      color: '#A8D8FF' // Celeste
    },
    {
      id: 3,
      category: '🔬 Educación',
      text: 'Cuando me colé en tu aula como "ayudanteJAKS", ¿qué clase tocaba?',
      options: ['Matemática', 'Literatura', 'Inglés', 'Geografía'],
      correctAnswer: 'Inglés',
      color: '#FFF4A3' // Amarillo pastel
    },
    {
      id: 4,
      category: '🌍 Lugares',
      text: '¡Esta seguro la sabésXD! ¿A qué lugar todavía no fuimos y es el que más veces dijimos para ir?',
      options: ['Al cine', 'Al Barrio Chino', 'A merendar', 'A mi casa'],
      correctAnswer: 'Al cine',
      color: '#B8F2D0' // Verde menta
    },
    {
      id: 5,
      category: '⏰ Tiempo',
      text: '¿Cuánto tiempo hace que nos conocemos?',
      options: ['No nos conocemos...(deah)', '1 año', '4 años', '10 años'],
      correctAnswer: '4 años',
      color: '#D6C2FF' // Lila suave
    },
    {
      id: 6,
      category: '💌 Mensajes',
      text: ' ¿Qué es lo que me dijiste que sentís que me debes?',
      options: ['Una salida si o si😭', 'Un peluche de perro salchicha🦴', 'Un audio de voz cantando (pofavor:3)', 'Un pin de martín'],
      correctAnswer: 'Una salida si o si😭',
      color: '#FFD6A5' // Naranja pastel
    },
    {
      id: 7,
      category: '💭 Sueños',
      text: '¿De que se trataban (principalmente) mis sueños en el que estabas presente?',
      options: ['De ir al cine Ali, vos y yo', 'De que nos peleábamos y nos reconciliábamos', 'De que me pedias que te dibuje', 'De ir a una plaza'],
      correctAnswer: 'De ir al cine Ali, vos y yo',
      color: '#CFE8FF' // azul cielo muy claro
    },
    {
      id: 8,
      category: '🧩 Misterio',
      text: 'Pregunta trampa: ¿Qué es aquello que perdimos y que no volveremos a recuperar?',
      options: ['El tiempo que pasamos separados', 'La oportunidad de ir al cine (ahre y seguia con eso)', 'La chance de llegar a ser más cercanos y así tener todavía más tiempo para arruinarnos mutuamente la paz mental. Porque estoy harto de estar tan tranquilo y no poder decirte lo que siento', 'TODAS las anteriores (menos la últimaxD)'],
      correctAnswer: 'TODAS las anteriores (menos la últimaxD)',
      color: '#C7F0A1' // Verde lima pastel
    }

  ];

  // FILTRO: Trae solo las preguntas que todavía no ganó
  get availableQuestions(): Question[] {
    return this.questionsList.filter(q => !this.wonQuestionsIds.includes(q.id));
  }

  // DIBUJA EL GRADIENTE DE LA RULETA SEGÚN LAS PREGUNTAS DISPONIBLES
  get rouletteGradient(): string {
    const available = this.availableQuestions;
    if (available.length === 0) return '#f0f0f0'; // Gris si no quedan preguntas

    const sliceSize = 360 / available.length;
    let gradient = 'conic-gradient(';
    
    available.forEach((q, index) => {
      const startAngle = index * sliceSize;
      const endAngle = startAngle + sliceSize;
      gradient += `${q.color} ${startAngle}deg ${endAngle}deg`;
      if (index < available.length - 1) gradient += ', ';
    });
    
    return gradient + ')';
  }

  ngOnInit() {
    setTimeout(() => {
      this.isSystemLoading = false;
      this.cdr.detectChanges();
    }, 2000);
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  spinRoulette() {
    const available = this.availableQuestions;
    if (this.isSpinning || available.length === 0 || this.isGameOver) return;
    
    this.isSpinning = true;

    const randomIndex = Math.floor(Math.random() * available.length);
    const selectedQ = available[randomIndex];

    // Matemática dinámica según la cantidad de gajos que queden
    const sliceSize = 360 / available.length;
    const sliceCenter = (randomIndex * sliceSize) + (sliceSize / 2);
    const targetDegree = 360 - sliceCenter;
    
    const extraSpins = 360 * 5;
    const remainder = this.currentRotation % 360;
    this.currentRotation = this.currentRotation - remainder + extraSpins + targetDegree;

    setTimeout(() => {
      this.isSpinning = false;
      this.currentQuestion = selectedQ;
      this.startTimer();
      this.cdr.detectChanges(); 
    }, 3000);
  }

  // --- LÓGICA DEL TIEMPO ---
  startTimer() {
    this.timeLeft = 15;
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.cdr.detectChanges();

      if (this.timeLeft <= 0) {
        this.stopTimer();
        this.handleTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  playSoundCorrect() { 
    const audio = new Audio('assets/audio/ui/correct-answer.wav');
    audio.volume = 0.5;
    audio.play();
  }

  playSoundError() {
    const audio = new Audio('assets/audio/ui/incorrect-answer.wav');
    audio.play();
  }

  handleTimeout() {
    this.answerResult = AnswerStatus.Timeout;
    this.lives--; // 1. Restamos la vida al instante
    this.playSoundError();
    this.cdr.detectChanges();

    setTimeout(() => {
      this.evaluateGameStatus(); // 2. Evaluamos qué pasa después de 2 segs
    }, 2000);
  }

  // --- LÓGICA DE RESPUESTA BÁSICA ---
  checkAnswer(selectedOption: string) {
    if (this.selectedAnswer) return; 

    this.stopTimer();
    this.selectedAnswer = selectedOption;

    if (selectedOption === this.currentQuestion?.correctAnswer) {
      this.answerResult = AnswerStatus.Correct;
      this.score++;
      this.wonQuestionsIds.push(this.currentQuestion.id); 
      this.playSoundCorrect();
    } else {
      this.answerResult = AnswerStatus.Incorrect;
      this.lives--; // 1. Restamos la vida al instante
      this.playSoundError();
    }
    
    this.cdr.detectChanges();

    setTimeout(() => {
      this.evaluateGameStatus(); // 2. Evaluamos qué pasa después de 2 segs
    }, 2000); 
  }

  evaluateGameStatus() {
    if (this.lives <= 0) {
      this.isGameOver = true;
      this.currentQuestion = null;
      this.cdr.detectChanges();
      
      setTimeout(() => {
        this.gameLost.emit();
      }, 4000);
      
    } else if (this.wonQuestionsIds.length === this.questionsList.length) {
      this.gameWon.emit(); 
    } else {
      this.resetTurn();
    }
  }

  resetTurn() {
    this.currentQuestion = null;
    this.selectedAnswer = null;
    this.answerResult = null;
    this.hiddenOptions = [];
    
    // 1. Verificamos si perdió todas las vidas
    if (this.lives <= 0) {
      this.isGameOver = true;
      this.cdr.detectChanges();
      
      setTimeout(() => {
        this.gameLost.emit(); // Le avisa al padre (Personajes) que cierre el juego
      }, 4000);
      return;
    }
    
    // 2. Verificamos si ganó
    if (this.wonQuestionsIds.length === this.questionsList.length) {
      this.gameWon.emit(); 
    }
    
    this.cdr.detectChanges();
  }

  useBomb() {
    if (!this.hasBomb || !this.currentQuestion || this.selectedAnswer) return;

    this.hasBomb = false;

    const correct = this.currentQuestion.correctAnswer;
    const incorrects = this.currentQuestion.options.filter(opt => opt !== correct);

    // Mezclamos las incorrectas y elegimos 2 al azar para ocultarlas
    const shuffled = incorrects.sort(() => 0.5 - Math.random());
    this.hiddenOptions = [shuffled[0], shuffled[1]];

    this.cdr.detectChanges();
  }
}

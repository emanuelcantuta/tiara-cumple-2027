import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Question } from './models/question';
import { AnswerStatus } from './models/answer-status';

@Component({
  imports: [CommonModule],
  selector: 'app-minijuego',
  standalone: true,
  styleUrl: './minijuego.css',
  templateUrl: './minijuego.html',
})
export class Minijuego implements OnInit {
  @Output() gameWon = new EventEmitter<void>();

  private cdr = inject(ChangeDetectorRef);
  isSystemLoading: boolean = true;
  AnswerStatus = AnswerStatus;

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
  timeLeft: number = 10;
  private timerInterval: any;

  selectedAnswer: string | null = null;
  answerResult: AnswerStatus | null = null;

  questionsList: Question[] = [
    {
      id: 1,
      category: '🎨 Arte',
      text: 'Cuando nos juntamos e hicimos un cuadro juntos, ¿qué animal fue el que dibujé yo?',
      options: ['Un gato', 'Un perro', 'El Pingüino', 'Un sapo'],
      correctAnswer: 'El Pingüino',
      color: '#ffb6c1' // Rosa pastel
    },
    {
      id: 2,
      category: '📜 Historia',
      text: '¿Dónde o cómo fue la primera vez que interactuamos?',
      options: ['En la escuela', 'En un cumple familiar', 'En una plaza', 'Por chat'],
      correctAnswer: 'En un cumple familiar',
      color: '#add8e6' // Celeste
    },
    {
      id: 3,
      category: '🔬 Educación',
      text: 'Cuando me colé en tu aula como "ayudanteJAKS", ¿qué clase tocaba?',
      options: ['Matemática', 'Literatura', 'Inglés', 'Geografía'],
      correctAnswer: 'Inglés',
      color: '#fff5b4' // Amarillo
    },
    {
      id: 4,
      category: '🌍 Lugares',
      text: '¡Esta seguro la sabésXD! ¿A qué lugar todavía no fuimos y es el que más veces dijimos para ir?',
      options: ['Al cine', 'Al Barrio Chino', 'A merendar', 'A mi casa'],
      correctAnswer: 'Al cine',
      color: '#bdfcc9' // Verde agua
    },/*
    {
      id: 5,
      category: '🍿 Espectáculos',
      text: '¿Acá va tu quinta pregunta?',
      options: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'],
      correctAnswer: 'Opción Correcta'
    }
       */
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
    if (this.isSpinning || available.length === 0) return;
    
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
    this.timeLeft = 10; 
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
    // TODO: A futuro, descomentar y poner la ruta de tu sonido de acierto
    // const audio = new Audio('assets/audio/correcto.mp3');
    // audio.play();
  }

  playSoundError() {
    // TODO: A futuro, descomentar y poner la ruta de tu sonido de error/perder vida
    // const audio = new Audio('assets/audio/error.mp3');
    // audio.play();
  }

  handleTimeout() {
    this.answerResult = AnswerStatus.Timeout;
    this.playSoundError();
    this.cdr.detectChanges();

    setTimeout(() => {
      this.lives--;
      this.resetTurn();
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
      this.lives--;
      this.playSoundError();
    }
    
    this.cdr.detectChanges();

    setTimeout(() => {
      this.resetTurn();
    }, 2000); 
  }

  resetTurn() {
    this.currentQuestion = null;
    this.selectedAnswer = null;
    this.answerResult = null;
    
    // validamos si ganó todas las preguntas
    if (this.wonQuestionsIds.length === this.questionsList.length) {
      this.gameWon.emit(); // Avisar a Personajes que ganó el minijuego
    }
    
    this.cdr.detectChanges();
  }

  useBomb() {}
}

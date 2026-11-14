import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, OnDestroy, OnInit, Output, signal, computed } from '@angular/core';
import { SoundEffectsService } from '@services/sound-effects.service';
import { Question } from './models/question';
import { AnswerStatus } from './models/answer-status';
import { QUESTIONS_DATA } from './data/questions.data';
import { calculateRouletteGradient, calculateSpinTarget } from './utils/roulette.utils';

@Component({
  imports: [CommonModule],
  selector: 'app-minijuego',
  styleUrl: './minijuego.css',
  templateUrl: './minijuego.html',
})
export class Minijuego implements OnInit, OnDestroy {
  @Output() gameWon = new EventEmitter<void>();
  @Output() gameLost = new EventEmitter<void>();

  private cdr = inject(ChangeDetectorRef);
  private soundEffects = inject(SoundEffectsService);
  AnswerStatus = AnswerStatus;

  isSystemLoading: boolean = true;
  isGameOver: boolean = false;

  lives: number = 3;
  score: number = 0;
  hasBomb: boolean = true;

  isSpinning: boolean = false;
  currentQuestion: Question | null = null;
  askedQuestionsIds: number[] = [];
  currentRotation: number = 0;
  wonQuestionsIds = signal<number[]>([]);

  timeLeft: number = 15;
  private timerInterval: ReturnType<typeof setInterval> | null = null;
  private timeoutIds: ReturnType<typeof setTimeout>[] = [];

  selectedAnswer: string | null = null;
  answerResult: AnswerStatus | null = null;
  hiddenOptions: string[] = [];

  questionsList: Question[] = QUESTIONS_DATA;

  availableQuestions = computed<Question[]>(() => {
    const won = this.wonQuestionsIds();
    return this.questionsList.filter(q => !won.includes(q.id));
  });

  rouletteGradient = computed<string>(() => {
    return calculateRouletteGradient(this.availableQuestions());
  });

  ngOnInit() {
    this.addTimeout(() => {
      this.isSystemLoading = false;
      this.cdr.detectChanges();
    }, 2000);
  }

  ngOnDestroy() {
    this.stopTimer();
    this.clearAllTimeouts();
  }

  private addTimeout(callback: () => void, delay: number): void {
    const id = setTimeout(() => {
      this.timeoutIds = this.timeoutIds.filter(t => t !== id);
      callback();
    }, delay);
    this.timeoutIds.push(id);
  }

  private clearAllTimeouts(): void {
    this.timeoutIds.forEach(id => clearTimeout(id));
    this.timeoutIds = [];
  }

  spinRoulette() {
    const available = this.availableQuestions();
    if (this.isSpinning || available.length === 0 || this.isGameOver) return;
    
    this.isSpinning = true;

    const randomIndex = Math.floor(Math.random() * available.length);
    const selectedQ = available[randomIndex];

    this.currentRotation = calculateSpinTarget(
      randomIndex,
      available.length,
      this.currentRotation
    );

    this.addTimeout(() => {
      this.isSpinning = false;
      this.currentQuestion = selectedQ;
      this.startTimer();
      this.cdr.detectChanges(); 
    }, 3000);
  }

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
    this.soundEffects.playCorrect();
  }

  playSoundError() {
    this.soundEffects.playIncorrect();
  }

  handleTimeout() {
    this.answerResult = AnswerStatus.Timeout;
    this.lives--;
    this.playSoundError();
    this.cdr.detectChanges();

    this.addTimeout(() => {
      this.evaluateGameStatus();
    }, 2000);
  }

  checkAnswer(selectedOption: string) {
    if (this.selectedAnswer) return; 

    this.stopTimer();
    this.selectedAnswer = selectedOption;

    if (selectedOption === this.currentQuestion?.correctAnswer) {
      this.answerResult = AnswerStatus.Correct;
      this.score++;
      if (this.currentQuestion) {
        this.wonQuestionsIds.update(ids => [...ids, this.currentQuestion!.id]);
      } 
      this.playSoundCorrect();
    } else {
      this.answerResult = AnswerStatus.Incorrect;
      this.lives--;
      this.playSoundError();
    }
    
    this.cdr.detectChanges();

    this.addTimeout(() => {
      this.evaluateGameStatus();
    }, 2000); 
  }

  evaluateGameStatus(): void {
    if (this.lives <= 0) {
      this.isGameOver = true;
      this.currentQuestion = null;
      this.cdr.detectChanges();
      
      this.addTimeout(() => {
        this.gameLost.emit();
      }, 4000);
    } else if (this.wonQuestionsIds().length === this.questionsList.length) {
      this.gameWon.emit(); 
    } else {
      this.resetTurn();
    }
  }

  resetTurn(): void {
    this.currentQuestion = null;
    this.selectedAnswer = null;
    this.answerResult = null;
    this.hiddenOptions = [];
    this.cdr.detectChanges();
  }

  useBomb() {
    if (!this.hasBomb || !this.currentQuestion || this.selectedAnswer) return;

    this.hasBomb = false;

    const correct = this.currentQuestion.correctAnswer;
    const incorrects = this.currentQuestion.options.filter(opt => opt !== correct);

    const shuffled = incorrects.sort(() => 0.5 - Math.random());
    this.hiddenOptions = [shuffled[0], shuffled[1]];

    this.cdr.detectChanges();
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Question } from './models/question';

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

  // estado del jugador
  lives: number = 3;
  score: number = 0;
  hasBomb: boolean = true;

  // estado del juego
  isSpinning: boolean = false;
  currentQuestion: Question | null = null;
  askedQuestionsIds: number[] = [];

  questionsList: Question[] = [
    {
      id: 1,
      category: '🎨 Arte',
      text: 'Cuando nos juntamos e hicimos un cuadro juntos, ¿qué animal fue el que dibujé yo?',
      options: ['Un gato', 'Un perro', 'Pingüino', 'Un sapo'],
      correctAnswer: 'Pingüino'
    },
    {
      id: 2,
      category: '📜 Historia',
      text: '¿Dónde o cómo fue la primera vez que interactuamos?',
      options: ['En la escuela', 'En un cumple familiar', 'En una plaza', 'Por chat'],
      correctAnswer: 'En un cumple familiar'
    },
    {
      id: 3,
      category: '🔬 Educación',
      text: 'Cuando me colé en tu aula como "ayudanteJAKS", ¿qué clase tocaba?',
      options: ['Matemática', 'Literatura', 'Inglés', 'Geografía'],
      correctAnswer: 'Inglés'
    },
    {
      id: 4,
      category: '🌍 Lugares',
      text: '¡Esta seguro la sabésXD! ¿A qué lugar todavía no fuimos y es el que más veces dijimos para ir?',
      options: ['Al cine', 'Al Barrio Chino', 'A merendar', 'A mi casa'],
      correctAnswer: 'Al cine'
    },
    // FALTARÍA LA PREGUNTA 5 ACÁ ABAJO:
    /*
    {
      id: 5,
      category: '🍿 Espectáculos', // O Deportes, o lo que quieras
      text: '¿Acá va tu quinta pregunta?',
      options: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'],
      correctAnswer: 'Opción Correcta'
    }
    */
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isSystemLoading = false;
      this.cdr.detectChanges(); // ¡Acá está la magia! Fuerza a redibujar el HTML
    }, 2000);
  }

  spinRoulette() {}
  useBomb() {}
  checkAnswer(selectedOption: string) {}
}

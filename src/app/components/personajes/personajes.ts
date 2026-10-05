import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopNav } from '@components/top-nav/top-nav';
import { Character } from './models/character';

@Component({
  imports: [CommonModule, TopNav],
  selector: 'app-personajes',
  standalone: true,
  styleUrl: './personajes.css',
  templateUrl: './personajes.html',
})
export class Personajes {
  // Variable para controlar si mostramos las cartas o la pantalla del minijuego
  showMinigame: boolean = false;

  charactersList: Character[] = [
    {
      id: 'p1',
      name: 'Pomni',
      origin: 'The Amazing Digital Circus (tadc)',
      image: 'assets/images/personajes/pomni.webp',
      stat: 'Vibe: Caos y ternura',
      description: 'Me recordás a este personaje porque...'
    },
    {
      id: 'p2',
      name: 'Powder / Jinx',
      origin: 'Arcane',
      image: 'assets/images/personajes/powder.webp',
      stat: 'Nivel de ansiedad: 999%',
      description: 'Siempre que veo a este personaje me acuerdo de cuando...'
    },
    {
      id: 'p3',
      name: 'Twilight Sparkle',
      origin: 'My little pony',
      image: 'assets/images/personajes/twilight.webp',
      stat: 'Energía: "Quiero irme a mi casa"',
      description: 'Este personaje me hace pensar en...'
    },
    {
      id: 'p4',
      name: 'Personaje 4',
      origin: 'Serie/Juego 4',
      image: 'assets/images/personajes/p4.webp',
      stat: 'Habilidad especial: Inexistente',
      description: 'No sé por qué, pero siempre me viene a la mente este personaje cuando...'
    },
    {
      id: 'p5',
      name: 'Personaje 5',
      origin: 'Serie/Juego 5',
      image: 'assets/images/personajes/p5.webp',
      stat: 'Nivel de ternura: 100%',
      description: 'Este personaje me recuerda a vos porque...'
    },
    {
      id: 'p6',
      name: 'Personaje 6',
      origin: 'Serie/Juego 6',
      image: 'assets/images/personajes/p6.webp',
      stat: 'Nivel de misterio: 100%',
      description: 'Este personaje siempre me ha intrigado por su naturaleza enigmática...'
    },
    // agregar mas personajes aquí...
    {
      id: 'p-secret',
      name: 'El Hacker / Misterioso',
      origin: '???',
      image: 'assets/images/personajes/secret.webp',
      stat: 'Nivel de rareza: Desconocido',
      description: 'Hay algo raro en este archivo... parece que el sistema detectó una anomalía.',
      hasSecretLink: true
    }
  ];

  launchSecretMinigame() {
    this.showMinigame = true;
  }


}

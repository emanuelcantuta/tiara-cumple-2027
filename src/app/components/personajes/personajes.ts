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
      origin: 'The Amazing Digital Circus (TADC)',
      image: 'assets/images/personajes/pomni.webp',
      stat: 'Vibe: Caos y ternura',
      description: 'Me recordás a este personaje porque...'
    },
    {
      id: 'p2',
      name: 'Hinata',
      origin: 'Hinata (Naruto)',
      image: 'assets/images/personajes/hinata.webp',
      stat: 'Nivel de ternura: 100%',
      description: 'Este personaje me recuerda a vos porque...'
    },
    {
      id: 'p3',
      name: 'Yena',
      origin: 'YENA (k-pop)',
      image: 'assets/images/personajes/yena.webp',
      stat: 'Habilidad especial: ...',
      description: 'No sé por qué, pero siempre ...'
    },
    {
      id: 'p4',
      name: 'Powder / Jinx',
      origin: 'Arcane (LOL)',
      image: 'assets/images/personajes/powder.webp',
      stat: 'Nivel de ansiedad: 999%',
      description: 'Siempre que veo a este personaje me acuerdo de cuando...'
    },
    {
      id: 'p5',
      name: 'Su-Zaizai',
      origin: 'When I Fly Towards You (C-Drama)',
      image: 'assets/images/personajes/su-zaizai.webp',
      stat: 'Nivel de ternura: 100%',
      description: 'Este personaje me recuerda a vos porque...'
    },
    {
      id: 'p6',
      name: 'Twilight Sparkle',
      origin: 'My little pony',
      image: 'assets/images/personajes/twilight.webp',
      stat: 'Energía: "Quiero irme a mi casa"',
      description: 'Este personaje me hace pensar en...'
    },
    {
      id: 'p7',
      name: 'Perro salchicha',
      origin: 'Perro salchicha',
      image: 'assets/images/personajes/perro-salchicha.webp',
      stat: 'Nivel de ternura: 100%',
      description: 'Este personaje me recuerda a vos porque...'
    },
    {
      id: 'p-secret',
      name: 'El Hacker / Misterioso',
      origin: '???',
      image: 'assets/images/personajes/loading.gif',
      stat: 'Nivel de rareza: Desconocido',
      description: 'Hay algo raro en este archivo... parece que el sistema detectó una anomalía.',
      hasSecretLink: true
    }
  ];

  launchSecretMinigame() {
    this.showMinigame = true;
  }
}

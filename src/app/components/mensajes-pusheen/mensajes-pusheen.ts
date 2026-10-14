import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopNav } from '@components/top-nav/top-nav';
import { PusheenMessage } from './models/pusheen-message';

@Component({
  imports: [CommonModule, TopNav],
  selector: 'app-mensajes-pusheen',
  standalone: true,
  styleUrl: './mensajes-pusheen.css',
  templateUrl: './mensajes-pusheen.html',
})
export class MensajesPusheen {
  openedIds: number[] = [];
  videoUrl: string = 'assets/video/pista-final.mp4';

  messagesList: PusheenMessage[] = [
    {
      id: 1,
      envelopeLabel: 'Sobre #1 • Para empezar tu cumple',
      stampEmoji: '🎂',
      title: '¡Feliz Cumpleaños! 🎉',
      text: 'Acá va tu primera frase tierna o minicarta para desearle un día hermoso.',
      gif: 'assets/images/pusheen/celebrate/pusheen-cake.gif',
      themeColor: '#FFB3BA' // Rosa pastel
    },
    {
      id: 2,
      envelopeLabel: 'Sobre #2 • Un pequeño regalo',
      stampEmoji: '🎁',
      title: 'Para vos ✨',
      text: 'Acá va tu segunda frase tierna acompañada del gatito.',
      gif: 'assets/images/pusheen/celebrate/pusheen-gift.gif',
      themeColor: '#A8D8FF' // Celeste pastel
    },
    {
      id: 3,
      envelopeLabel: 'Sobre #3 • Modo festejo',
      stampEmoji: '🎶',
      title: 'A celebrar 🐾',
      text: 'Acá va tu tercera minicarta o recuerdo lindo.',
      gif: 'assets/images/pusheen/celebrate/pusheen-dancing.gif',
      themeColor: '#FFF4A3' // Amarillo pastel
    },
    {
      id: 4,
      envelopeLabel: 'Sobre #4 • Algo que siempre pienso',
      stampEmoji: '💌',
      title: 'Un recordatorio 💖',
      text: 'Acá podés usar uno de la carpeta nueva (por ejemplo: assets/images/pusheen/messages/...).',
      gif: 'assets/images/pusheen/celebrate/pusheen-dj.gif',
      themeColor: '#D6C2FF' // Lila suave
    }
  ];

  isOpened(id: number): boolean {
    return this.openedIds.includes(id);
  }

  // Abre el sobre al hacer clic
  openEnvelope(id: number): void {
    if (!this.openedIds.includes(id)) {
      this.openedIds.push(id);
    }
  }

  get allOpened(): boolean {
    return this.openedIds.length === this.messagesList.length;
  }

  onVideoPlay(): void {
    const audioEl = document.getElementById('musica-fondo') as HTMLAudioElement;
    if (audioEl && !audioEl.paused) {
      audioEl.pause();
    }
  }

}

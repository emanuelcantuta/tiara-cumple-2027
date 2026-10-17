import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TopNav } from '@components/top-nav/top-nav';
import { PusheenMessage } from './models/pusheen-message';
import { Audio } from '@services/audio';

@Component({
  imports: [CommonModule, TopNav],
  selector: 'app-mensajes-pusheen',
  standalone: true,
  styleUrl: './mensajes-pusheen.css',
  templateUrl: './mensajes-pusheen.html',
})
export class MensajesPusheen {
  protected audio = inject(Audio);
  openedIds: number[] = [];
  videoUrl: string = 'assets/video/pista-final.mp4';

  messagesList: PusheenMessage[] = [
    {
      id: 1,
      envelopeLabel: 'Sobre #1 • Para desearte un feliz cumpleaños',
      stampEmoji: '🎂',
      title: '¡Feliz Cumpleaños! 🎉',
      text: 'Ojalá donde sea que te encuentres en este momento, estés pasandola bien. Ánimo meju <3',
      gif: 'assets/images/pusheen/messages/pusheen-hb.gif',
      themeColor: '#FFB3BA' // Rosa pastel
    },
    {
      id: 2,
      envelopeLabel: 'Sobre #2 • Para cuando necesites un abrazo virtual',
      stampEmoji: '💌',
      title: 'For you (vs)',
      text: 'Tal vez no sea tu Amistad Fav, mucho menos una de las mejores, pero si algún día me necesitas, aquí toy for you (vs) :3.',
      gif: 'assets/images/pusheen/messages/pusheen-writing-paper.gif',
      themeColor: '#A8D8FF' // Celeste pastel
    },
    {
      id: 3,
      envelopeLabel: 'Sobre #3 • Para cuando no nos veamos por un tiempo',
      stampEmoji: '👋',
      title: 'En otra vida será deah',
      text: `Si algún día dejamos de hablar o nos distanciamos por cosas de la vida, que sepas que siempre me pareciste muy copada, cada cosa tuya era nueva para mí y se que soy malísimo socializandoxd y a veces no sé que decir. Pero gracias por bancarme, a veces siento que querías hacerme creer que era copadoxD`,
      gif: 'assets/images/pusheen/messages/pusheen-coffe.gif',
      themeColor: '#FFF4A3' // Amarillo pastel
    },
    {
      id: 4,
      envelopeLabel: 'Sobre #4 • Recuerdo chistoso',
      stampEmoji: '😂',
      title: 'Un recordatorio vergonzoso para mi 💗xD',
      text: 'Hasta el día de hoy me da pena y risa lo que te dije ese díaxDD. Pero realmente no importa porque lohice con esa intenciónx/D que wsachin soy',
      gif: 'assets/images/pusheen/messages/chat.webp',
      themeColor: '#D6C2FF' // Lila suave
    }
  ];

  isOpened(id: number): boolean {
    return this.openedIds.includes(id);
  }

  openEnvelope(id: number): void {
    if (!this.openedIds.includes(id)) {
      this.openedIds.push(id);
    }
  }

  get allOpened(): boolean {
    return this.openedIds.length === this.messagesList.length;
  }

}

import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TopNav } from '@components/top-nav/top-nav';
import { Audio } from '@services/audio';

@Component({
  imports: [CommonModule, FormsModule, TopNav],
  selector: 'app-secreto',
  styleUrl: './secreto.css',
  templateUrl: './secreto.html',
})
export class Secreto {
  protected audio = inject(Audio);
  videoUrl: string = 'assets/video/kpop-edit.mp4';
  videoPoster: string = 'assets/images/kpop/cortis/cortis-group.webp'; // cambiar

  // Estado del formulario interactivo
  rating = signal<number>(5);
  favoritePart = signal<string>('✨ ¡Todo el regalo!');
  message: string = '';

  favoriteOptions: string[] = [
    '🎸 Zona Cortis',
    '🎡 Juego Pusheen-tados',
    '💌 Buzón de Pusheen',
    '🎬 El video editado',
    '✨ ¡Todo el regalo!'
  ];

  isSending = signal<boolean>(false);
  isSent = signal<boolean>(false);
  sendError = signal<boolean>(false);

  setRating(value: number): void {
    this.rating.set(value);
  }

  setFavorite(option: string): void {
    this.favoritePart.set(option);
  }

  async sendFeedback(): Promise<void> {
    if (!this.message.trim() || this.isSending()) return;

    this.isSending.set(true);
    this.sendError.set(false);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating: this.rating(),
          favoritePart: this.favoritePart(),
          message: this.message.trim()
        })
      });

      if (!response.ok) throw new Error('Error al enviar');

      this.isSent.set(true);
      this.message = '';
    } catch (error) {
      console.error(error);
      this.sendError.set(true);
    } finally {
      this.isSending.set(false);
    }
  }
}

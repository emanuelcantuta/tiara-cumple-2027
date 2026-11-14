import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AudioService } from '@services/audio.service';
import { TopNav } from '@components/top-nav/top-nav';

@Component({
  imports: [CommonModule, FormsModule, TopNav],
  selector: 'app-secreto',
  styleUrl: './secreto.css',
  templateUrl: './secreto.html',
})
export class Secreto {
  protected audio = inject(AudioService);
  private http = inject(HttpClient);
  videoUrl: string = 'assets/video/regalo.mp4';
  videoPoster: string = 'assets/images/kpop/cortis/cortis-group.webp'; // cambiar

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
      await firstValueFrom(
        this.http.post('/api/send', {
          rating: this.rating(),
          favoritePart: this.favoritePart(),
          message: this.message.trim()
        })
      );

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

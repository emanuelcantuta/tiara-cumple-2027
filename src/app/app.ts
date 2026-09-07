import { Component, inject, effect, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Audio } from './services/audio';

@Component({
  imports: [RouterOutlet],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  audio = inject(Audio);

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor() {
    effect(() => {
      this.audio.currentSong();

      if (this.audioPlayer) {
        this.audioPlayer.nativeElement.load(); 
        this.audioPlayer.nativeElement.play().catch(err => 
          console.warn('Reproducción automática en espera de interacción:', err)
        );
      }
    });
  }

}
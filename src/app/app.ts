import { Component, inject, effect, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudioService } from '@services/audio.service';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  audio = inject(AudioService);

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor() {
    effect(() => {
      this.audio.currentSong();

      if (this.audioPlayer) {
        this.audioPlayer.nativeElement.load(); 
        this.audioPlayer.nativeElement.volume = 0.4;
        this.audioPlayer.nativeElement.play().catch(err => 
          console.warn('Reproducción automática en espera de interacción:', err)
        );
      }
    });
  }

}
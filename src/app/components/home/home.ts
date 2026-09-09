import { Component, inject } from '@angular/core';
import { Track } from './models/track';
import { Audio } from '../../services/audio';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private audio = inject(Audio);

  tracks: Track[] = [
    {
      coverUrl: 'assets/images/banda1.jpg', 
      title: 'JoyRide',
      artist: 'CORTIS',
      audioSource: { 
        mp3: 'assets/audio/music/cortis/CORTIS-JoyRide.mp3',
        ogg: 'assets/audio/music/cortis/CORTIS-JoyRide.ogg'
      }
    },
    {
      coverUrl: 'assets/images/banda2.jpg',
      title: 'Otra Canción',
      artist: 'Artista Dos',
      audioSource: { 
        mp3: 'assets/audio/music/otra.mp3', 
        ogg: 'assets/audio/music/otra.ogg' 
      }
    },
    {
      coverUrl: 'assets/images/banda3.jpg',
      title: 'Tercera Canción',
      artist: 'Artista Tres',
      audioSource: { 
        mp3: 'assets/audio/music/tercera.mp3', 
        ogg: 'assets/audio/music/tercera.ogg' 
      }
    }, 
    {
      coverUrl: 'assets/images/banda4.jpg',
      title: 'Cuarta Canción',
      artist: 'Artista Cuatro',
      audioSource: { 
        mp3: 'assets/audio/music/cuarta.mp3', 
        ogg: 'assets/audio/music/cuarta.ogg' 
      }
    },
    {
      coverUrl: 'assets/images/banda5.jpg',
      title: 'Quinta Canción',
      artist: 'Artista Cinco',
      audioSource: { 
        mp3: 'assets/audio/music/quinta.mp3', 
        ogg: 'assets/audio/music/quinta.ogg' 
      }
    },
    {
      coverUrl: 'assets/images/banda6.jpg',
      title: 'Sexta Canción',
      artist: 'Artista Seis',
      audioSource: { 
        mp3: 'assets/audio/music/sexta.mp3', 
        ogg: 'assets/audio/music/sexta.ogg' 
      }
    },
    {
      coverUrl: 'assets/images/banda7.jpg',
      title: 'Séptima Canción',
      artist: 'Artista Siete',
      audioSource: { 
        mp3: 'assets/audio/music/septima.mp3', 
        ogg: 'assets/audio/music/septima.ogg' 
      }
    },
    {
      coverUrl: 'assets/images/banda8.jpg',
      title: 'Octava Canción',
      artist: 'Artista Ocho',
      audioSource: { 
        mp3: 'assets/audio/music/octava.mp3', 
        ogg: 'assets/audio/music/octava.ogg' 
      }
    },

  ];

  playTrack(selectedTrack: Track): void {
    this.audio.changeSong(selectedTrack.audioSource);
  }
}

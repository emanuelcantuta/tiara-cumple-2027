import { Component, inject } from '@angular/core';
import { Track } from './models/track';
import { Audio } from '../../services/audio';
import { Artist } from '../../models/artist';

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
      coverUrl: 'assets/images/kpop/cortis/joyride-portada.webp', 
      title: 'JoyRide',
      artist: Artist.CORTIS,
      audioSource: { 
        mp3: 'assets/audio/music/cortis/CORTIS-JoyRide.mp3',
        ogg: 'assets/audio/music/cortis/CORTIS-JoyRide.ogg'
      }
    },
    {
      coverUrl: 'assets/images/kpop/cortis/what-you-want-portada.webp',
      title: 'What You Want',
      artist: Artist.CORTIS,
      audioSource: { 
        mp3: 'assets/audio/music/otra.mp3',
        ogg: 'assets/audio/music/otra.ogg'
      }
    },
    {
      coverUrl: 'assets/images/kpop/enhypen/bloody-paradise-portada.webp',
      title: 'Bloody Paradise',
      artist: Artist.ENHYPEN,
      audioSource: {
        mp3: 'assets/audio/music/tercera.mp3', 
        ogg: 'assets/audio/music/tercera.ogg' 
      }
    }, 
    {
      coverUrl: 'assets/images/kpop/enhypen/no-doubt-portada.webp',
      title: 'No Doubt',
      artist: Artist.ENHYPEN,
      audioSource: { 
        mp3: 'assets/audio/music/cuarta.mp3', 
        ogg: 'assets/audio/music/cuarta.ogg' 
      }
    },
    {
      coverUrl: 'assets/images/kpop/newjeans/omg-portada.webp',
      title: 'OMG',
      artist: Artist.NEWJEANS,
      audioSource: { 
        mp3: 'assets/audio/music/septima.mp3', 
        ogg: 'assets/audio/music/septima.ogg' 
      }
    },
    {
      coverUrl: 'assets/images/kpop/newjeans/super-shy-portada.webp',
      title: 'Super Shy',
      artist: Artist.NEWJEANS,
      audioSource: { 
        mp3: 'assets/audio/music/octava.mp3', 
        ogg: 'assets/audio/music/octava.ogg' 
      }
    },
    {
      coverUrl: 'assets/images/kpop/illit/not-cute-anymore-portada.webp',
      title: 'Not Cute Anymore',
      artist: Artist.ILLIT,
      audioSource: { 
        mp3: 'assets/audio/music/quinta.mp3', 
        ogg: 'assets/audio/music/quinta.ogg' 
      }
    },
    {
      coverUrl: 'assets/images/kpop/illit/magnetic-portada.webp',
      title: 'Magnetic',
      artist: Artist.ILLIT,
      audioSource: { 
        mp3: 'assets/audio/music/sexta.mp3', 
        ogg: 'assets/audio/music/sexta.ogg' 
      }
    },

  ];

  playTrack(selectedTrack: Track): void {
    this.audio.changeSong(selectedTrack.audioSource);
  }
}

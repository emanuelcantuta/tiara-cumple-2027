import { Component, inject, signal } from '@angular/core';
import { Track } from './models/track';
import { Audio } from '../../services/audio';
import { Artist } from '../../models/artist';
import { SongSource } from '../../models/song-source';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private audio = inject(Audio);
  private auth = inject(Auth);
  private router = inject(Router);
  
  isPlaying = signal<boolean>(true);

  private buildAudioSource(basePath: string): SongSource {
    return {
      mp3: `${basePath}.mp3`,
      ogg: `${basePath}.ogg`
    };
  }

  tracks: Track[] = [
    {
      coverUrl: 'assets/images/kpop/cortis/joyride-portada.webp', 
      title: 'JoyRide',
      artist: Artist.CORTIS,
      audioSource: this.buildAudioSource('assets/audio/music/cortis/cortis-joyride')
    },
    {
      coverUrl: 'assets/images/kpop/cortis/what-you-want-portada.webp',
      title: 'What You Want',
      artist: Artist.CORTIS,
      audioSource: this.buildAudioSource('assets/audio/music/cortis/cortis-what-you-want')
    },
    {
      coverUrl: 'assets/images/kpop/enhypen/bloody-paradise-portada.webp',
      title: 'Bloody Paradise',
      artist: Artist.ENHYPEN,
      audioSource: this.buildAudioSource('assets/audio/music/enhypen/enhypen-bloody-paradise')
    },
    { 
      coverUrl: 'assets/images/kpop/enhypen/no-doubt-portada.webp',
      title: 'No Doubt',
      artist: Artist.ENHYPEN,
      audioSource: this.buildAudioSource('assets/audio/music/enhypen/enhypen-no-doubt')
    },
    {
      coverUrl: 'assets/images/kpop/newjeans/omg-portada.webp',
      title: 'OMG',
      artist: Artist.NEWJEANS,
      audioSource: this.buildAudioSource('assets/audio/music/newjeans/newjeans-omg')
    },
    {
      coverUrl: 'assets/images/kpop/newjeans/super-shy-portada.webp',
      title: 'Super Shy',
      artist: Artist.NEWJEANS,
      audioSource: this.buildAudioSource('assets/audio/music/newjeans/newjeans-super-shy')
    },
    {
      coverUrl: 'assets/images/kpop/illit/not-cute-anymore-portada.webp',
      title: 'Not Cute Anymore',
      artist: Artist.ILLIT,
      audioSource: this.buildAudioSource('assets/audio/music/illit/illit-not-cute-anymore')
    },
    {
      coverUrl: 'assets/images/kpop/illit/magnetic-portada.webp',
      title: 'Magnetic',
      artist: Artist.ILLIT,
      audioSource: this.buildAudioSource('assets/audio/music/illit/illit-magnetic')
    },

  ];

  playTrack(selectedTrack: Track): void {
    this.audio.changeSong(selectedTrack.audioSource);
    this.isPlaying.set(true);
  }

  toggleAudio(): void {
    const audioEl = document.getElementById('musica-fondo') as HTMLAudioElement;
    if (audioEl) {
      if (audioEl.paused) {
        audioEl.play();
        this.isPlaying.set(true);
      } else {
        audioEl.pause();
        this.isPlaying.set(false);
      }
    }
  }

  logOut(): void {
    this.auth.logOut();
    this.router.navigate(['/']);
  }
}

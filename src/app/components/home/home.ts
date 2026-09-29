import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Audio } from '@services/audio';
import { Auth } from '@services/auth';
import { Artist } from '@models/artist';
import { SongSource } from '@models/song-source';
import { Track } from './models/track';
import { Destination, DestinationId } from './models/destination';

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
      coverUrl: 'assets/images/kpop/evan/death-of-me-portada.webp',
      title: 'Death of Me',
      artist: Artist.EVAN,
      audioSource: this.buildAudioSource('assets/audio/music/evan/evan-death-of-me')
    },
    {
      coverUrl: 'assets/images/kpop/aespa/kiss-n-tell-portada.webp',
      title: 'Kiss N Tell',
      artist: Artist.AESPA,
      audioSource: this.buildAudioSource('assets/audio/music/aespa/aespa-kiss-n-tell')
    },
    {
      coverUrl: 'assets/images/kpop/aespa/lemonade-portada.webp',
      title: 'Lemonade',
      artist: Artist.AESPA,
      audioSource: this.buildAudioSource('assets/audio/music/aespa/aespa-lemonade')
    },
    {
      coverUrl: 'assets/images/kpop/loona/hi-high-portada.webp',
      title: 'Hi High',
      artist: Artist.LOONA,
      audioSource: this.buildAudioSource('assets/audio/music/loona/loona-hi-high')
    },
    {
      coverUrl: 'assets/images/kpop/loona/butterfly-portada.webp',
      title: 'Butterfly',
      artist: Artist.LOONA,
      audioSource: this.buildAudioSource('assets/audio/music/loona/loona-butterfly')
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

  @ViewChild('secretDialog') secretDialog!: ElementRef<HTMLDialogElement>;
  showSecretInput = signal<boolean>(false);
  secretError = signal<boolean>(false);

  destinations: Destination[] = [
    { id: DestinationId.CORTIS, title: 'Cortis (porque sé que los amás)', icon: '🎸', isLocked: false },
    { id: DestinationId.PERSONAJES, title: 'Personajes que me recuerdan a vos', icon: '🎵', isLocked: false },
    { id: DestinationId.PUSHEEN, title: 'Mensajes pusheen', icon: '😽', isLocked: false },
    { id: DestinationId.SECRETO, title: 'Regalo sorpresa', icon: '🎁', isLocked: true }
  ];

  handleDestinationClick(destination: Destination): void {
    if (destination.isLocked) {
      this.secretDialog.nativeElement.showModal();
    } else {
      this.router.navigate([`/${destination.id}`]); // cambiar a la ruta del destino secreto
    }
  }

  closeModal(): void {
    this.secretDialog.nativeElement.close();
    setTimeout(() => {
      this.showSecretInput.set(false);
      this.secretError.set(false);
    }, 300);
  }

  enableSecretInput(): void {
    this.showSecretInput.set(true);
  }

  verifySecret(inputElement: HTMLInputElement): void {
    const pass = inputElement.value.trim().toLowerCase();
    if (pass === 'pusheen2027') { 
      this.closeModal();
      this.router.navigate([`/${DestinationId.SECRETO}`]); // cambiar a la ruta del destino secreto
    } else {
      this.secretError.set(true);
      inputElement.value = '';
      inputElement.focus();
      setTimeout(() => this.secretError.set(false), 800);
    }
  }
}

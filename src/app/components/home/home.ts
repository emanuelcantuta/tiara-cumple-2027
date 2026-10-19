import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TopNav } from '@components/top-nav/top-nav';
import { Audio } from '@services/audio';
import { Artist } from '@models/artist';
import { SongSource } from '@models/song-source';
import { Track } from './models/track';
import { Destination, DestinationId } from './models/destination';
import { FULL_SECRET_PASSWORD } from '@models/secret-clues';

@Component({
  imports: [TopNav],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private audio = inject(Audio);
  private router = inject(Router);

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
      audioSource: this.buildAudioSource('assets/audio/music/cortis/cortis-joyride'),
      color: '#61669f'
    },
    {
      coverUrl: 'assets/images/kpop/cortis/lullaby-portada.webp',
      title: 'Lullaby',
      artist: Artist.CORTIS,
      audioSource: this.buildAudioSource('assets/audio/music/cortis/cortis-lullaby'),
      color: '#889f61'
    },
    {
      coverUrl: 'assets/images/kpop/cortis/FaSHion-portada.webp',
      title: 'FaSHion',
      artist: Artist.CORTIS,
      audioSource: this.buildAudioSource('assets/audio/music/cortis/cortis-fashion'),
      color: '#9f7361'
    },
    {
      coverUrl: 'assets/images/kpop/enhypen/bloody-paradise-portada.webp',
      title: 'Bloody Paradise',
      artist: Artist.ENHYPEN,
      audioSource: this.buildAudioSource('assets/audio/music/enhypen/enhypen-bloody-paradise'),
      color: '#9f6166'
    },
    { 
      coverUrl: 'assets/images/kpop/evan/death-of-me-portada.webp',
      title: 'Death of Me',
      artist: Artist.EVAN,
      audioSource: this.buildAudioSource('assets/audio/music/evan/evan-death-of-me'),
      color: '#9f8861'
    },
    {
      coverUrl: 'assets/images/kpop/aespa/kiss-n-tell-portada.webp',
      title: 'Kiss N Tell',
      artist: Artist.AESPA,
      audioSource: this.buildAudioSource('assets/audio/music/aespa/aespa-kiss-n-tell'),
      color: '#619f88'
    },
    {
      coverUrl: 'assets/images/kpop/aespa/lemonade-portada.webp',
      title: 'Lemonade',
      artist: Artist.AESPA,
      audioSource: this.buildAudioSource('assets/audio/music/aespa/aespa-lemonade'),
      color: '#88619f'
    },
    {
      coverUrl: 'assets/images/kpop/loona/hi-high-portada.webp',
      title: 'Hi High',
      artist: Artist.LOONA,
      audioSource: this.buildAudioSource('assets/audio/music/loona/loona-hi-high'),
      color: '#9f6188'
    },
    {
      coverUrl: 'assets/images/kpop/loona/butterfly-portada.webp',
      title: 'Butterfly',
      artist: Artist.LOONA,
      audioSource: this.buildAudioSource('assets/audio/music/loona/loona-butterfly'),
      color: '#61889f'
    },

  ];

  playTrack(selectedTrack: Track): void {
    this.audio.changeSong(selectedTrack.audioSource);
  }

  secretDialog = viewChild<ElementRef<HTMLDialogElement>>('secretDialog');
  showSecretInput = signal<boolean>(false);
  secretError = signal<boolean>(false);

  destinations: Destination[] = [
    { id: DestinationId.CORTIS, title: 'Cortis (porque sé que los amás)', icon: 'assets/images/icon/destinations/cortis.gif', isLocked: false },
    { id: DestinationId.PERSONAJES, title: 'Personajes que me recuerdan a vos', icon: 'assets/images/icon/destinations/personajes.gif', isLocked: false },
    { id: DestinationId.PUSHEEN, title: 'Mensajes pusheen', icon: 'assets/images/icon/destinations/pusheen.gif', isLocked: false },
    { id: DestinationId.SECRETO, title: 'Regalo sorpresa', icon: 'assets/images/icon/destinations/secreto.gif', isLocked: true }
  ];


  handleDestinationClick(destination: Destination): void {
    if (destination.isLocked) {
      this.secretDialog()?.nativeElement.showModal();
    } else {
      this.router.navigate([`/regalo/${destination.id}`]);
    }
  }

  closeModal(): void {
    this.secretDialog()?.nativeElement.close();
    setTimeout(() => {
      this.showSecretInput.set(false);
      this.secretError.set(false);
    }, 300);
  }

  enableSecretInput(): void {
    this.showSecretInput.set(true);
  }

  verifySecret(inputElement: HTMLInputElement): void {
    const pass = inputElement.value.trim().toLowerCase().replace(/\s+/g, '');
    
    if (pass === FULL_SECRET_PASSWORD) {
      const secretDest = this.destinations.find(d => d.id === DestinationId.SECRETO);
      if (secretDest) secretDest.isLocked = false;

      this.closeModal();
      this.router.navigate([`/regalo/${DestinationId.SECRETO}`]);
    } else {
      this.secretError.set(true);
      inputElement.value = '';
      inputElement.focus();
      setTimeout(() => this.secretError.set(false), 800);
    }
  }
}

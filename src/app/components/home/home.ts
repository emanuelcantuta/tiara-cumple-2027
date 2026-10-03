import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TopNav } from '@components/top-nav/top-nav';
import { Audio } from '@services/audio';
import { Artist } from '@models/artist';
import { SongSource } from '@models/song-source';
import { Track } from './models/track';
import { Destination, DestinationId } from './models/destination';

@Component({
  imports: [TopNav],
  selector: 'app-home',
  standalone: true,
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
      audioSource: this.buildAudioSource('assets/audio/music/cortis/cortis-joyride')
    },
    {
      coverUrl: 'assets/images/kpop/cortis/lullaby-portada.webp',
      title: 'Lullaby',
      artist: Artist.CORTIS,
      audioSource: this.buildAudioSource('assets/audio/music/cortis/cortis-lullaby')
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
  }

  secretDialog = viewChild<ElementRef<HTMLDialogElement>>('secretDialog');
  showSecretInput = signal<boolean>(false);
  secretError = signal<boolean>(false);

  destinations: Destination[] = [
    { id: DestinationId.CORTIS, title: 'Cortis (porque sé que los amás)', icon: '🎸', isLocked: false },
    { id: DestinationId.PERSONAJES, title: 'Personajes que me recuerdan a vos', icon: '🎵', isLocked: false },
    { id: DestinationId.PUSHEEN, title: 'Mensajes pusheen', icon: '😽', isLocked: false },
    { id: DestinationId.SECRETO, title: 'Regalo sorpresa', icon: '🎁', isLocked: true }
  ];

  // categoría de destinos bloqueados: Cortis, Personajes, Pusheen, Secreto
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
    const pass = inputElement.value.trim().toLowerCase();
    if (pass === 'pusheen2027') { 
      this.closeModal();
      this.router.navigate([`/regalo/${DestinationId.SECRETO}`]); // cambiar a la ruta del destino secreto
    } else {
      this.secretError.set(true);
      inputElement.value = '';
      inputElement.focus();
      setTimeout(() => this.secretError.set(false), 800);
    }
  }
}

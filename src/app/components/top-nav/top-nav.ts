import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Auth } from '@services/auth';

@Component({
  imports: [CommonModule],
  selector: 'app-top-nav',
  styleUrl: './top-nav.css',
  templateUrl: './top-nav.html',
})
export class TopNav implements OnInit {
  private auth = inject(Auth);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  
  isPlaying = signal(true);
  isHomePage = signal(this.router.url === '/regalo');

  constructor() {
    this.router.events.pipe(
      takeUntilDestroyed(),
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomePage.set(this.router.url === '/regalo');
    });
  }

  ngOnInit(): void {
    const audioEl = document.getElementById('musica-fondo') as HTMLAudioElement;
    if (audioEl) {
      this.isPlaying.set(!audioEl.paused);

      const onPlay = () => this.isPlaying.set(true);
      const onPause = () => this.isPlaying.set(false);

      audioEl.addEventListener('play', onPlay);
      audioEl.addEventListener('pause', onPause);

      this.destroyRef.onDestroy(() => {
        audioEl.removeEventListener('play', onPlay);
        audioEl.removeEventListener('pause', onPause);
      });
    }
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

  goBack(): void {
    this.router.navigate(['/regalo']); 
  }
}

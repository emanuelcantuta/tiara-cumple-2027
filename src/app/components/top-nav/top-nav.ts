import { Component, inject, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Auth } from '@services/auth';
import { filter } from 'rxjs/operators';

@Component({
  imports: [CommonModule],
  selector: 'app-top-nav',
  standalone: true,
  styleUrl: './top-nav.css',
  templateUrl: './top-nav.html',
})
export class TopNav {
  private auth = inject(Auth);
  private router = inject(Router);
  
  isPlaying = signal<boolean>(true);
  isHomePage = signal<boolean>(this.router.url === '/regalo');

  constructor() {
    this.router.events.pipe(
      takeUntilDestroyed(),
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomePage.set(this.router.url === '/regalo');
    });
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

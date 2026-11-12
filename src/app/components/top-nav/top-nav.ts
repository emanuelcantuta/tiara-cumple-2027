import { Component, inject, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Auth } from '@services/auth';
import { Audio } from '@services/audio';

@Component({
  imports: [CommonModule],
  selector: 'app-top-nav',
  styleUrl: './top-nav.css',
  templateUrl: './top-nav.html',
})
export class TopNav {
  private auth = inject(Auth);
  private router = inject(Router);
  private audio = inject(Audio);
  
  isPlaying = this.audio.isPlaying;
  isHomePage = signal(this.router.url === '/regalo');

  constructor() {
    this.router.events.pipe(
      takeUntilDestroyed(),
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomePage.set(this.router.url === '/regalo');
    });
  }

  toggleAudio(): void {
    this.audio.toggleAudio();
  }

  logOut(): void {
    this.auth.logOut();
    this.router.navigate(['/']);
  }

  goBack(): void {
    this.router.navigate(['/regalo']); 
  }
}

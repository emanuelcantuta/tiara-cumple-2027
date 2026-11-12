import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '@services/auth';
import { Audio as AudioService } from '@services/audio';
import { LoginState } from './models/login-state';
import { LOGIN_CONFIG } from './models/login.config';

@Component({
  imports: [CommonModule],
  selector: 'app-tarjeta-inicio',
  styleUrl: './tarjeta-inicio.css',
  templateUrl: './tarjeta-inicio.html',
})
export class TarjetaInicio {
  readonly config = LOGIN_CONFIG;
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private auth = inject(Auth);
  private audio = inject(AudioService);

  state: LoginState = {
    attempts: 0,
    errorAnimation: false,
    showEmptyWarning: false,
    showAttemptError: false,
  };

  constructor() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/regalo']);
    }
  }

  clearInput(inputElement: HTMLInputElement): void {
    inputElement.value = '';
  }

  verifyPassword(inputElement: HTMLInputElement): void {
    const inputPassword = inputElement.value;

    this.clearInput(inputElement);
    inputElement.focus();
    if (!inputPassword.trim()) {
      this.handleEmptyInput();
      return;
    }

    this.state.showEmptyWarning = false;
    this.state.showAttemptError = false;

    if (inputPassword === this.config.password) {
      this.auth.signIn();
      this.audio.play();
      this.router.navigate(['/regalo']);
    } else {
      this.state.attempts++;
      this.handleFailedAttempt();
    }
  }

  handleEmptyInput(): void {
    this.state.showEmptyWarning = true;
    this.state.showAttemptError = false;

    this.playErrorSound();
    this.triggerShakeAnimation();
    this.autoHideMessage();
  }

  handleFailedAttempt(): void {
    this.state.showAttemptError = true;
    this.state.showEmptyWarning = false;

    this.playErrorSound();
    this.triggerShakeAnimation();
    this.autoHideMessage();

    setTimeout(() => {
      if (this.state.attempts >= this.config.maxAttempts) {
        this.router.navigate(['/impostor']);
      }
    }, this.config.errorTimeout);
  }

  triggerShakeAnimation(): void {
    this.state.errorAnimation = true;
  }
  
  autoHideMessage(): void {
    if (this.state.hideMessageTimeout) {
      clearTimeout(this.state.hideMessageTimeout);
    }

    this.state.hideMessageTimeout = setTimeout(() => {
      this.state.showEmptyWarning = false;
      this.state.showAttemptError = false;
      this.cdr.detectChanges();
    }, 3000);
  }

  playErrorSound(): void {
    const audio = new Audio('assets/audio/ui/error.wav'); 
    audio.volume = 0.5;
    audio.play().catch(err => console.warn('Reproducción de audio bloqueada:', err)); 
  }
}

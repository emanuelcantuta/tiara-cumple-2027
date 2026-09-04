import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginState } from './models/login-state';
import { LOGIN_CONFIG } from './models/login.config';

// tarjetaRegalo - impostor (nombres de las rutas a las que se redirige según el resultado del login)

@Component({
  imports: [CommonModule],
  selector: 'app-tarjeta-inicio',
  styleUrl: './tarjeta-inicio.css',
  templateUrl: './tarjeta-inicio.html',
})
export class TarjetaInicio {
  readonly config = LOGIN_CONFIG;

  state: LoginState = {
    attempts: 0,
    errorAnimation: false,
    showEmptyWarning: false,
    showAttemptError: false,
  };

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  clearInput(inputElement: HTMLInputElement): void {
    inputElement.value = '';
  }

  verifyPassword(inputElement: HTMLInputElement): void {
    const inputPassword = inputElement.value;

    this.clearInput(inputElement);

    if (!inputPassword.trim()) {
      this.handleEmptyInput();
      return;
    }

    this.state.showEmptyWarning = false;
    this.state.showAttemptError = false;

    if (inputPassword === this.config.password) {
      const audio = document.getElementById('musica-fondo') as HTMLAudioElement;
      if (audio) audio.play();
      this.router.navigate(['/tarjetaRegalo']);
    } else {
      this.state.attempts++;
      this.handleFailedAttempt();
    }
  }

  async handleEmptyInput(): Promise<void> {
    this.state.showEmptyWarning = false;
    this.state.showAttemptError = false;
    this.cdr.detectChanges();

    await this.sleep(10);

    this.state.showEmptyWarning = true;
    this.cdr.detectChanges();

    this.playErrorSound();
    this.triggerShakeAnimation();
    this.autoHideMessage();
  }

  async handleFailedAttempt(): Promise<void> {
    this.state.showAttemptError = false;
    this.state.showEmptyWarning = false;
    this.cdr.detectChanges();

    await this.sleep(10);

    this.state.showAttemptError = true;
    this.cdr.detectChanges();

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
    this.state.errorAnimation = false; 
    this.cdr.detectChanges();
    
    setTimeout(() => {
      this.state.errorAnimation = true;
      this.cdr.detectChanges();
    }, 10);
    
    setTimeout(() => {
      this.state.errorAnimation = false; 
      this.cdr.detectChanges();
    }, this.config.errorTimeout);
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

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  playErrorSound(): void {
    const audio = new Audio('assets/audio/ui/error.wav'); 
    audio.volume = 0.5;
    audio.play().catch(err => console.warn('Reproducción de audio bloqueada:', err)); 
  }
}

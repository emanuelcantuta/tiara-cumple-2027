import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  };

  constructor(private router: Router) {}

  verifyPassword(inputElement: HTMLInputElement): void {
    const inputPassword = inputElement.value;

    this.clearInput(inputElement);
    
    if (!inputPassword.trim()) {
      this.handleEmptyInput();
      return; 
    }

    this.state.showEmptyWarning = false;

    if (inputPassword === this.config.password) {
      this.router.navigate(['/tarjetaRegalo']);
    } else {
      this.state.attempts++;
      this.handleFailedAttempt();
    }
  }

  clearInput(inputElement: HTMLInputElement): void {
    inputElement.value = '';
  }

  handleEmptyInput(): void {
    this.state.showEmptyWarning = true;
    this.triggerShakeAnimation();
  }

  handleFailedAttempt(): void {
    this.triggerShakeAnimation();

    setTimeout(() => {
      if (this.state.attempts >= this.config.maxAttempts) {
        this.router.navigate(['/impostor']);
      }
    }, this.config.errorTimeout);
  }

  // método temblor reutilizable (capaz moverlo a una carpeta de utilidades si se usa en más lugares)
  triggerShakeAnimation(): void {
    this.state.errorAnimation = false; 
    setTimeout(() => {
      this.state.errorAnimation = true;
    }, 10);
    setTimeout(() => {
      this.state.errorAnimation = false; 
    }, this.config.errorTimeout);
  }
}

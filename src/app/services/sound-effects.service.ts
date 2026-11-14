import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundEffectsService {
  private loginErrorAudio: HTMLAudioElement | null = null;
  private correctAnswerAudio: HTMLAudioElement | null = null;
  private incorrectAnswerAudio: HTMLAudioElement | null = null;

  constructor() {
    if (typeof window !== 'undefined' && typeof Audio !== 'undefined') {
      this.loginErrorAudio = new Audio('assets/audio/ui/error.wav');
      this.loginErrorAudio.volume = 0.5;

      this.correctAnswerAudio = new Audio('assets/audio/ui/correct-answer.wav');
      this.correctAnswerAudio.volume = 0.5;

      this.incorrectAnswerAudio = new Audio('assets/audio/ui/incorrect-answer.wav');
    }
  }

  private playSound(audio: HTMLAudioElement | null, soundName: string): void {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(err => {
      console.warn(`SFX bloqueado (${soundName}):`, err);
    });
  }

  playLoginError(): void {
    this.playSound(this.loginErrorAudio, 'login-error');
  }

  playCorrect(): void {
    this.playSound(this.correctAnswerAudio, 'correct-answer');
  }

  playIncorrect(): void {
    this.playSound(this.incorrectAnswerAudio, 'incorrect-answer');
  }
}

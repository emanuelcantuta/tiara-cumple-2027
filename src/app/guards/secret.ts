import { inject, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const isUnlockedSignal = signal<boolean>(
  typeof sessionStorage !== 'undefined' && sessionStorage.getItem('tiara_secret_unlocked') === 'true'
);

export const unlockSecret = (): void => {
  isUnlockedSignal.set(true);
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem('tiara_secret_unlocked', 'true');
  }
};

export const resetSecret = (): void => {
  isUnlockedSignal.set(false);
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.removeItem('tiara_secret_unlocked');
  }
};

export const secretGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (isUnlockedSignal()) {
    return true;
  }

  router.navigate(['/regalo']);
  return false;
};

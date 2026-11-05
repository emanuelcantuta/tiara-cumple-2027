import { Service, signal } from '@angular/core';
import { resetSecret } from '@guards/secret';

@Service()
export class Auth {
    isLoggedIn = signal<boolean>(localStorage.getItem('tiara_session') === 'true');

    signIn() {
        this.isLoggedIn.set(true);
        localStorage.setItem('tiara_session', 'true');
    }

    logOut() {
        this.isLoggedIn.set(false);
        localStorage.removeItem('tiara_session');
        resetSecret();
    }
}

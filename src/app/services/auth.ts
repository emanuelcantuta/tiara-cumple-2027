import { Service, signal } from '@angular/core';

@Service()
export class Auth {
    isLoggedIn = signal<boolean>(false);

    signIn() {
        this.isLoggedIn.set(true);
    }
}

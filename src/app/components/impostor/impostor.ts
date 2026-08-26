import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-impostor',
  styleUrl: './impostor.css',
  templateUrl: './impostor.html',
})
export class Impostor {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}

import { Component } from '@angular/core';
import { TopNav } from '@components/top-nav/top-nav';

@Component({
  imports: [TopNav],
  selector: 'app-cortis',
  standalone: true,
  styleUrl: './cortis.css',
  templateUrl: './cortis.html',
})
export class Cortis {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopNav } from '@components/top-nav/top-nav';
import { BiasProfile } from './models/BiasProfile';

@Component({
  imports: [CommonModule, TopNav],
  selector: 'app-cortis',
  standalone: true,
  styleUrl: './cortis.css',
  templateUrl: './cortis.html',
})
export class Cortis {
  biases: BiasProfile[] = [
    {
      id: 'martin',
      name: 'Martin',
      koreanName: '마틴',
      mainImage: 'assets/images/kpop/cortis/martin-profile.webp',
      themeColor: '#c42626',
      roles: ['LIDER', 'RAPERO PRINCIPAL'],
      tags: ['Coreano-canadiense', 'Piscis', '18 años'],
      stats: [
        { label: 'NACIMIENTO', value: '20 de marzo de 2008' },
        { label: 'ALTURA', value: '190,5 cm' },
        { label: 'MBTI', value: 'ENTP / ENFP' },
        { label: 'SIGNO CHINO', value: 'Rata' },
        { label: 'COLOR', value: 'Rojo' },
        { label: 'EMOJI', value: '🦌' }
      ],
      quotes: [
        '"Acá va una frase icónica de Martín que a ella le llame...."',
        '"Otra frase graciosa de Martín que me vi de tiktok XD que creo poner aquí."',
        
      ]
    }, // bias 2 agregar seonhyeon
    {
      id: 'seonghyeon',
      name: 'Seonghyeon',
      koreanName: '이성현',
      mainImage: 'assets/images/kpop/cortis/seonghyeon-profile.webp',
      themeColor: '#1d4ed8', // Azul
      roles: ['VOCALISTA', 'BAILARÍN'],
      tags: ['Coreano', 'Aries', '19 años'],
      stats: [
        { label: 'NACIMIENTO', value: '10 de abr, 2007' },
        { label: 'ALTURA', value: '185 cm' },
        { label: 'MBTI', value: 'INFP' },
        { label: 'EMOJI', value: '🐺' }
      ],
      quotes: [
        '"Frase icónica del segundo bias."'
      ]
    }
  ];

}

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
  selectedPhoto: string | null = null;
  biases: BiasProfile[] = [
    {
      id: 'martin',
      name: 'Martin',
      koreanName: '마틴',
      mainImage: 'assets/images/kpop/cortis/martin/martin-profile.webp',
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
        
      ],
      gallery: [
        'assets/images/kpop/cortis/martin/martin-1.webp',
        'assets/images/kpop/cortis/martin/martin-2.webp',
        'assets/images/kpop/cortis/martin/martin-3.webp',
        'assets/images/kpop/cortis/martin/martin-4.webp',
        'assets/images/kpop/cortis/martin/martin-5.webp',
        'assets/images/kpop/cortis/martin/martin-6.webp',
        'assets/images/kpop/cortis/martin/martin-7.webp',
        'assets/images/kpop/cortis/martin/martin-8.webp',
      ]
    },
    {
      id: 'seonghyeon',
      name: 'Seonghyeon',
      koreanName: '성현',
      mainImage: 'assets/images/kpop/cortis/seonghyeon/seonghyeon-profile.webp',
      themeColor: '#000000',
      roles: ['VOCALISTA PRINCIPAL', 'BAILARIN'],
      tags: ['Coreano', 'Capricornio', '17 años'],
      stats: [
        { label: 'NACIMIENTO', value: '13 de enero de 2009' },
        { label: 'ALTURA', value: '175 cm' },
        { label: 'MBTI', value: 'INTP' },
        { label: 'SIGNO CHINO', value: 'Rata' },
        { label: 'COLOR', value: 'Negro' },
        { label: 'EMOJI', value: '🦊' }
      ],
      quotes: [
        '"Frase icónica del segundo bias."',
        '"Frase icónica del segundo bias."',
        '"Frase icónica del segundo bias."',
        '"Frase icónica del segundo bias."'
      ],
      gallery: [
        'assets/images/cortis/seonghyeon-gal-1.jpg',
        'assets/images/cortis/seonghyeon-gal-2.jpg',
        'assets/images/cortis/seonghyeon-gal-3.jpg',
        'assets/images/cortis/seonghyeon-gal-3.jpg',
        'assets/images/cortis/seonghyeon-gal-3.jpg',
        'assets/images/cortis/seonghyeon-gal-3.jpg',
      ]
    }
  ];

}

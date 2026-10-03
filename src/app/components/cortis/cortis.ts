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
        {
          text: 'Ser vergonzoso (cringe) también es ser libre.',
          url: 'https://www.tiktok.com/@kizurat/video/7670274171137461524'
        },
        {
          text: 'Otra frase icónica de Martín.',
          url: '' 
        },
        {
          text: 'Otra frase icónica de Martín.',
          url: '' 
        },
        {
          text: 'Otra frase icónica de Martín.',
          url: '' 
        },
        {
          text: 'Otra frase icónica de Martín.',
          url: '' 
        }
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
        {
         text: 'Frase icónica de Seonghyeon.',
         url: ''
        },
        {
          text: 'Otra frase icónica de Seonghyeon.',
          url: '' 
        },
        {
          text: 'Otra frase icónica de Seonghyeon.',
          url: '' 
        },
        {
          text: 'Otra frase icónica de Seonghyeon.',
          url: '' 
        },
        {
          text: 'Otra frase icónica de Seonghyeon.',
          url: '' 
        }
      ],
      gallery: [
        'assets/images/kpop/cortis/seonghyeon/seonghyeon-1.webp',
        'assets/images/kpop/cortis/seonghyeon/seonghyeon-2.webp',
        'assets/images/kpop/cortis/seonghyeon/seonghyeon-3.webp',
        'assets/images/kpop/cortis/seonghyeon/seonghyeon-4.webp',
        'assets/images/kpop/cortis/seonghyeon/seonghyeon-5.webp',
        'assets/images/kpop/cortis/seonghyeon/seonghyeon-6.webp',
        'assets/images/kpop/cortis/seonghyeon/seonghyeon-7.webp',
        'assets/images/kpop/cortis/seonghyeon/seonghyeon-8.webp',
        'assets/images/kpop/cortis/seonghyeon/seonghyeon-9.webp',
      ]
    }
  ];

}

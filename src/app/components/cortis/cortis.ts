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
          text: `Pero creo que también pasa en nuestra generación, es como si todos quisieran ser geniales,
           como si quisieran caber en un bolsillo o caber en una bolsa. Actúan como si fueran geniales y esas cosas, pero a veces,
            <strong>el ser vergonzoso (cringe) es ser libre</strong>.`,
          englishText: '"To be cringe is to be free."',
          url: 'https://www.tiktok.com/@wavetoabi/video/7674459920661482770'
        },
        {
          text: `Hablo mucho conmigo mismo. Me miro al espejo, y hablo conmigo mismo. 
          Cuando voy en el avión, hablo conmigo mismo. Creo que es solo porque hago música, ya sabes, 
          <strong>hablar conmigo mismo es la mejor manera de, como que, organizar mis pensamientos</strong>.`,
          englishText: '"You know, talking to myself is the best way to, like, organize my thoughts."',
          url: 'https://www.tiktok.com/@juhoongatitolindo/video/7691147805037006088' 
        },
        {
          text: `Si estás estudiando, espero que te vaya bien en tus estudios, también tienes que comer bien y estar 
          saludable. Nunca estés triste, por favor sé feliz, y te mostraré muchas cosas buenas para que siempre 
          puedas ser feliz.`,
          url: 'https://www.tiktok.com/@vaehcor/video/7612111158069251359' 
        },
        {
          text: `Siento que solo estoy tratando de ser yo mismo, como era antes. 
          Es más que nada una mentalidad. <strong>Al final del día, soy solo un adolecente</strong>.`,
          englishText: '"At the end of the day, I\'m just a teenager."',
          url: 'https://www.tiktok.com/@applecoerr/video/7570981903684078878' 
        },
        {
          text: `En nuestra generación como que vamos perdiendo de vista, eso de soñar. Y pues, 
          a veces piensas que es cursi, a veces piensas que es demasiado empalagoso. 
          <strong>Pero yo creo que tienes que vivir guiándote por algo, ¿sabes?</strong>`,
          englishText: '"But I think you have to live guided by something, you know?."', 
          url: 'https://www.tiktok.com/@wspke0_/video/7664792231957581087' 
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
         text: 'Creo que expresarme es difícil. Todavía soy tímido y no tengo confianza aún.',
         englishText: 'I think expressing myself is kind of difficult.',
         url: 'https://www.tiktok.com/@mrtincams/video/7678109638734187808'
        },
        {
          text: `Aunque sientas que todo es demasiado, por favor recuerda que no tienes que enfrentarlo todo solo. 
          Está bien sentirse cansado y está bien tomar las cosas con calma. Tus sentimientos son válidos y tú 
          importas más de lo que podrías darte cuenta. Por favor, quédate, cuídate y sigue adelante un día a la vez. 
          <strong>Todavía hay personas que se preocupan por ti y que silenciosamente te están apoyando</strong>.`,
          englishText: 'keep going one day at a time there are still people who care about you and who are quietly cheering you on',
          url: 'https://www.tiktok.com/@justjuhoon/video/7615166230017740039' 
        },
        {
          text: `Siempre escribo sobre emociones que realmente he sentido como en <strong>JoyRide</strong>: No sun no sky a 
          ghostly pale face.`,
          englishText: 'I always write about emotions I have really felt.',
          url: 'https://x.com/huecortis/status/2105825274759950822' 
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

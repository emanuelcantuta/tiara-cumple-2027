import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopNav } from '@components/top-nav/top-nav';
import { Character } from './models/character';
import { Minijuego } from '@components/minijuego/minijuego';

@Component({
  imports: [CommonModule, TopNav, Minijuego],
  selector: 'app-personajes',
  styleUrl: './personajes.css',
  templateUrl: './personajes.html',
})
export class Personajes {
  showMinigame: boolean = false;
  hasWonMinigame: boolean = false;
  clueWord: string = "extraño";

  charactersList: Character[] = [
    {
      id: 'p1',
      name: 'Pomni',
      origin: 'The Amazing Digital Circus (TADC)',
      image: 'assets/images/personajes/pomni.webp',
      stat: 'Vibe: Caos y ternura',
      description: `Maybe me recuerda a vos por su personalidad y pelo JKAFSD.
      Se que creo que no te gusta mucho que te asocie con este y otros personajes, pero te juro no lo hago con mala intención Twt.`
    },
    {
      id: 'p2',
      name: 'Hinata',
      origin: 'Naruto (Anime)',
      image: 'assets/images/personajes/hinata.webp',
      stat: 'Nerviosismo: 90%',
      description: `Algo que tienen muchos personajes en común, es que todos son mis favoritos.
      Al igual que con Hinata (amaba el ship HxNaruto JAFKSD). Me veia solo para que salieran ellosxD. Y del anime fue la que más me llamaba a vs.`
    },
    {
      id: 'p3',
      name: 'Yena',
      origin: 'YENA (k-pop)',
      image: 'assets/images/personajes/yena.webp',
      stat: 'Canción: Catch Catch',
      description: `Creo te lo dije pero me recordás obviamente por ella pero también por su canción y coreo :b.`
    },
    {
      id: 'p4',
      name: 'Powder / Jinx',
      origin: 'Arcane (LOL)',
      image: 'assets/images/personajes/jinx.webp',
      stat: 'Nivel de ansiedad: 999%',
      description: `Sos powder, pero se que en otro mundo paralelo (con mala suerte) serías jinx, la de la ft.Suerte que no estamos en ese mundo paralelo, porque sino me sentiría muy mal por vs 😣xd.`
    },
    {
      id: 'p5',
      name: 'Su-Zaizai',
      origin: 'When I Fly Towards You (C-Drama)',
      image: 'assets/images/personajes/su-zaizai.webp',
      stat: 'Nivel de ternura: 100%',
      description: `Probablemente ella me recuerda a vs porque siento que tu vida (amorosa) sería así y sería copado verte (re metiche yoxD).
      Y fuera de joda si noto un parentezco deah, bue pero eso me pasa con todos los pj que puse jksfdj.`
    },
    {
      id: 'p6',
      name: 'Twilight Sparkle',
      origin: 'My little pony',
      image: 'assets/images/personajes/twilight.webp',
      stat: 'Color: Morado',
      description: `Te soy sincero, me vi solo un cap JFASDK pero es que queria ver a cúal me sonabas y para mi fue más una combinación entre Fluttershy y Twilight.`
    },
    {
      id: 'p7',
      name: 'Perro salchicha',
      origin: 'Perro salchicha',
      image: 'assets/images/personajes/perro-salchicha.webp',
      stat: 'Adorabilidad: 100%',
      description: `Siempre que me sale me recuerda a vs porque te gusta y sos muy contagiosa respecto a gustos JAFSKD.
      Aparte de que son muy bonitos 😭💗`
    },
    {
      id: 'p-secret',
      name: '404 - Not Found',
      origin: '???',
      image: 'assets/images/personajes/loading.gif',
      stat: 'Texto no encontrado',
      description: `Hay algo raro en este archivo... parece que el sistema detectó una anomalía.`,
      hasSecretLink: true
    }
  ];

  launchSecretMinigame() {
    this.showMinigame = true;
  }

  onMinigameWon() {
    this.showMinigame = false;
    this.hasWonMinigame = true;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

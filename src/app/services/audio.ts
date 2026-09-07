import { Service, signal } from '@angular/core';
import { SongSource } from '../models/song-source';

@Service()
export class Audio {
    currentSong = signal<SongSource>({
        mp3: 'assets/audio/music/cortis/CORTIS-JoyRide.mp3',
        ogg: 'assets/audio/music/cortis/CORTIS-JoyRide.ogg'
    });

    changeSong(newSong: SongSource): void {
        this.currentSong.set(newSong);
    }
}

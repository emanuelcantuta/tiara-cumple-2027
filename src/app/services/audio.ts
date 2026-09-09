import { Service, signal } from '@angular/core';
import { SongSource } from '../models/song-source';

@Service()
export class Audio {
    private readonly defaultUrl = 'assets/audio/music/cortis/cortis-joyride';

    currentSong = signal<SongSource>({
        mp3: `${this.defaultUrl}.mp3`,
        ogg: `${this.defaultUrl}.ogg`
    });

    changeSong(newSong: SongSource): void {
        this.currentSong.set(newSong);
    }
}

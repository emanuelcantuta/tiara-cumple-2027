import { Service, signal, Signal } from '@angular/core';
import { SongSource } from '@models/song-source';

@Service()
export class Audio {
    private readonly defaultUrl = 'assets/audio/music/cortis/cortis-joyride';

    currentSong = signal<SongSource>({
        mp3: `${this.defaultUrl}.mp3`,
        ogg: `${this.defaultUrl}.ogg`
    });

    private _isPlaying = signal<boolean>(false);
    private audioElement: HTMLAudioElement | null = null;

    get isPlaying(): Signal<boolean> {
        this.getElement();
        return this._isPlaying.asReadonly();
    }

    private getElement(): HTMLAudioElement | null {
        if (!this.audioElement && typeof document !== 'undefined') {
            const el = document.getElementById('musica-fondo') as HTMLAudioElement;
            if (el) {
                this.audioElement = el;
                this._isPlaying.set(!el.paused);
                el.addEventListener('play', () => this._isPlaying.set(true));
                el.addEventListener('pause', () => this._isPlaying.set(false));
            }
        }
        return this.audioElement;
    }

    play(): Promise<void> {
        const el = this.getElement();
        if (el) {
            return el.play().catch(err => {
                console.warn('Reproducción de audio bloqueada o fallida:', err);
            });
        }
        return Promise.resolve();
    }

    pause(): void {
        const el = this.getElement();
        if (el && !el.paused) {
            el.pause();
        }
    }

    toggleAudio(): void {
        const el = this.getElement();
        if (el) {
            if (el.paused) {
                this.play();
            } else {
                this.pause();
            }
        }
    }

    changeSong(newSong: SongSource): void {
        this.currentSong.set(newSong);
    }

    pauseBackgroundMusic(): void {
        this.pause();
    }
}

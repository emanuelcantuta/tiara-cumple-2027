import { SongSource } from '../../../models/song-source';

export interface Track {
  coverUrl: string;
  title: string;
  artist: string;
  audioSource: SongSource;
}

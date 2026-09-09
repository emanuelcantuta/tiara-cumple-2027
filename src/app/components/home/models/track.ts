import { Artist } from '../../../models/artist';
import { SongSource } from '../../../models/song-source';

export interface Track {
  coverUrl: string;
  title: string;
  artist: Artist;
  audioSource: SongSource;
}

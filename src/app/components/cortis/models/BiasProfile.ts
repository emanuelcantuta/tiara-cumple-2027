import { ProfileStat } from './ProfileStat';

export interface BiasProfile {
  id: string;
  name: string;
  koreanName: string;
  mainImage: string;
  themeColor: string;
  roles: string[];
  tags: string[];
  stats: ProfileStat[];
  quotes: { text: string; url: string }[];
  gallery: string[];
}
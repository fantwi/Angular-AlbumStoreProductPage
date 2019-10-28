import { Track } from './track.ts'

export interface Album {
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}

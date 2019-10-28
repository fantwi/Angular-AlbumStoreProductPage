import { Track } from '../'

export interface Album {
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}

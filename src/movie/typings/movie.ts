export interface IMovie {
  posterPath: string | null;
  adult: boolean;
  overview: string | null;
  releaseDate: string;
  id: string | number;
  originalTitle: string;
  originalLanguage: string;
  title: string;
  backdropPath: string | null;
  popularity: number;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  genresId: number[];
}

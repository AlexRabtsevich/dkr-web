import { IMovie } from './movie';

export interface IMovieGenre {
  id: string | number;
  name: string;
}

export interface IMovieProductCompany {
  id: number;
  name: string;
  logoPath: string | null;
  originCountry: string | null;
}

export interface IMovieProductCountry {
  name: string;
  iso31661: string;
}

export interface IMovieSpokenLanguage {
  name: string;
  iso6391: string;
}

export interface IMovieDetails extends Omit<IMovie, 'genresId'> {
  belongsToCollection: string | null;
  budget: number;
  genres: IMovieGenre[];
  homepage: string | null;
  imdbId: string | null;
  productionCompanies: IMovieProductCompany[];
  productionCountries: IMovieProductCountry[];
  revenue: number;
  runtime: number | null;
  spokenLanguages: IMovieSpokenLanguage[];
  status: string;
  tagline: string | null;
}

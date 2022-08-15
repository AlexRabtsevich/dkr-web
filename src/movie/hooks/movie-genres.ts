import { useQuery } from '@apollo/client';

import { IMovieGenre } from '../typings';
import { GET_MOVIE_GENRES } from '../queries';

export interface IUseMovieGenresData {
  movieGenres: IMovieGenre[];
}

export const useMovieGenres = () => useQuery<IUseMovieGenresData>(GET_MOVIE_GENRES);

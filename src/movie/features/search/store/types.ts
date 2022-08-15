import { Moment } from 'moment';

import { IUseSearchMoviesVariables } from '@dkr-web/movie';

export interface IMoviesSearchState
  extends Omit<IUseSearchMoviesVariables, 'genreIds' | 'releaseDateGte' | 'releaseDateLte'> {
  genreIds: string[];
  releaseDateGte: Moment | null;
  releaseDateLte: Moment | null;
}

interface IMovieSearchHandlers {
  updateState(state: Partial<IMoviesSearchState>): void;
}

export type MovieSearchStore = IMoviesSearchState & IMovieSearchHandlers;

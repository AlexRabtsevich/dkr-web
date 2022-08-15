import create from 'zustand';

import { IMoviesSearchState, MovieSearchStore } from './types';
import { initialStateMoviesSearchStore } from './intial-state';

export const useMovieSearchStore = create<MovieSearchStore>((set) => ({
  ...initialStateMoviesSearchStore,
  updateState: (newState: Partial<IMoviesSearchState>) => {
    set((state) => ({ ...state, ...newState }));
  },
}));

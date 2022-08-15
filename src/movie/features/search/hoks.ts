import { useMemo } from 'react';

import { IUseSearchMoviesVariables, MOVIE_SEARCH_DATE_FORMAT } from '@dkr-web/movie';

import { useMovieSearchStore } from './store';

export const useSearchMoviesVariables = () => {
  const store = useMovieSearchStore();

  return useMemo<IUseSearchMoviesVariables>(() => {
    const { sortBy, genreIds, releaseDateGte, releaseDateLte, region, runtimeGte, runtimeLte, year, page, language } =
      store;

    return {
      language,
      page,
      sortBy,
      region,
      runtimeGte,
      runtimeLte,
      year,
      releaseDateLte: releaseDateLte?.format(MOVIE_SEARCH_DATE_FORMAT),
      releaseDateGte: releaseDateGte?.format(MOVIE_SEARCH_DATE_FORMAT),
      genreIds: genreIds.join(),
    };
  }, [store]);
};

import { DEFAULT_PAGE } from '@dkr-web/common/constants';

import { MovieSorting } from '../../../hooks';
import { IMoviesSearchState } from './types';

export const initialStateMoviesSearchStore: IMoviesSearchState = {
  page: DEFAULT_PAGE,
  genreIds: [],
  releaseDateGte: null,
  releaseDateLte: null,
  sortBy: MovieSorting.PopularityDesc,
};

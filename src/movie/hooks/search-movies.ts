import { QueryHookOptions } from '@apollo/client/react/types/types';
import { useQuery } from '@apollo/client';

import { IPagination } from '@dkr-web/common/typings';

import { IMainMovieFields } from './movies';
import { SEARCH_MOVIES } from '../queries';

export enum MovieSorting {
  PopularityAsc = 'PopularityAsc',
  PopularityDesc = 'PopularityDesc',
  ReleaseDateAsc = 'ReleaseDateAsc',
  ReleaseDateDesc = 'ReleaseDateDesc',
  RevenueAsc = 'RevenueAsc',
  RevenueDesc = 'RevenueDesc',
  OriginalTitleAsc = 'OriginalTitleAsc',
  OriginalTitleDesc = 'OriginalTitleDesc',
  VoteAverageAsc = 'VoteAverageAsc',
  VoteAverageDesc = 'VoteAverageDesc',
}

export interface IUseSearchMoviesVariables {
  language?: string;
  year?: number;
  releaseDateGte?: string;
  releaseDateLte?: string;
  runtimeGte?: number;
  runtimeLte?: number;
  genreIds?: string;
  region?: string;
  sortBy?: MovieSorting;
  page: number;
}

interface IUseSearchMoviesData {
  searchMovies: IPagination<IMainMovieFields>;
}

export const useSearchMovies = (options?: QueryHookOptions<IUseSearchMoviesData, IUseSearchMoviesVariables>) =>
  useQuery<IUseSearchMoviesData, IUseSearchMoviesVariables>(SEARCH_MOVIES, options);

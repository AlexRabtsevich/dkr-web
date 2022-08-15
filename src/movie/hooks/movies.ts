import { useQuery } from '@apollo/client';
import { QueryHookOptions } from '@apollo/client/react/types/types';

import { IPagination } from '@dkr-web/common/typings';

import { IMovie } from '../typings';
import { GET_POPULAR_MOVIES, GET_TOP_RATED_MOVIES, GET_UPCOMING_MOVIES } from '../queries';

export type IMainMovieFields = Pick<
  IMovie,
  'id' | 'title' | 'releaseDate' | 'voteAverage' | 'overview' | 'posterPath' | 'backdropPath'
>;

interface IUsePopularMoviesData {
  popularMovies: IPagination<IMainMovieFields>;
}

interface IUseUpcomingMoviesData {
  upcomingMovies: IPagination<IMainMovieFields>;
}

interface IUseTopRatedMoviesData {
  topRatedMovies: IPagination<IMainMovieFields>;
}

interface IUseMoviesVariables {
  page: number;
}

export const usePopularMovies = (options?: QueryHookOptions<IUsePopularMoviesData, IUseMoviesVariables>) =>
  useQuery<IUsePopularMoviesData, IUseMoviesVariables>(GET_POPULAR_MOVIES, options);

export const useUpcomingMovies = (options?: QueryHookOptions<IUseUpcomingMoviesData, IUseMoviesVariables>) =>
  useQuery<IUseUpcomingMoviesData, IUseMoviesVariables>(GET_UPCOMING_MOVIES, options);

export const useTopRatedMovies = (options?: QueryHookOptions<IUseTopRatedMoviesData, IUseMoviesVariables>) =>
  useQuery<IUseTopRatedMoviesData, IUseMoviesVariables>(GET_TOP_RATED_MOVIES, options);

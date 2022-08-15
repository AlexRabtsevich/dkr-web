import { gql } from '@apollo/client';

import { MAIN_MOVIE_FIELDS, MOVIE_PAGINATION_FIELDS } from '../fragments';

export const GET_POPULAR_MOVIES = gql`
  ${MOVIE_PAGINATION_FIELDS}
  ${MAIN_MOVIE_FIELDS}
  query GetPopularMovies($page: Int!) {
    popularMovies(page: $page) {
      ...MoviePagination
      results {
        ...MainMovieFields
      }
    }
  }
`;

export const GET_UPCOMING_MOVIES = gql`
  ${MOVIE_PAGINATION_FIELDS}
  ${MAIN_MOVIE_FIELDS}
  query GetUpcomingMovies($page: Int!) {
    upcomingMovies(page: $page) {
      ...MoviePagination
      results {
        ...MainMovieFields
      }
    }
  }
`;
export const GET_TOP_RATED_MOVIES = gql`
  ${MOVIE_PAGINATION_FIELDS}
  ${MAIN_MOVIE_FIELDS}
  query GetTopRatedMovies($page: Int!) {
    topRatedMovies(page: $page) {
      ...MoviePagination
      results {
        ...MainMovieFields
      }
    }
  }
`;

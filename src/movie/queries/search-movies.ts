import { gql } from '@apollo/client';

import { MAIN_MOVIE_FIELDS, MOVIE_PAGINATION_FIELDS } from '../fragments';

export const SEARCH_MOVIES = gql`
  query SearchMovies(
    $page: Int!
    $year: Int
    $language: String
    $releaseDateGte: String
    $releaseDateLte: String
    $runtimeGte: Float
    $runtimeLte: Float
    $genreIds: String
    $region: String
    $sortBy: MovieSorting
  ) {
    searchMovies(
      page: $page
      year: $year
      language: $language
      releaseDateGte: $releaseDateGte
      releaseDateLte: $releaseDateLte
      runtimeGte: $runtimeGte
      runtimeLte: $runtimeLte
      genreIds: $genreIds
      region: $region
      sortBy: $sortBy
    ) {
      ...MoviePagination
      results {
        ...MainMovieFields
      }
    }
  }
  ${MOVIE_PAGINATION_FIELDS}
  ${MAIN_MOVIE_FIELDS}
`;

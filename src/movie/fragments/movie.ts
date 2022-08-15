import { gql } from '@apollo/client';

export const MAIN_MOVIE_FIELDS = gql`
  fragment MainMovieFields on MovieModel {
    voteAverage
    id
    posterPath
    title
    overview
    releaseDate
    backdropPath
  }
`;

export const MOVIE_PAGINATION_FIELDS = gql`
  fragment MoviePagination on MoviesResultsModelWithPagination {
    page
    totalResults
    totalPages
  }
`;

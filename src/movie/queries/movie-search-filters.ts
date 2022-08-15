import { gql } from '@apollo/client';

export const GET_MOVIE_LANGUAGE_FILTERS = gql`
  query GetMovieLanguageFilters {
    movieLanguageFilters {
      name
      handle
    }
  }
`;

export const GET_MOVIE_COUNTRY_FILTERS = gql`
  query GetMovieCountryFilters {
    movieCountryFilters {
      name
      handle
    }
  }
`;

import { gql } from '@apollo/client';

export const GET_MOVIE_GENRES = gql`
  query GetMovieGenres {
    movieGenres {
      id
      name
    }
  }
`;

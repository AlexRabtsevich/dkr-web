import { gql } from '@apollo/client';

import { MAIN_MOVIE_FIELDS } from '../fragments';

export const GET_MOVIE_DETAILS = gql`
  query GetMovieDetails($id: Int!) {
    movieDetails(id: $id) {
      voteAverage
      id
      posterPath
      title
      overview
      releaseDate
      backdropPath
      originalLanguage
      originalTitle
      adult
      status
      homepage
      budget
      tagline
      voteCount
      revenue
      runtime
      popularity
      spokenLanguages {
        name
      }
      productionCountries {
        name
      }
      productionCompanies {
        name
      }
      genres {
        name
      }
    }
  }
`;

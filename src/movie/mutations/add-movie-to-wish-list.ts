import { gql } from '@apollo/client';

export const ADD_MOVIE_TO_WISH_LIST = gql`
  mutation AddMovieToWishList($wishListUuid: String!, $movieId: Float!) {
    addMovieToWishList(addMovieToWatchlistData: { watchlistUuid: $wishListUuid, externalMovieId: $movieId }) {
      uuid
    }
  }
`;

import { gql } from '@apollo/client';

export const DELETE_WISH_LIST_MOVIE = gql`
  mutation DeleteWishListMovie($wishListUuid: String!, $wishListMovieUuid: String!) {
    deleteMovieFromWishList(watchlistUuid: $wishListUuid, watchlistMovieUuid: $wishListMovieUuid) {
      success
    }
  }
`;

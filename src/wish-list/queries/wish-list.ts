import { gql } from '@apollo/client';

export const GET_WISH_LIST = gql`
  query GetWishList($wishListUuid: String!, $moviesPage: Int!) {
    wishList(wishListUuid: $wishListUuid) {
      updatedAt
      createdAt
      title
      uuid
      movies(page: $moviesPage) {
        totalResults
        totalPages
        page
        results {
          uuid
          title
          isWatched
          createdAt
          posterPath
        }
      }
    }
  }
`;

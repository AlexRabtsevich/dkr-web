import { gql } from '@apollo/client';

export const DELETE_WISH_LIST = gql`
  mutation DeleteWishList($wishListUuid: String!) {
    deleteWishList(watchlistUuid: $wishListUuid) {
      success
    }
  }
`;

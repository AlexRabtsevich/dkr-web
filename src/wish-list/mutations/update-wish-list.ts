import { gql } from '@apollo/client';

export const UPDATE_WISH_LIST = gql`
  mutation UpdateWishList($wishListUuid: String!, $title: String!) {
    updateWishList(wishListUpdateData: { wishListUuid: $wishListUuid, title: $title }) {
      title
    }
  }
`;

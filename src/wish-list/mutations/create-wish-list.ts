import { gql } from '@apollo/client';

export const CREATE_WISH_LIST = gql`
  mutation CreateWishList($title: String!) {
    createWishList(wishListData: { title: $title }) {
      uuid
      title
      createdAt
      updatedAt
    }
  }
`;

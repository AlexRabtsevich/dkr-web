import { gql } from '@apollo/client';

export const GET_AVAILABLE_WISH_LISTS = gql`
  query GetAvailableWishLists {
    wishLists(page: 1) {
      results {
        uuid
        title
      }
    }
  }
`;

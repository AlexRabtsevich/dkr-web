import { gql } from '@apollo/client';

export const GET_WISH_LISTS = gql`
  query GetWishLists($page: Float!) {
    wishLists(page: $page) {
      totalPages
      totalResults
      page
      results {
        uuid
        updatedAt
        createdAt
        title
        movies(page: 1) {
          totalResults
          totalPages
          page
          results {
            id
            posterPath
          }
        }
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const USER_QUERY = gql`
  query GetUser {
    user {
      #      birthDate
      email
      firstName
      lastName
      email
      uuid
      gender {
        uuid
        name
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const GET_GENDERS = gql`
  query GetGenders {
    genders {
      uuid
      name
    }
  }
`;

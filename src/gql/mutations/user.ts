import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserDto!) {
    createUser(crateUserData: $user)
  }
`;

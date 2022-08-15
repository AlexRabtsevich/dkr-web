import { gql } from '@apollo/client';

export const REFRESH_AUTHENTICATION = gql`
  mutation RefreshAuthentication($refreshToken: RefreshAuthenticationDto!) {
    refreshAuthentication(refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`;

export const AUTHENTICATE = gql`
  mutation Authenticate($authentication: AuthenticationDto!) {
    authenticate(authentication: $authentication) {
      accessToken
      refreshToken
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout {
      success
    }
  }
`;

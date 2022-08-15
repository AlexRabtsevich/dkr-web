import { ApolloLink, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { IAuthentication, REFRESH_AUTHENTICATION } from '@dkr-web/authentication';

import { TokenDataProvider, TokenStorage } from '../common/services';
import { getApolloClient } from './helpers';
import { MILLISECONDS_IN_SECOND } from '../common/constants';

const THRESHOLD_TIME_TO_REFRESH_TOKEN_IN_SECONDS = 30;
const tokenStorage = new TokenStorage(localStorage);

interface IRefreshAuthenticateVariables {
  refreshToken: { refreshToken: string };
}

interface IRefreshAuthenticateResponse {
  refreshAuthentication: IAuthentication;
}

export const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});

export const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((err) => {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          tokenStorage.removeRefreshToken();
          tokenStorage.removeAccessToken();

          return forward(operation);
        default: {
          return forward(operation);
        }
      }
    });
  }
});

export const tokenRefreshLink = setContext(async () => {
  const accessToken = tokenStorage.getAccessToken();

  if (accessToken) {
    const tokenExpiration = TokenDataProvider.getTokenExpiration(accessToken);
    const tokenExpirationDate = new Date(
      (tokenExpiration - THRESHOLD_TIME_TO_REFRESH_TOKEN_IN_SECONDS) * MILLISECONDS_IN_SECOND,
    );

    if (tokenExpirationDate < new Date()) {
      const refreshToken = tokenStorage.getRefreshToken() || '';
      const client = getApolloClient({ link: errorLink.concat(httpLink) });
      const { data, errors } = await client.mutate<IRefreshAuthenticateResponse, IRefreshAuthenticateVariables>({
        mutation: REFRESH_AUTHENTICATION,
        variables: { refreshToken: { refreshToken } },
      });

      if (errors) {
        tokenStorage.removeRefreshToken();
        tokenStorage.removeAccessToken();
      }

      if (data) {
        const { refreshAuthentication } = data;
        tokenStorage.setRefreshToken(refreshAuthentication.refreshToken);
        tokenStorage.setAccessToken(refreshAuthentication.accessToken);
      }
    }
  }
});

export const authMiddleware = new ApolloLink((operation, forward) => {
  const accessToken = tokenStorage.getAccessToken();

  if (accessToken) {
    operation.setContext({ headers: { Authorization: `Bearer ${accessToken}` } });
  }

  return forward(operation);
});

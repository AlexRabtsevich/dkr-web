import { ApolloLink } from '@apollo/client';

import { getApolloClient } from './helpers';
import { authMiddleware, errorLink, httpLink, tokenRefreshLink } from './links';

export const apolloClient = getApolloClient({
  link: ApolloLink.from([errorLink, tokenRefreshLink, authMiddleware, httpLink]),
});

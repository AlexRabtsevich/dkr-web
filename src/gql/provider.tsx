import React, { FC, PropsWithChildren } from 'react';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from './client';

export const GqlProvider: FC<PropsWithChildren> = ({ children }) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);

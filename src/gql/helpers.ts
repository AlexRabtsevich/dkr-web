import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloClientOptions } from '@apollo/client/core/ApolloClient';

type Props = Omit<ApolloClientOptions<InMemoryCache>, 'cache'>;

const cache = new InMemoryCache();

export const getApolloClient = (options?: Props) => new ApolloClient({ ...options, cache });

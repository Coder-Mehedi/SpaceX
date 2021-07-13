import {ApolloClient, InMemoryCache} from '@apollo/client';
// @ts-ignore
import {API_URL} from '@env';
import {offsetLimitPagination} from '@apollo/client/utilities';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launchesPast: offsetLimitPagination(),
        capsules: offsetLimitPagination(),
      },
    },
  },
});

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: API_URL,
  cache,
});

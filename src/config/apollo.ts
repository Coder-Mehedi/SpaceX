import {ApolloClient, InMemoryCache} from '@apollo/client';
// @ts-ignore
import {API_URL} from '@env';

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

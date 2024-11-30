import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
  // uri: 'https://backend.vermap.com/graphql',
  cache: new InMemoryCache(),
});
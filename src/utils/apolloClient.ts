import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: 'http://192.168.0.22:4000/graphql',
});

const createApolloClient = () => {
  try {
    return new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    });
  } catch (error) {
    console.log(error)
  }
};

export default createApolloClient;
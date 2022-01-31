import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { Constants } from 'react-native-unimodules';

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: Constants.manifest.extra.apolloUri,
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
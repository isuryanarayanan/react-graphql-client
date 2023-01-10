import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

const AccountsClient = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8000/accounts/graphql/",
  }),
  cache: new InMemoryCache(),
});

export { AccountsClient };

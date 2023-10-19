import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
  const client = new ApolloClient({
    uri: "https://ayungon.stepzen.net/api/melting-camel/__graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
    },
  });
  return client;
};

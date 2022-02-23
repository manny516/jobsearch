import '../styles/globals.css';
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";


function MyApp({ Component, pageProps } : {Component : any, pageProps : any}) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp

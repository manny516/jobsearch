import '../styles/globals.css'
import type { AppProps } from 'next/app'
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

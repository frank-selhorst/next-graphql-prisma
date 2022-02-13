import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, Container } from '@chakra-ui/react';

import client from '../graphql/apollo-client';
import { theme } from '../theme';
import Header from '../components/header/header';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ApolloProvider client={client}>
         <ChakraProvider theme={theme}>
            <Container maxW="container.xl">
               <Header />
               <Component {...pageProps} />
            </Container>
         </ChakraProvider>
      </ApolloProvider>
   );
}

export default MyApp;

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
   styles: {
      global: {
         'html, body': {
            fontFamily: 'Nunito, sans-serif',
         },
      },
   },
   textStyles: {
      h1: {
         fontFamily: 'Nunito, sans-serif',
      },
      h2: {
         fontFamily: 'Nunito, sans-serif',
      },
      h3: {
         fontFamily: 'Nunito, sans-serif',
      },
      h4: {
         fontFamily: 'Nunito, sans-serif',
      },
   },
});

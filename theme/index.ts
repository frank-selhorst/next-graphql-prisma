import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#5e7e5e',
        color: '#fff !important'
      },
      a: {
        color: 'teal.500',
      },
    },
  },
});

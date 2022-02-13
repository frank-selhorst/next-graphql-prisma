import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';

const Header: React.FC = () => {
   return (
      <Box py="6" mb="5" bg="blackAlpha.800">
         <NextLink href="/" passHref>
            <Link ml="4" color="white">
               My Recipes
            </Link>
         </NextLink>
      </Box>
   );
};

export default Header;

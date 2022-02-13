import { Box, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRecipeQuery } from '../../generated/graphql-frontend';

const RecipePage: React.FC = props => {
   const router = useRouter();
   const { id } = router.query;

   const { data } = useRecipeQuery({
      variables: {
         id: id as string,
      },
   });

   const recipe = data?.recipe;

   if (!recipe) return null;

   const { name, rating, serves, prepTime } = recipe;

   return (
      <Box>
         <Heading>{name}</Heading>
         <Text>Serves: {serves}</Text>
         <Text>Preperation time: {prepTime}</Text>
         <Text>Rating: {rating}</Text>
      </Box>
   );
};

export default RecipePage;

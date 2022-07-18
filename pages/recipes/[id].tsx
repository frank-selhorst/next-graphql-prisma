import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
   useRecipeQuery,
   useRemoveRecipeMutation,
} from '../../generated/graphql-frontend';

const RecipePage: React.FC = _ => {
   const router = useRouter();
   const { id } = router.query;
    
   const { data } = useRecipeQuery({
      variables: {
         id: id as string,
      },
   });

   const [exec] = useRemoveRecipeMutation();

   const recipe = data?.recipe;

   if (!recipe) return null;

   const { name, rating, serves, prepTime } = recipe;

   return (
      <Box>
         <Heading>{name}</Heading>
         <Text>Serves: {serves}</Text>
         <Text>Preperation time: {prepTime}</Text>
         <Text>Rating: {rating}</Text>
         <Button
            onClick={async () => {
               await exec({
                  variables: {
                     id: id as string,
                  },
                  refetchQueries: ['Recipes']
               })
               router.back()
            }}
            mt="3"
            colorScheme="red"
         >
            Remove
         </Button>
      </Box>
   );
};

export default RecipePage;

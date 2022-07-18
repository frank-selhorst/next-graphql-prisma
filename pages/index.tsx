import { FormEvent } from 'react';
import type { NextPage } from 'next';
import {
   useCreateRecipeMutation,
   useRecipesQuery,
} from '../generated/graphql-frontend';
import {
   Box,
   Button,
   FormControl,
   FormHelperText,
   FormLabel,
   Heading,
   Input,
   Spinner,
} from '@chakra-ui/react';
import { RecipeList } from '../components/recipe-list/recipe-list';

const Home: NextPage = () => {
   const [createRecipe] = useCreateRecipeMutation();
   const { data, loading } = useRecipesQuery({
      ssr: false,
   });

   const recipes = data?.recipes || [];

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const name = e.currentTarget.recipe_name.value;
      const rating = e.currentTarget.rating.value;
      const serves = e.currentTarget.serves.value;
      const prepTime = e.currentTarget.prepTime.value;

      if (name && rating && serves && prepTime) {
         await createRecipe({
            variables: {
               name,
               rating: Number(rating),
               serves: Number(serves),
               prepTime: Number(prepTime),
            },
            refetchQueries: ['Recipes'],
         });
      }
   };

   return (
      <Box>
         {loading && <Spinner />}
         {recipes && recipes.length > 0 && <RecipeList recipes={recipes} />}
         <Box p="5" pt="0">
            <Heading textStyle={'h2'}>Create recipe</Heading>
            <form onSubmit={handleSubmit}>
               <FormControl mb="5">
                  <FormLabel htmlFor="recipe_name">Recipe name</FormLabel>
                  <Input id="recipe_name" type="text" />
                  <FormHelperText>
                     Currently we only support Italian kitchen
                  </FormHelperText>
               </FormControl>

               <FormControl mb="5">
                  <FormLabel htmlFor="rating">Recipe rating</FormLabel>
                  <Input id="rating" type="text" />
                  <FormHelperText>Choose between 0-5</FormHelperText>
               </FormControl>

               <FormControl mb="5">
                  <FormLabel htmlFor="serves">Recipe serves</FormLabel>
                  <Input id="serves" type="text" />
                  <FormHelperText>Amount of portions / persons</FormHelperText>
               </FormControl>
               <FormControl mb="5">
                  <FormLabel htmlFor="prepTime">Preperation time</FormLabel>
                  <Input id="prepTime" type="text" />
               </FormControl>
               <Button type="submit">Submit</Button>
            </form>
         </Box>
      </Box>
   );
};

export default Home;

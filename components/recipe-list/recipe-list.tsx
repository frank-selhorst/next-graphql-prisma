import React from 'react';
import { Recipe } from '../../generated/graphql-frontend';

import RecipeListItem from './recipe-list-item';
import { Box, List, Heading } from '@chakra-ui/react';

interface RecipeListProps {
   recipes: Recipe[];
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
   return (
      <Box mb="10" p="5">
         <Heading>Recipes</Heading>
         <List>
            {recipes.map(recipe => (
               <RecipeListItem key={recipe.id} recipe={recipe} />
            ))}
         </List>
      </Box>
   );
};

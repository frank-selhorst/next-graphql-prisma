import React from 'react';
import { default as NextLink } from 'next/link';
import { Recipe } from '../../generated/graphql-frontend';
import { Link, ListItem } from '@chakra-ui/react';

interface RecipeListItemProps {
   recipe: Recipe;
}

const RecipeListItem: React.FC<RecipeListItemProps> = ({ recipe }) => {
   const { name, id } = recipe;
   return (
      <ListItem borderWidth="1px" borderRadius="md" mb="3" p="3">
         <NextLink href={`/recipes/${id}`} passHref>
            <Link>{name}</Link>
         </NextLink>
      </ListItem>
   );
};

export default RecipeListItem;

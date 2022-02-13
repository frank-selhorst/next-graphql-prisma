import type { NextPage } from 'next';
import { useRecipesQuery } from '../generated/graphql-frontend';

const Home: NextPage = () => {
   const { data, loading, error } = useRecipesQuery({
      ssr: true,
   });

   const recipes = data?.recipes || [];

   return (
      <div>
         {recipes.map(recipe => (
            <p key={recipe.id}>
               {recipe.name} {recipe.rating}
            </p>
         ))}
      </div>
   );
};

export default Home;

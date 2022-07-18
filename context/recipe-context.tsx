import { createContext } from 'react';

const initialContext = {
   recipes: [],
   getRecipes: () => {},
   createRecipe: () => {},
   removeRecipe: () => {},
};

export const RecipeContext = createContext(initialContext);

export const RecipeProvider: React.FC = ({ children }) => {
   return (
      <RecipeContext.Provider value={initialContext}>
         {children}
      </RecipeContext.Provider>
   );
};

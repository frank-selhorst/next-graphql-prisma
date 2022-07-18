import { gql } from 'apollo-server-micro';
export const typeDefs = gql`
   type Recipe {
      id: String!
      name: String!
      kitchenId: String!
      userId: String!
      rating: Int
      prepTime: Int
      serves: Int
   }

   type Query {
      recipes: [Recipe!]!
      recipe(id: String!): Recipe
   }

   type Mutation {
      createRecipe(
         name: String!
         rating: Int
         prepTime: Int
         serves: Int
      ): Recipe!

      removeRecipe(
        id: String!
      ): Recipe
   }
`;

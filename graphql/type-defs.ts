import { gql } from 'apollo-server-micro';
export const typeDefs = gql`
   type Recipe {
      id: String!
      name: String!
      rating: Int
   }

   type Query {
      recipes: [Recipe!]!
   }
`;

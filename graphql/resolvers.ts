import { PrismaClient } from '@prisma/client';
import { Resolvers } from '../generated/graphql-backend';

interface ApolloServerContext {
   prisma: PrismaClient;
}

export const resolvers: Resolvers<ApolloServerContext> = {
   Query: {
      recipes: (_parent, _args, context) => {
         return context.prisma.recipe.findMany();
      },
      recipe: (_parent, { id }, context) => {
         return context.prisma.recipe.findUnique({
            where: {
               id,
            },
         });
      },
   },
   Mutation: {
      createRecipe: (_parent, { name, rating, prepTime, serves }, context) => {
         return context.prisma.recipe.create({
            data: {
               name,
               rating,
               serves,
               prepTime,
               kitchenId: 'joejoejoe111',
               userId: 'joejoejoe222', //TODO: should not be hardcoded
            },
         });
      },
      removeRecipe: async (_parent, { id }, context) => {
         const isDeleted = await context.prisma.recipe.delete({ where: { id: id } });
         return isDeleted
      },
   },
};

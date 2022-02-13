import { PrismaClient } from '@prisma/client';
import { Resolvers } from '../generated/graphql-backend';

interface ApolloServerContext {
   prisma: PrismaClient;
}

export const resolvers: Resolvers<ApolloServerContext> = {
   Query: {
      recipes: (parent, args, context) => {
         return context.prisma.recipe.findMany();
      },
      recipe: (parent, { id }, context) => {
         return context.prisma.recipe.findUnique({
            where: {
               id,
            },
         });
      },
   },
   Mutation: {
      createRecipe: (parent, { name, rating, prepTime, serves }, context) => {
         return context.prisma.recipe.create({
            data: {
               name,
               rating,
               serves,
               prepTime,
               kitchenId: 'ckzlcwfo30056x6jh6sj57eqx',
               userId: 'ckzlcvy3k0016x6jh2j843opg', //TODO: should not be hardcoded
            },
         });
      },
   },
};

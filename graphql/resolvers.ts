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
   },
};

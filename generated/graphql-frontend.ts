import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecipe: Recipe;
  removeRecipe?: Maybe<Recipe>;
};


export type MutationCreateRecipeArgs = {
  name: Scalars['String'];
  prepTime?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
  serves?: InputMaybe<Scalars['Int']>;
};


export type MutationRemoveRecipeArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  recipe?: Maybe<Recipe>;
  recipes: Array<Recipe>;
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['String'];
  kitchenId: Scalars['String'];
  name: Scalars['String'];
  prepTime?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  serves?: Maybe<Scalars['Int']>;
  userId: Scalars['String'];
};

export type RecipeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type RecipeQuery = { __typename?: 'Query', recipe?: { __typename?: 'Recipe', name: string, rating?: number | null, id: string, prepTime?: number | null, serves?: number | null, kitchenId: string, userId: string } | null };

export type RecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', id: string, name: string, prepTime?: number | null, serves?: number | null, kitchenId: string, userId: string, rating?: number | null }> };

export type CreateRecipeMutationVariables = Exact<{
  name: Scalars['String'];
  rating?: InputMaybe<Scalars['Int']>;
  prepTime?: InputMaybe<Scalars['Int']>;
  serves?: InputMaybe<Scalars['Int']>;
}>;


export type CreateRecipeMutation = { __typename?: 'Mutation', createRecipe: { __typename?: 'Recipe', id: string } };

export type RemoveRecipeMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveRecipeMutation = { __typename?: 'Mutation', removeRecipe?: { __typename?: 'Recipe', id: string } | null };


export const RecipeDocument = gql`
    query Recipe($id: String!) {
  recipe(id: $id) {
    name
    rating
    id
    prepTime
    serves
    kitchenId
    userId
  }
}
    `;

/**
 * __useRecipeQuery__
 *
 * To run a query within a React component, call `useRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRecipeQuery(baseOptions: Apollo.QueryHookOptions<RecipeQuery, RecipeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, options);
      }
export function useRecipeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipeQuery, RecipeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, options);
        }
export type RecipeQueryHookResult = ReturnType<typeof useRecipeQuery>;
export type RecipeLazyQueryHookResult = ReturnType<typeof useRecipeLazyQuery>;
export type RecipeQueryResult = Apollo.QueryResult<RecipeQuery, RecipeQueryVariables>;
export const RecipesDocument = gql`
    query Recipes {
  recipes {
    id
    name
    prepTime
    serves
    kitchenId
    userId
    rating
  }
}
    `;

/**
 * __useRecipesQuery__
 *
 * To run a query within a React component, call `useRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecipesQuery(baseOptions?: Apollo.QueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
      }
export function useRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
        }
export type RecipesQueryHookResult = ReturnType<typeof useRecipesQuery>;
export type RecipesLazyQueryHookResult = ReturnType<typeof useRecipesLazyQuery>;
export type RecipesQueryResult = Apollo.QueryResult<RecipesQuery, RecipesQueryVariables>;
export const CreateRecipeDocument = gql`
    mutation CreateRecipe($name: String!, $rating: Int, $prepTime: Int, $serves: Int) {
  createRecipe(name: $name, rating: $rating, prepTime: $prepTime, serves: $serves) {
    id
  }
}
    `;
export type CreateRecipeMutationFn = Apollo.MutationFunction<CreateRecipeMutation, CreateRecipeMutationVariables>;

/**
 * __useCreateRecipeMutation__
 *
 * To run a mutation, you first call `useCreateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipeMutation, { data, loading, error }] = useCreateRecipeMutation({
 *   variables: {
 *      name: // value for 'name'
 *      rating: // value for 'rating'
 *      prepTime: // value for 'prepTime'
 *      serves: // value for 'serves'
 *   },
 * });
 */
export function useCreateRecipeMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecipeMutation, CreateRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecipeMutation, CreateRecipeMutationVariables>(CreateRecipeDocument, options);
      }
export type CreateRecipeMutationHookResult = ReturnType<typeof useCreateRecipeMutation>;
export type CreateRecipeMutationResult = Apollo.MutationResult<CreateRecipeMutation>;
export type CreateRecipeMutationOptions = Apollo.BaseMutationOptions<CreateRecipeMutation, CreateRecipeMutationVariables>;
export const RemoveRecipeDocument = gql`
    mutation RemoveRecipe($id: String!) {
  removeRecipe(id: $id) {
    id
  }
}
    `;
export type RemoveRecipeMutationFn = Apollo.MutationFunction<RemoveRecipeMutation, RemoveRecipeMutationVariables>;

/**
 * __useRemoveRecipeMutation__
 *
 * To run a mutation, you first call `useRemoveRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeRecipeMutation, { data, loading, error }] = useRemoveRecipeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveRecipeMutation(baseOptions?: Apollo.MutationHookOptions<RemoveRecipeMutation, RemoveRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveRecipeMutation, RemoveRecipeMutationVariables>(RemoveRecipeDocument, options);
      }
export type RemoveRecipeMutationHookResult = ReturnType<typeof useRemoveRecipeMutation>;
export type RemoveRecipeMutationResult = Apollo.MutationResult<RemoveRecipeMutation>;
export type RemoveRecipeMutationOptions = Apollo.BaseMutationOptions<RemoveRecipeMutation, RemoveRecipeMutationVariables>;
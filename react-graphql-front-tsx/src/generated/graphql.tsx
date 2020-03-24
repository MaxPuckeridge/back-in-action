import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Book = {
   __typename?: 'Book';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Query = {
   __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
};


export type BookListQueryVariables = {};


export type BookListQuery = (
  { __typename?: 'Query' }
  & { books?: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author'>
  )>>> }
);


export const BookListDocument = gql`
    query BookList {
  books {
    title
    author
  }
}
    `;
export type BookListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<BookListQuery, BookListQueryVariables>, 'query'>;

    export const BookListComponent = (props: BookListComponentProps) => (
      <ApolloReactComponents.Query<BookListQuery, BookListQueryVariables> query={BookListDocument} {...props} />
    );
    
export type BookListProps<TChildProps = {}> = ApolloReactHoc.DataProps<BookListQuery, BookListQueryVariables> & TChildProps;
export function withBookList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BookListQuery,
  BookListQueryVariables,
  BookListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, BookListQuery, BookListQueryVariables, BookListProps<TChildProps>>(BookListDocument, {
      alias: 'bookList',
      ...operationOptions
    });
};

/**
 * __useBookListQuery__
 *
 * To run a query within a React component, call `useBookListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookListQuery({
 *   variables: {
 *   },
 * });
 */
export function useBookListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BookListQuery, BookListQueryVariables>) {
        return ApolloReactHooks.useQuery<BookListQuery, BookListQueryVariables>(BookListDocument, baseOptions);
      }
export function useBookListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BookListQuery, BookListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BookListQuery, BookListQueryVariables>(BookListDocument, baseOptions);
        }
export type BookListQueryHookResult = ReturnType<typeof useBookListQuery>;
export type BookListLazyQueryHookResult = ReturnType<typeof useBookListLazyQuery>;
export type BookListQueryResult = ApolloReactCommon.QueryResult<BookListQuery, BookListQueryVariables>;
import gql from "graphql-tag";

export const QUERY_BOOK_LIST = gql`
  query BookList {
    books {
      title
      author
    }
  }
`;

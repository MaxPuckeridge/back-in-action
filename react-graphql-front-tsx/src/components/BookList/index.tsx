import * as React from "react";
import { useBookListQuery } from "../../generated/graphql";
import BookList from "./BookList";

const BookListContainer = () => {
  const { data, error, loading } = useBookListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <BookList data={data} />;
};

export default BookListContainer;

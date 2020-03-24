import * as React from "react";
import { BookListQuery } from "../../generated/graphql";
import "./styles.css";

export interface OwnProps {
  data: BookListQuery;
}

const className = "BookList";

const LaunchList: React.FC<OwnProps> = ({ data }) => (
  <div className={className}>
    <h3>Books</h3>
    <ol className={`${className}__list`}>
      {!!data.books &&
        data.books.map(
          (book, i) =>
            !!book && (
              <li key={i} className={`${className}__item`}>
                {book.title} ({book.author})
              </li>
            )
        )}
    </ol>
  </div>
);

export default LaunchList;

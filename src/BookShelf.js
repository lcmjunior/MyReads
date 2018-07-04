import React from "react";

import Book from "./Book";

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.booksList.map(book => (
            <li key={book.id}>
              <Book object={book} changeBookShelf={props.changeBookShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;

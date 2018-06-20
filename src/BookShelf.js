import React, { Component } from "react";
import { BooksConsumer } from "./BooksContext";
import Book from "./Book";

export default class BoolShelf extends Component {
  render() {
    return (
      <BooksConsumer>
        {({ state, actions }) => (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.booksList.map(book => (
                  <li key={book.id}>
                    <Book object={book} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </BooksConsumer>
    );
  }
}

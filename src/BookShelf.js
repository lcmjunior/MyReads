import React, { Component } from "react";

import Book from "./Book";

export default class BoolShelf extends Component {
  render() {
    console.log(JSON.stringify(this.props));
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.booksList.map(book => (
              <li key={book.id}>
                <Book
                  object={book}
                  changeBookShelf={this.props.changeBookShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { BooksConsumer } from "./BooksContext";
import BookShelf from "./BookShelf";

export default class MyReadApp extends Component {
  render() {
    return (
      <BooksConsumer>
        {({ state, actions }) => (
          <div className="app">
            {console.log(JSON.stringify())}
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <BookShelf
                shelfName="Currently Reading"
                booksList={state.currentlyReading}
              />
              <BookShelf
                shelfName="Want To Read"
                booksList={state.wantToRead}
              />
              <BookShelf shelfName="Read" booksList={state.read} />
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>
                  Add a book
                </a>
              </div>
            </div>
          </div>
        )}
      </BooksConsumer>
    );
  }
}

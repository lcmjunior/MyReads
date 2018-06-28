import React, { Component } from "react";
import { getAll, update } from "./BooksAPI";
import { Route, Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import "./App.css";
import BookSearch from "./BookSearch";

export default class MyReadApp extends Component {
  state = {
    lstBooks: [],
    showSearchPage: false
  };
  changeBookShelf = bookChanged => {
    let bookIndex = this.state.lstBooks.findIndex(x => x.id == bookChanged.id);
    let lstBooksCopy = this.state.lstBooks;
    lstBooksCopy[bookIndex] = bookChanged;
    update(bookChanged, bookChanged.shelf);
    this.setState({
      lstBooks: lstBooksCopy
    });
  };

  componentDidMount() {
    // Map books in Shelf`s
    getAll().then(lstBooks => {
      this.setState({
        lstBooks
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookShelf
                shelfName="Currently Reading"
                changeBookShelf={this.changeBookShelf}
                booksList={this.state.lstBooks.filter(obj => {
                  return obj.shelf === "currentlyReading";
                })}
              />
              <BookShelf
                shelfName="Want To Read"
                changeBookShelf={this.changeBookShelf}
                booksList={this.state.lstBooks.filter(obj => {
                  return obj.shelf === "wantToRead";
                })}
              />
              <BookShelf
                shelfName="Read"
                changeBookShelf={this.changeBookShelf}
                booksList={this.state.lstBooks.filter(obj => {
                  return obj.shelf === "read";
                })}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => <BookSearch changeBookShelf={this.changeBookShelf} />}
        />
      </div>
    );
  }
}

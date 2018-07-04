import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import { DebounceInput } from "react-debounce-input";

export default class BookSearch extends Component {
  state = {
    lstBooksSearch: []
  };

  updateQuery = query => {
    query.length > 0 && search(query).then(res => this.mergeList(res));
    query.length <= 0 && this.setState({ lstBooksSearch: [] });
  };

  mergeList(res) {
    if (!res.hasOwnProperty("error")) {
      res.forEach((obj, index) => {
        let bookFind = this.props.userBooks.find(b => b.id === obj.id);
        if (bookFind !== undefined) {
          res[index] = bookFind;
        }
      });
    }
    this.setState({
      lstBooksSearch: res.hasOwnProperty("error") ? [] : res
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              type="text"
              debounceTimeout={300}
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            booksList={this.state.lstBooksSearch}
            changeBookShelf={this.props.changeBookShelf}
          />
        </div>
      </div>
    );
  }
}

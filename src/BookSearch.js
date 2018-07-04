import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import { DebounceInput } from "react-debounce-input";

export default class BookSearch extends Component {
  state = {
    lstBooksSearch: [],
    loading: false
  };

  updateQuery = query => {
    if (query.length > 0) {
      this.setState({ loading: true });
      search(query).then(res => this.mergeList(res));
    }
    if (query.length <= 0) {
      this.setState({ lstBooksSearch: [], loading: false });
    }
  };

  mergeList(res) {
    if (!res.hasOwnProperty("error")) {
      res.forEach((obj, index) => {
        const bookFind = this.props.userBooks.find(b => b.id === obj.id);
        if (bookFind !== undefined) {
          res[index] = bookFind;
        }
      });
    }
    this.setState({
      lstBooksSearch: res.hasOwnProperty("error") ? [] : res,
      loading: false
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

        {this.state.loading === true && (
          <div className="loadingback">
            <div className="loading">
              <img src={require("./images/loadingbook.gif")} />
            </div>
          </div>
        )}
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

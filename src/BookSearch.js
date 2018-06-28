import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";

export default class BookSearch extends Component {
  state = {
    query: "",
    lstBooksSearch: []
  };

  updateQuery = query => {
    query.length > 0 &&
      search(query).then(res =>
        this.setState({
          lstBooksSearch: res.hasOwnProperty("error") ? [] : res
        })
      );
    query.length <= 0 && this.setState({ lstBooksSearch: [] });
  };
  // componentWillMount() {
  //   if (this.state.query !== "") {
  //     search(this.state.query).then(books => {
  //       this.setState({
  //         lstBooksSearch: books
  //       });
  //     });
  //   }
  // }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
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

import React, { Component } from "react";

export default class Book extends Component {
  state = {
    book: {}
  };
  getFirstElementOfArray() {
    if (
      this.state.book.hasOwnProperty("imageLinks") &&
      this.state.book.imageLinks.hasOwnProperty("thumbnail")
    ) {
      let objImg = this.state.book.imageLinks;

      if (objImg.length > 0) return "";
      return objImg.thumbnail;
    }
    return "";
  }

  handleChange = (e, ebook) => {
    ebook.shelf = e.target.value;
    this.props.changeBookShelf(ebook);
  };

  componentDidMount() {
    this.setState({ book: this.props.object });
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${this.getFirstElementOfArray()}")`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={event => this.handleChange(event, this.state.book)}
              value={
                this.props.object.shelf !== undefined
                  ? this.props.object.shelf
                  : "none"
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.object.title}</div>
      </div>
    );
  }
}

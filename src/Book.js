import React, { Component } from "react";

export default class Book extends Component {
  state = {
    book: this.props.object,
    st: "teste"
  };
  const = { book: this.state.book };

  getFirstElementOfArray() {
    if (
      this.state.book.hasOwnProperty("imageLinks") &&
      this.state.book.imageLinks.hasOwnProperty("thumbnail")
    ) {
      let objImg = this.state.book.imageLinks;

      if (objImg.length > 0) return "asdf";
      return objImg.thumbnail;
    }
    return "url('sss')";
    if (this.state.book.imageLinks.hasOwnProperty("thumbnail")) {
      if (this.state.book.imageLinks.length > 0) return "imagems";
      else return "zzz";
    } else return "bbb";
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
            <select>
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
        <div className="book-authors">{this.state.book.title}</div>
      </div>
    );
  }
}

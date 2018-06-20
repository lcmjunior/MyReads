import React, { Component } from "react";
import { getAll } from "./BooksAPI";

const { Provider, Consumer } = React.createContext();

export const BooksConsumer = Consumer;

export class BooksProvider extends Component {
  state = {
    lstBooks: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    showSearchPage: false
  };

  retornaReads() {
    return this.state.read;
  }

  componentDidMount() {
    // Map books in Shelf`s
    getAll().then(lstBooks => {
      this.setState({
        currentlyReading: lstBooks.filter(obj => {
          return obj.shelf === "currentlyReading";
        }),

        wantToRead: lstBooks.filter(obj => {
          return obj.shelf === "wantToRead";
        }),

        read: lstBooks.filter(obj => {
          return obj.shelf === "read";
        })
      });
    });
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

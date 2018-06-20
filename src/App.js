import React, { Component } from "react";
import { BooksProvider } from "./BooksContext";
import "./App.css";
import MyReadApp from "./MyReadApp";

export default class Estante extends Component {
  render() {
    return (
      <BooksProvider>
        <MyReadApp />>
      </BooksProvider>
    );
  }
}

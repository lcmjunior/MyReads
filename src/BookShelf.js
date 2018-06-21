import React, { Component } from "react";

import Book from "./Book";

export default class BoolShelf extends Component {
  state = {
    nome: "Reginaldo",
    listaPrivada: []
  };

  mudanome() {
    this.setState(
      {
        nome: "Luiz"
      },

      this.setState({ listaPrivada: [] })
    );
  }
  render() {
    if (this.state.nome !== "Luiz")
      this.state.listaPrivada = this.props.booksList;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state.listaPrivada.map(book => (
              <li key={book.id}>
                <Book
                  object={book}
                  changeBookShelf={this.props.changeBookShelf}
                />
              </li>
            ))}
          </ol>
        </div>
        <button onClick={() => this.mudanome()}>Mudar Nome</button>
      </div>
    );
  }
}

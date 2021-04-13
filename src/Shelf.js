import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Book from "./Book";
import "./App.css";

class Shelf extends Component {
  render() {
    const { books, updateShelf } = this.props;
    const shelves = [{ name: "Currently Reading", id: "currentlyReading" }, { name: "Want to Read", id: "wantToRead" }, { name: "Read", id: "read" }];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {shelves.map(shelf => (
            <div key={shelf.id} className="bookshelf">
              <h2 className="bookshelf-title">{shelf.name}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter(b => b.shelf === shelf.id)
                    .map(b => (
                      <Book key={b.id} book={b} updateShelf={updateShelf} />
                    ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

        <div className="open-search">
          <Link to="/searchbooks">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Shelf;

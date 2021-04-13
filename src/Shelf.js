import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Book from "./Book";
import "./App.css";

class Shelf extends Component {
  render() {
    const { books } = this.props;
    console.log(books);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter(b => b.shelf === "currentlyReading")
                  .map(b => (
                    <Book key={b.id} book={b} />
                  ))}
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter(b => b.shelf === "wantToRead")
                  .map(b => (
                    <Book key={b.id} book={b} />
                  ))}
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter(b => b.shelf === "read")
                  .map(b => (
                    <Book key={b.id} book={b} />
                  ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="open-search">
          <Link to="/searchbooks">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Shelf;

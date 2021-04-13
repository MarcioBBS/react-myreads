import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Book from "./Book";
import "./App.css";

class Shelf extends Component {
  renderShelf(books, shelfTitle, shelfID) {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter(b => b.shelf === shelfID)
              .map(b => (
                <Book key={b.id} book={b} />
              ))}
          </ol>
        </div>
      </div>
    );
  }

  render() {
    const { books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {/* Render Shelf Currently Reading */}
          {this.renderShelf(books, "Currently Reading", "currentlyReading")}

          {/* Render Shelf Wanto to Read */}
          {this.renderShelf(books, "Want to Read", "wantToRead")}

          {/* Render Shelf Wanto to Read */}
          {this.renderShelf(books, "Read", "read")}
        </div>

        <div className="open-search">
          <Link to="/searchbooks">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Shelf;

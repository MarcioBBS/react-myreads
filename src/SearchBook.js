import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Book from "./Book";

class SearchBook extends Component {
  state = {
    query: "",
  };

  updateQuery = userQuery => {
    this.setState(() => ({
      query: userQuery,
    }));
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    const { query } = this.state;
    const { books, updateShelf, onSearchBooks, allBooks, queryMessage } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search by title or author"
              onChange={event => {
                this.updateQuery(event.target.value);
                onSearchBooks(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          {queryMessage !== "" && query.length > 0 && allBooks.length === 0 && (
            <div>
              <p>{queryMessage}</p>
            </div>
          )}

          <ol className="books-grid">
            {allBooks.map(book => (
              <Book key={book.id} book={book} updateShelf={updateShelf} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;

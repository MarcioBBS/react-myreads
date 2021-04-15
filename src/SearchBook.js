import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
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
    const { books, updateShelf, onSearchBooks, searchedBooks, queryMessage } = this.props;

    if (searchedBooks.length > 0) {
      for (const book of searchedBooks) {
        book.shelf = "none";
        for (const bookOnShelf of books) {
          if (book.id === bookOnShelf.id) {
            book.shelf = bookOnShelf.shelf;
          }
        }
      }
    }

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
          {queryMessage !== "" && query.length > 0 && searchedBooks.length === 0 && (
            <div>
              <p>{queryMessage}</p>
            </div>
          )}

          <ol className="books-grid">
            {searchedBooks.map(book => (
              <Book key={book.id} book={book} updateShelf={updateShelf} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

SearchBook.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  onSearchBooks: PropTypes.func.isRequired,
  searchedBooks: PropTypes.array.isRequired,
  queryMessage: PropTypes.string.isRequired,
};

export default SearchBook;

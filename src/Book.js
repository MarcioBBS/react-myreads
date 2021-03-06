import React, { Component } from "react";
import PropTypes from "prop-types";

const Book = props => {
  const { book, updateShelf } = props;

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: book.imageLinks ? `url("${book.imageLinks.thumbnail}")` : "",
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={event => {
                const option = event.target.value;
                updateShelf(book, option);
              }}
              value={book.shelf}
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
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

// export default Book;
export default React.memo(Book);

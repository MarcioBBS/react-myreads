import React, { Component } from "react";

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
              backgroundImage: `url("${book.imageLinks.thumbnail}")`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={e => {
                const option = e.target.value;
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

// export default Book;
export default React.memo(Book);

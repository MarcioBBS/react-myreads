import React from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Shelf from "./Shelf";
import SearchBooks from "./SearchBook";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    queryMessage: "",
  };

  fetchAPI() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books,
      }));
    });
  }

  componentDidMount() {
    this.fetchAPI();
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      this.fetchAPI();
    });
  };

  searchBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(res => {
        if (res.error) {
          this.setState(() => ({
            searchedBooks: [],
            queryMessage: "A search was done, but it yielded no results.",
          }));
        } else this.setState(() => ({ searchedBooks: res }));
      });
    } else {
      this.setState(() => ({
        searchedBooks: [],
        queryMessage: "",
      }));
    }
  };

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => <Shelf books={this.state.books} updateShelf={this.updateShelf} />} />

          <Route exact path="/searchbooks" render={() => <SearchBooks books={this.state.books} updateShelf={this.updateShelf} onSearchBooks={this.searchBooks} searchedBooks={this.state.searchedBooks} queryMessage={this.state.queryMessage} />} />
        </Router>
      </div>
    );
  }
}

export default BooksApp;

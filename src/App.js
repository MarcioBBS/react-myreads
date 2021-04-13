import React from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Shelf from "./Shelf";
import SearchBooks from "./SearchBook";
import "./App.css";
import Book from "./Book";

class BooksApp extends React.Component {
  state = {
    books: [],
    bookList: [],
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

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => <Shelf books={this.state.books} updateShelf={this.updateShelf} />} />

          {/* <Route path="/searchbooks" component={SearchBooks} /> */}
          <Route exact path="/searchbooks" render={() => <SearchBooks books={this.state.books} updateShelf={this.updateShelf} />} />
        </Router>
      </div>
    );
  }
}

export default BooksApp;

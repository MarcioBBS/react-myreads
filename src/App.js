import React from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Shelf from "./Shelf";
import SearchBooks from "./SearchBook";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
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

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => <Shelf books={this.state.books} />} />

          {/* <Route path="/searchbooks" component={SearchBooks} /> */}
          <Route exact path="/searchbooks" render={({ books }) => <SearchBooks books={this.state.books} />} />
        </Router>
      </div>
    );
  }
}

export default BooksApp;

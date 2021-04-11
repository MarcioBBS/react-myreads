import React from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import MyReads from "./MyReads";
import SearchBooks from "./SearchBook";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books,
      }));
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={MyReads} />

          {/* <Route path="/searchbooks" component={SearchBooks} /> */}
          <Route exact path="/searchbooks" render={({ books }) => <SearchBooks books={this.state.books} />} />
        </Router>
      </div>
    );
  }
}

export default BooksApp;

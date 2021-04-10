import React from 'react';
import * as BooksAPI from './BooksAPI';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MyReads from './MyReads';
import SearchBooks from './SearchBook';
import './App.css'

// const SearchBooks = ({ match }) => {
//   return (
//     <div className="search-books">
//       <div className="search-books-bar">
//         {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
//         <Link to= '/' className="close-search">Close</Link>
//         <div className="search-books-input-wrapper">
//           {/*
//             NOTES: The search from BooksAPI is limited to a particular set of search terms.
//             You can find these search terms here:
//             https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

//             However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
//             you don't find a specific author or title. Every search is limited by search terms.
//           */}
//           <input type="text" placeholder="Search by title or author"/>

//         </div>
//       </div>
//       <div className="search-books-results">
//         <ol className="books-grid"></ol>
//       </div>
//     </div>
//   );
// }

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (      
      <Router>
        <Route exact path= '/' component= {MyReads} />
        <Route path='/searchbooks' component= {SearchBooks}/>
      </Router>
    )
  }
}

export default BooksApp;

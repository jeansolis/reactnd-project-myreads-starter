import React, {Component} from 'react'
import { Link } from 'react-router-dom' 
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

import * as BooksAPI from './BooksAPI'

import Book from './Book'

const MAX_RESULTS = 20

class BookSearch extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }
    
    state = {
        query: '',
        books: []
    }

    //State methods
    updateSearch = (searchTerm) => {
        this.setState({
            query: searchTerm
        })

        if(searchTerm){
            BooksAPI.search(searchTerm.trim(), MAX_RESULTS).then((booksResult) => {
                if(booksResult && Array.isArray(booksResult)){
                    //Compare with current books in the bookshelf and update the shelf
                    booksResult.forEach((newBook) => {
                        newBook.shelf = 'none'
                        this.props.books.forEach((book) => {
                            if(newBook.id === book.id) {
                                newBook.shelf = book.shelf
                            }
                        })
                    })

                    booksResult.sort(sortBy('title'))

                    this.setState({
                        books: booksResult
                    })
                }
            })
        } else {
            this.setState({
                books: []
            })
        }
    }

    //Rendering
    render() {
        const {query, books} = this.state

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" 
                value={query}
                onChange={(event) => this.updateSearch(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {books.map((book) => (
                      <li key={book.id}>
                          <Book book={book} onShelfChange={this.props.onShelfChange}/>
                      </li>
                  ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookSearch
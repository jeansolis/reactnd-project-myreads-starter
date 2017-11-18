import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import BookshelfChanger from './BookshelfChanger'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {

    static propTypes = {

    }

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books)=>{
            this.setState({books})
        })
    }

    //State methods

    render() {
        //Destructure
        const {books} = this.state
        const shelfWantToRead = 'wantToRead'
        const shelfCurrentlyReading = 'currentlyReading'
        const shelfRead = 'read'

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {books.filter((book) => {
                           return book.shelf && new RegExp(shelfCurrentlyReading, 'i').test(book.shelf)
                       }).map((book) => (<li key={book.id}><Book book={book} /></li>))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter((book) => {
                           return book.shelf && new RegExp(shelfWantToRead, 'i').test(book.shelf)
                        }).map((book) => (<li key={book.id}><Book book={book} /></li>))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter((book) => {
                           return book.shelf && new RegExp(shelfRead, 'i').test(book.shelf)
                        }).map((book) => (<li key={book.id}><Book book={book} /></li>))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Bookshelf
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class Bookshelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    render() {
        //Destructure
        const {books} = this.props
        
        const shelfs = [{
          shelf: '^currentlyReading$',
          title: 'Currently Reading'
        },
        {
          shelf: '^wantToRead$',
          title: 'Want to Read'
        },
        {
          shelf: '^read$',
          title: 'Read'
        }]

        books.sort(sortBy('title'))

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelfs.map((shelf) => (
                  <div className="bookshelf" key={shelf.shelf}>
                    <h2 className="bookshelf-title">{shelf.title}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {books.filter((book) => {
                            return book.shelf && new RegExp(shelf.shelf, 'i').test(book.shelf)
                        }).map((book) => (
                            <li key={book.id}><Book book={book} onShelfChange={this.props.onShelfChange} /></li>
                            ))}
                      </ol>
                    </div>
                  </div>
                ))}
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
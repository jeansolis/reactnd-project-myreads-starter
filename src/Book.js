import React, {Component} from 'react'
import BookshelfChanger from './BookshelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired
    }
    
    state = {

    }

    render() {
        const {book} = this.props

        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, 
                backgroundImage: 'url("' + ((book.imageLinks && book.imageLinks.smallThumbnail) ? book.imageLinks.smallThumbnail : '') + '")' }} >
                </div>
                    <BookshelfChanger book={book} onShelfChange={this.props.onShelfChange} />
                </div>
                <div className="book-title">{book.title}</div>
                 <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

export default Book
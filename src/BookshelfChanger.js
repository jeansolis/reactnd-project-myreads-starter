import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookshelfChanger extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    onShelfChange = (shelf) => {
        BooksAPI.update(this.props.book, shelf).then((response) => {
            //Update shelfbook status
            if(this.props.onShelfChange){
                this.props.onShelfChange(this.props.book, shelf)
            }

            //Update current book shelf
            this.props.book.shelf = shelf
        })
    }

    render() {
        return (
            <div className="book-shelf-changer">
            <select onChange={(event) => this.onShelfChange(event.target.value)}
                value={this.props.book.shelf}>
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
    }
}

export default BookshelfChanger
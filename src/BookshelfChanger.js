import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookshelfChanger extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    state = {

    }

    onShelfChange = (shelf) => {
        console.log(shelf)
        console.log(this.props.book)
        BooksAPI.update(this.props.book, shelf).then((response) => {
            if(this.props.onShelfChange){
                this.props.onShelfChange(this.props.book)
            }
        })
    }

    render() {
        return (
            <div className="book-shelf-changer">
            <select onChange={(event) => this.onShelfChange(event.target.value)}>
              <option value="none" disabled>Move to...</option>
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
import React from 'react'
import BookshelfChanger from './BookshelfChanger'

function Book(props){
    const {book} = props
    
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{backgroundImage: 'url("' + ((book.imageLinks && book.imageLinks.smallThumbnail) ? book.imageLinks.smallThumbnail : '') + '")' }} >
                </div>
                <BookshelfChanger book={book} onShelfChange={props.onShelfChange} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(', '): ''}</div>
        </div>
    )
}

export default Book
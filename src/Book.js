import React from 'react'
import BookshelfChanger from './BookshelfChanger'

function Book(props){
    const {book} = props
    
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, 
                backgroundImage: 'url("' + ((book.imageLinks && book.imageLinks.smallThumbnail) ? book.imageLinks.smallThumbnail : '') + '")' }} >
                </div>
                <BookshelfChanger book={book} onShelfChange={props.onShelfChange} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
}

export default Book
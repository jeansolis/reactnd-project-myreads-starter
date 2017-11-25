import React from 'react'
import {Route} from 'react-router-dom'
import BooksSearch from './BooksSearch'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  //State methods
  onShelfChange = (book, newShelf)=>  {
    console.log('onShelfChange')
    if (newShelf.toLowerCase() === 'none'){
        //Remove book from the bookshelf
        this.setState((currentState) => ({
            books: currentState.books.filter((b) => b.id !== book.id)
        }))
    } else {
        if(book.shelf !== 'none'){
          //Update book's shelf if exists
          this.setState((currentState) => ({
            books: currentState.books.map((b) => {
                if (b.id === book.id){
                    //Update the shelf and return the updated book
                    b.shelf = newShelf;
                    return b;
                } 
                return b;
            })
          }))
        } else {
          //Add new book to the collection
          book.shelf = newShelf
          this.setState((currentState) => ({
            books: currentState.books.concat([book])
          }))
        }
    }
}

  render() {
    return (
      <div className="app">
        
        <Route exact path="/" render={() => (
          <Bookshelf books={this.state.books} onShelfChange={this.onShelfChange} />
        )} />
        
        <Route path="/search" render={(history) => (
          <BooksSearch books={this.state.books} onShelfChange={this.onShelfChange} />
        )} />

      </div>
    )
  }
}

export default BooksApp

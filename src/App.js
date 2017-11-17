import React from 'react'
import {Route} from 'react-router-dom'
import BooksSearch from './BooksSearch'
import Bookshelf from './Bookshelf'
//import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Bookshelf} />
        <Route path="/search" component={BooksSearch} />
      </div>
    )
  }
}

export default BooksApp

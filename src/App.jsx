import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './BookList'
import booksData from './BookData'
/* all the relevant imports */

function App() {
/* Set up state */
  const [books, setBooks] = useState(booksData);
/* set up update function */
  const selectFavorite = (id) => {
    setBooks(
      books.map((book) => book.id === id ? {...book, isFavorite: !book.isFavorite } : book)
    ) /* this is saying that for the book whose id matches the selected, switch the isFavorite state to the opposite */
  }
/* setting up create function */
  const addBook = () => {
    const newBook = { /* new book that will be the book added */
      id: books.length ? books[books.length -1].id + 1 : 0,
      /* this makes it so that the id is either zero or one greater than the previous id */
      title: "American Gods",
      author: "Neil Gaiman",
      isFavorite: false,
    }
    setBooks( [...books, newBook])
    /* updating the state using a spread operator and adding the new book object */
  }
/* function to delete books */
  const deleteBook = (idToDelete) => {
    setBooks ( books.filter(b => b.id !== idToDelete)) /* updating state to create a new array with filter */
  }

  return (
    <div className='container'>
      <h1 className='my-4'>Book Wish List</h1>
      <button onClick={addBook}>Add Book</button>
      <div>
        <BookList /* Booklist component with relevant props */
          books={books} 
          onSelectFavorite={selectFavorite} 
          deleteBook={deleteBook}
        />
      </div>
    </div>
  )
}

export default App

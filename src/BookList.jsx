/* Receive the list of books as a prop, displaying each book with a static add to cart button */
import React from 'react'
import BookCard from './BookCard'
/* passing in books prop from BookCard so that each card in the list is filled with the 
books from BooksData */
function BookList({books, onSelectFavorite, deleteBook}) {
  return (
    <div className='row'>
      {books.map((book) => (
        <div className='col-md-4 col-sm-6 col-12 mb-4' key={book.id}>
        <BookCard
            id={book.id}
            title={book.title}
            author={book.author}
            isFavorite={book.isFavorite}
            selectFavorite={onSelectFavorite}
            deleteBook={deleteBook}
        />
       {/* includes all necessary props */}
        </div>
      ))}
    </div>
  )
}

export default BookList
import React from 'react'

function BookCard({ id, title, author, isFavorite, selectFavorite, deleteBook}) {
    /* all of the many props for bookcard */
  return (
    <div className='card m-3 border shadow-sm' style={{ width: '18rem'}}>
        <div className='card-body'>
            <div>
                <h5 className='card-title'>{title}</h5>
                <h6 className="card-subtitle text-muted">{author}</h6>
            </div>
        
            <div className='buttonContainer d-flex mt-4 justify-content-between'> 
                <button className='btn btn-outline-danger' onClick={() => selectFavorite(id)}>
                    {isFavorite ? '🖤' : '❤️'}
                    {/* defines appearance for if it is a favorite or not */}
                </button>
                <button className='btn btn-outline-danger' onClick={() => deleteBook(id)}>❌</button>
            </div> 
        </div>
    </div>
  )
}

export default BookCard
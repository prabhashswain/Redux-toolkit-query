import React from 'react'
import { useGetBooksQuery,useDeleteBookMutation } from '../services/bookServices'

const Book = () => {
    const { data=[],isLoading } = useGetBooksQuery();
    const [ deleteBook ] = useDeleteBookMutation();
    if (isLoading) {
        return <div className="container">
            <h1>Loading....</h1>
        </div>
    }
    return (
        <div className="container">
          {
              data.map(book=>(
                <div className='list' key={book.id}>
                <div className='list--name'>
                    <span>name</span>
                    {book.name}
                </div>
                <div className='list--author'>
                    <span>author</span>
                    {book.author}
                </div>
                <div className='list--button'>
                    <button onClick={()=>deleteBook(book.id)}>Delete Book</button>
                </div>
            </div>
              ))
          }
        </div>
    )
}

export default Book

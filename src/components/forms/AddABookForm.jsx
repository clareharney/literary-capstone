import { useEffect, useState } from "react"
import "./Form.css"
import { useLocation, useNavigate } from "react-router-dom"
import { getAllBooks } from "../../services/bookService.jsx"

export const AddABookForm = () => {
    // create a form for user to input a title and an author and search for that title
    // after searching, if the book is found the user can add the book to their My Books
    // on click of the Search button, if book is in the database, user is taken to the book's page
    // if book is not found, user can choose to add a new book to the books database using another form

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const navigate = useNavigate()

    const handleSearch = (event) => {
        event.preventDefault()
        checkIfBookExists(title, author)
    }
    
    const checkIfBookExists = (title, author) => {
        // check if book exists in database
        getAllBooks().then((bookArray) => {
            const foundBook = bookArray.find(book => book.title === title && book.author === author)
            if(foundBook){
                navigate(`/books/${foundBook.id}`)
            } else {
                navigate('/my-books/create-new-book')
            }
        })
    }


    return (
        <form onSubmit={handleSearch}>
            <h2>Add A Book to My Books</h2>
            <fieldset>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter the book title"
                        required
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <label>Author</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter the book's author"
                        required
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info" type="submit">Search</button>
                </div>
            </fieldset>
        </form>
    )
}
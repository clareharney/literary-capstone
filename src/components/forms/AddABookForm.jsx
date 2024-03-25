import { useEffect, useState } from "react"
import "./Form.css"
import { useNavigate } from "react-router-dom"
import { getAllBooks } from "../../services/bookService.jsx"

export const AddABookForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const navigate = useNavigate()

    const handleSearch = (event) => {
        event.preventDefault()
        checkIfBookExists(title, author)
    }

    const checkIfBookExists = (title) => {
        // check if book exists in database
        getAllBooks().then((bookArray) => {
            const foundBook = bookArray.find(book => book.title === title)
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
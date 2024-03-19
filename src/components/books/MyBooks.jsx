import { useEffect, useState } from "react"
import { getUserBooks } from "../../services/bookService.jsx"
import { Book } from "./Book.jsx"

export const MyBooksList = ({currentUser}) => {
    const [allBooks, setAllBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    
    useEffect(() => {
        getUserBooks(1).then((booksArray) => {
            setAllBooks(booksArray)
        })
    }, [])

    return (
        <div className="books-container">
            <h2>My Books</h2>
            <article className="books">
                {filteredBooks.map ((bookObject) => {
                        return <p>{bookObject.title}</p>
                })}
            </article>
        </div>
    )
}

export default MyBooksList
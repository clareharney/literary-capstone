import { useEffect, useState } from "react"
import { addABookToUserBooks, getAllBooks, getBookById } from "../../services/bookService.jsx"
import { useNavigate, useParams } from "react-router-dom"

export const BookPage = ({currentUser}) => {
    const [allBooks, setAllBooks] = useState([])
    const [book, setBook] = useState({})
    const navigate = useNavigate()
    const {bookId} = useParams()

    useEffect(() => {
        getBookById(bookId).then((bookObj) => {
            setBook(bookObj)
        })
    }, [bookId])


    const handleAdd = (event) => {
        event.preventDefault()
        const newBook= {
            bookId: book.id,
            userId: currentUser.id,
            ratingScale: 0,
            review: "",
            favorite: false,
            finishedReading: false
        }
        addABookToUserBooks(newBook).then(navigate("/my-books"))
    }
    

    useEffect(() => {
        getAllBooks().then((booksArray) => {setAllBooks(booksArray)})
    }, [allBooks])

    return(
        <main>
            <div className="book-card">
                <div className="book-img">
                    <img src={book.image}/>
                </div>
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.summary}</div>
                <div>{book.genre}</div>
                <div>{book.pageCount} pages</div>
            </div>
            <div className="btn-container">
                <button className="btn btn-secondary" onClick={handleAdd}>Add This Book</button>
            </div>
        </main>
    )
}
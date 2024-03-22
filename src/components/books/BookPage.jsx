import { useEffect, useState } from "react"
import { addABookToUserBooks, getAllBooks, getBookById } from "../../services/bookService.jsx"
import { useParams } from "react-router-dom"

// STILL NEED TO DO
// when user clicks Add Book, book is added to userBooks
// when user clicks Want to Read, book is added to userBooks and user's Want To Read Bookshelf

export const BookPage = () => {
    const [allBooks, setAllBooks] = useState([])
    const [book, setBook] = useState({})
    const {bookId} = useParams()

    useEffect(() => {
        getBookById(bookId).then((bookObj) => {
            setBook(bookObj)
        })
    }, [bookId])


    const handleAdd = () => {
        const newBook= {
            bookId: book.id,
            userId: book.userId,
            ratingScale: 0,
            review: "",
            favorite: false,
            finishedReading: false
        }
        addABookToUserBooks(newBook)
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
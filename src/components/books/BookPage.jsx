import { useEffect, useState } from "react"
import { getAllBooks, getBookById } from "../../services/bookService.jsx"
import { useParams } from "react-router-dom"

//once the user searches a book, if the book is found the user sees the book page 
//the image, title, author, summary and genre of the book shows

export const BookPage = () => {
    const [allBooks, setAllBooks] = useState([])
    const [book, setBook] = useState({})
    const {bookId} = useParams()

    useEffect(() => {
        getBookById(bookId).then((bookObj) => {
            setBook(bookObj)
        })
    }, [bookId])


    

    useEffect(() => {
        getAllBooks().then((booksArray) => {setAllBooks(booksArray)})
    }, [allBooks])

    return(
        <main>
            <div>
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
                <button className="btn btn-secondary">Add Book</button>
            </div>
        </main>
    )
}
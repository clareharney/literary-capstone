import { useEffect, useState } from "react"
import { getAllBooks, getBookById } from "../../services/bookService.jsx"
import { useParams } from "react-router-dom"

//once the user searches a book, if the book is found the user sees the book page 
//the image, title, author, summary and genre of the book shows

export const BookPage = () => {
    const [allBooks, setAllBooks] = useState([])
    const [book, setBook] = useState({})

    useEffect(() => {
        getBookById(bookId).then((bookObj) => {
            setBook(bookObj)
        })
    }, [bookId])

    const {bookId} = useParams()

    

    useEffect(() => {
        getAllBooks().then((booksArray) => {setAllBooks(booksArray)})
    }, [allBooks])

    return(
        <></>
    )
}
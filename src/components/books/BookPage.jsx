import { useEffect, useState } from "react"
import { getAllBooks } from "../../services/bookService.jsx"

//once the user searches a book, if the book is found the user sees the book page 
//the image, title, author, summary and genre of the book shows

export const BookPage = () => {
    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
        getAllBooks().then((booksArray) => {setAllBooks(booksArray)})
    }, [allBooks])

    return(
        <></>
    )
}
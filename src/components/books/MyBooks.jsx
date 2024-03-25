import { useEffect, useState } from "react"
import { deleteUserBook, getAllBooks, getUserBooks } from "../../services/bookService.jsx"
import { Book } from "./Book.jsx"
import { useNavigate } from "react-router-dom"

export const MyBooksList = ({currentUser}) => {
    const [allBooks, setAllBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [userBooks, setUserBooks] = useState([])
    const navigate= useNavigate()
    
    useEffect(() => {
        if(currentUser.id){
            getUserBooks(currentUser.id).then((userObj) => {
                setUserBooks(userObj.userBooks)
            })
        }
    }, [currentUser])

    useEffect(() => {
        getAllBooks().then((booksArray) => {
            const booksToAdd = []
            userBooks.map(userBook => {
                const bookToAdd = booksArray.find(book => book.id === userBook.bookId)
                booksToAdd.push(bookToAdd)
            })
            setAllBooks(booksToAdd)
        })
    }, [userBooks])

    useEffect(() => {
        setFilteredBooks(allBooks)
    }, [allBooks])

    const handleDelete = (userBookId) => {
        deleteUserBook(userBookId).then(() => {
            setUserBooks(prevUserBooks => prevUserBooks.filter(book => book.id !== userBookId))
        })
    }



    return (
        <div className="books-container">
            <h2>My Books</h2>
            <button className="btn btn-info" onClick={() => {navigate("/my-books/add-to-my-books")}}>Add A New Book</button>
            <article className="books">
                {filteredBooks?.map((bookObject) => {
                    const userBook = userBooks.find(
                        (userBook) => userBook.bookId === bookObject.id)
                        return <Book bookObject={bookObject} currentUser={currentUser} userBook={userBook} onDelete={handleDelete} key={bookObject.id} />
                })}
            </article>
        </div>
    )
}
import { useEffect, useState } from "react"
import { getAllBooks, getUserBooks } from "../../services/bookService.jsx"
import { Book } from "./Book.jsx"

export const MyBooksList = ({currentUser}) => {
    const [allBooks, setAllBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [userBooks, setUserBooks] = useState([])

    useEffect(() => {
        if(currentUser.id){
            getUserBooks(currentUser.id).then((userObj) => {
                setUserBooks(userObj.userBooks)
            })
        }
    }, [currentUser]) // get all the user's books

    useEffect(() => {
        getAllBooks().then((booksArray) => {
            const booksToAdd = []
            userBooks.map(userBook => {
                const bookToAdd = booksArray.find(book => book.id === userBook.bookId)
                booksToAdd.push(bookToAdd)
            })
            setAllBooks(booksToAdd)
        })
    }, [userBooks]) // taking all the user books and finding the actual books

    useEffect(() => {
        setFilteredBooks(allBooks)
    }, [allBooks])




    return (
        <div className="books-container">
            <h2>My Books</h2>
            <article className="books">
                {filteredBooks?.map((bookObject) => {
                        return <Book bookObject={bookObject} currentUser={currentUser} key={bookObject.id} />
                })}
            </article>
        </div>
    )
}
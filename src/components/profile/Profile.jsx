import "./Profile.css"
import { useEffect, useState } from "react"
import { getUserAndTheirBooks } from "../../services/userService.jsx"
import { getAllBooks, getUserBooks, getUserBookshelves } from "../../services/bookService.jsx"




export const Profile = ({currentUser}) => {
    const [user, setUser] = useState([])
    const [bookshelves, setBookshelves] = useState([])
    const [allBooks, setAllBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [userBooks, setUserBooks] = useState([])

    useEffect(() => {
        if(currentUser.id){
            getUserAndTheirBooks(currentUser.id).then((userObj) => {
                setUser(userObj)
            })
        }
    }, [currentUser]) // get the user

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


    useEffect(() => {
        if(currentUser.id){
            getUserBookshelves(currentUser.id).then((userObj) => {
                setBookshelves(userObj.bookshelves)
            })
        }
    }, [currentUser]) // getting all the user's bookshelves


    
    return (
        <main>
        <button className="btn btn-warning">Edit Profile</button>
        <div className="profile-container">
             {user ? (<>
            <div>
                <div className="user-name">
                    <h1>{user?.fullName}</h1>
                </div>
                <p className="user-info">Located in {user?.city}</p>
                <p className="user-info"></p>
            </div>
            </>) : ("")}
        </div>
        <div className="bookshelves-container">
            <h3>My Bookshelves</h3>
            {bookshelves?.map((bookshelf) => {
               return <li key={bookshelf.id}>{bookshelf.label}</li>
            })}
        </div>
        <div className="favorites-container">
            <h3>My Favorite Books</h3>
            {filteredBooks?.map((bookObject) => {
                if(bookObject.favorite === true){
                   return <div>Favorite Book Image</div>
                }
                })}
        </div>
        </main>
    )
}
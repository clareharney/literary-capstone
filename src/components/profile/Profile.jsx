import "./Profile.css"
import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService.jsx"
import { getAllBooks, getUserBooks, getUserBookshelves } from "../../services/bookService.jsx"
import { Link, useNavigate } from "react-router-dom"


// STILL NEED TO DO
// add a book count under user's location
//book count will count all the user's book and display that number

export const Profile = ({currentUser}) => {
    const [user, setUser] = useState([])
    const [bookshelves, setBookshelves] = useState([])
    const [allBooks, setAllBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [userBooks, setUserBooks] = useState([])

    useEffect(() => {
        if(currentUser.id){
            getUserById(currentUser.id).then((userObj) => {
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
            userBooks?.map(userBook => {
                const bookToAdd = booksArray.find(book => book.id === userBook.bookId)
                booksToAdd.push(bookToAdd)
            })
            setAllBooks(booksToAdd)
        })
    }, [userBooks]) // taking all the user books and finding the actual books

    useEffect(() => {
        setFilteredBooks(allBooks)
    }, [allBooks])

    const navigate= useNavigate()
    
    return (
        <main>
        <button className="btn btn-warning" onClick={() => {
            navigate("/profile/edit")
        }}>Edit Profile</button>
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
        </main>
    )
}
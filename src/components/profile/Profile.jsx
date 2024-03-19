import { useEffect, useState } from "react"
import { getUserAndUserBooksById } from "../../services/userService.jsx"



export const Profile = ({currentUser}) => {
    const [user, setUser] = useState([])

    useEffect(() => {
        getUserAndUserBooksById(currentUser).then(user => setUser(user))
    }, [user])
    
    return (
        <div className="profile-container">
            {user ? (<>
            <h1>{user.fullName}</h1>
            <p>City:</p>
            {user.city}
            {/* <p>{user.userBooks.book.count()} Books</p> */}
            </>) : ("")}
        </div>
    )
}
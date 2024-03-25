import "./Profile.css"
import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService.jsx"
import { getAllBooks, getUserBooks, getUserBookshelves } from "../../services/bookService.jsx"
import { Link, useNavigate } from "react-router-dom"


export const Profile = ({currentUser}) => {
    const [user, setUser] = useState([])

    useEffect(() => {
        if(currentUser.id){
            getUserById(currentUser.id).then((userObj) => {
                setUser(userObj)
            })
        }
    }, [currentUser])

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
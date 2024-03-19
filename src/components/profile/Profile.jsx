import "./Profile.css"
import { useEffect, useState } from "react"
import { getUserAndTheirBooks } from "../../services/userService.jsx"



export const Profile = ({currentUser}) => {
    const [user, setUser] = useState([])

    useEffect(() => {
        if(currentUser.id){
            getUserAndTheirBooks(currentUser.id).then((userObj) => {
                setUser(userObj)
            })
        }
    }, [currentUser]) // get the user
    
    return (
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
    )
}
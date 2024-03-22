
// STILL NEED TO DO
// user will be able to delete shelves
// (but not the Want To Read, Read, Currently Reading or DNF shelves)

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserBookshelves } from "../../services/bookService.jsx"
import { deleteBookshelf, getUserById, updateUser } from "../../services/userService.jsx"

export const EditProfile = ({currentUser}) => {
    const [user, setUser] = useState({})
    const [bookshelves, setBookshelves] = useState([])
    
    const navigate = useNavigate()

    useEffect(() => {
        getUserById(currentUser?.id).then((data) => {
            setUser(data)
        })
    }, [currentUser])

    const handleSubmit = (event) => {
        event.preventDefault()

        const editedUser = {
            id: currentUser.id,
            fullName: user.fullName,
            email: user?.email,
            password: user?.password,
            city: user.city,
        }
        updateUser(editedUser).then(() => {navigate("/profile")})
    }

    return (
    <form onSubmit={handleSubmit}>
            <h2>Edit Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Edit Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter your preferred name"
                        value={user?.fullName}
                        onChange={(event) => {
                            const copy = {...user}
                            copy.fullName = event.target.value
                            setUser(copy)
                        }}
                    />
                    <label>Edit Location</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter your new location"
                        value={user?.location}
                        onChange={(event) => {
                            const copy = {...user}
                            copy.city = event.target.value
                            setUser(copy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info" type="submit">Submit Changes</button>
                </div>
            </fieldset>
        </form>
    )
}
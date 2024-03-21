import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => { 
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link className="navbar-link" to="/my-books">My Books</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/my-bookshelves">My Bookshelves</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/discover">Discover New Books!</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/profile">Profile</Link>
            </li>
            {localStorage.getItem("literary_user") ? (
            <li className="navbar-item navbar-logout">
                <Link
                className="navbar-link"
                to=""
                onClick={() => {
                    localStorage.removeItem("literary_user")
                    navigate("/", { replace: true })
                }}
                >
                Logout
                </Link>
            </li>
            ) : (
            ""
            )}
        </ul>
    )
}
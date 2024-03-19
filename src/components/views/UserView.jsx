import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "../nav/NavBar.jsx"
import { Welcome } from "../welcome/Welcome.jsx"
import { MyBooksList } from "../books/MyBooks.jsx"
import { Profile } from "../profile/Profile.jsx"


export const UserView = ({currentUser}) => {
    return (
        <Routes>
            <Route
            path="/"
            element={
                <>
                <NavBar />
                <Outlet />
                </>
            }
            >
            <Route index element={<Welcome />} />
            <Route path="my-books" element={<MyBooksList currentUser={currentUser}/>} />
            <Route path="profile" element={<Profile currentUser={currentUser}/>}/>
            </Route>
        </Routes>
    )
}
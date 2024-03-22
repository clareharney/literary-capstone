import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "../nav/NavBar.jsx"
import { Welcome } from "../welcome/Welcome.jsx"
import { MyBooksList } from "../books/MyBooks.jsx"
import { Profile } from "../profile/Profile.jsx"
import { AddABookForm } from "../forms/AddABookForm.jsx"
import { CreateABookForm } from "../forms/CreateABookForm.jsx"
import { BookPage } from "../books/BookPage.jsx"
import { EditProfile } from "../forms/EditProfile.jsx"


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
            <Route path="my-books">
                <Route index element={<MyBooksList currentUser={currentUser}/>} />
                <Route path="add-to-my-books" element={<AddABookForm />} />
                <Route path="create-new-book" element={<CreateABookForm />} />
            </Route>
            <Route path="books">
                <Route index element={<>All Books</>} />
                <Route path=":bookId" element={<BookPage currentUser={currentUser} />}/>
            </Route>
            <Route path="profile">
                <Route index element={<Profile currentUser={currentUser}/>} />
                <Route path="edit" element={<EditProfile currentUser={currentUser}/>} />
            </Route>
            </Route>
        </Routes>
    )
}
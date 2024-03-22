import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "../nav/NavBar.jsx"
import { Welcome } from "../welcome/Welcome.jsx"
import { MyBooksList } from "../books/MyBooks.jsx"
import { Profile } from "../profile/Profile.jsx"
import { AddABookForm } from "../forms/AddABookForm.jsx"
import { CreateABookForm } from "../forms/CreateABookForm.jsx"
import { BookPage } from "../books/BookPage.jsx"
import { BookshelvesPage } from "../books/BookshelvesPage.jsx"
import { AllBooksPage } from "../books/AllBooksPage.jsx"
import { BookShelf } from "../books/Bookshelf.jsx"


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
            <Route path="my-bookshelves">
                <Route index element={<BookshelvesPage />} />
                <Route path=":bookshelfId" element={<BookShelf />} />
            </Route>
                
            <Route path="discover" element={<AllBooksPage />} />
            <Route path="profile" element={<Profile currentUser={currentUser}/>}/>
            </Route>
        </Routes>
    )
}
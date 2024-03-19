import "./Book.css"
import { deleteBook, getAllBooks } from "../../services/bookService.jsx"

export const Book = ({book, currentUser, getAndSetBooks, bookshelf}) => {

    const handleFavorite = () => {

    }

    const handleDelete = () => {
        deleteBook(book.id).then(() => {
            getAndSetBooks()
        })
    }


    return (
        <section className="book" >
            <div className="book-img">{book.image}</div>
            <header className="book-info">Title</header>
            <div>{book.title}</div>
            <header className="book-info">Author</header>
            <div>{book.author}</div>
            <div className="book-info">Shelf</div>
            {/* <div>{bookshelf.label}</div> */}
            <div className="btn-container">
                {currentUser?.userBooks.finishedReading ? (<button className="btn" onClick={handleFavorite}>Favorite</button>
                ) : (
                    ""
                )}
                <button className="btn" onClick={handleDelete}>Delete</button>
            </div>
        </section>
    )
}
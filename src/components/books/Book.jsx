import "./Book.css"

export const Book = ({bookObject, userBook, onDelete}) => {

    const handleDelete = () => {
        onDelete(userBook.id)
    }

    return (
        <section className="book-card" >
            <div className="book-img">
                <img src={bookObject.image} alt="Image Coming Soon!"/>
            </div>
            <div className="book-info">{bookObject.title}</div>
            <div className="book-info">{bookObject.author}</div>
            <div className="book-info">{bookObject.summary}</div>
            <div className="btn-container">
                <button className="btn btn-warning" onClick={handleDelete}>Remove from My Books</button>
            </div>
        </section>
    )
}
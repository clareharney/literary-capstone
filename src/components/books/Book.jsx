import "./Book.css"

//STILL NEED TO DO
//favorite button (if a user has finished reading, a button to add book to favorites will appear)
//favorite is a boolean in database, button will toggle the boolean
//ternary statement for the AllBooks page, if book is not in userBooks, a Want to Read button will appear
//on click, book will be added to user's Want to Read Bookshelf

export const Book = ({bookObject, currentUser}) => {


    return (
        <section className="book-card" >
            <div className="book-img">
                <img src={bookObject.image} alt="Image coming soon!"/>
            </div>
            <div className="book-info">{bookObject.title}</div>
            <div className="book-info">{bookObject.author}</div>
            <div className="book-info">{bookObject.summary}</div>
            <div className="btn-container">
                <button className="btn btn-warning">Remove from My Books</button>
            </div>
        </section>
    )
}
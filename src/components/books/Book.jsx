import "./Book.css"

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
                {/* {currentUser?.userBooks.finishedReading ? ( */}
                <button className="btn btn-secondary">Favorite</button>
                {/* ) : ( */}
                    {/* "" */}
                {/* )} */}
                <button className="btn btn-warning">Delete</button>
            </div>
        </section>
    )
}
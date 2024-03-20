import "./Form.css"

export const AddABookForm = () => {
    // create a form for user to input a title and an author and search for that title
    // after searching, if the book is found the user can add the book to their My Books
    // on click of the Search button, if book is in the database, user is taken to the book's page
    // if book is not found, user can choose to add a new book to the books database using another form

    return (
        <form>
            <h2>Add A Book to My Books</h2>
            <fieldset>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter the book title"
                    />
                    <label>Author</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter the book's author"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info">Search</button>
                </div>
            </fieldset>
        </form>
    )
}
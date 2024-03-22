import { useEffect, useState } from "react"
import { getAllGenres } from "../../services/genreService.jsx"
import { addABook } from "../../services/bookService.jsx"

// STILL NEED TO DO
// on button click, add book to books database
// also deal with the image aspect


export const CreateABookForm = () => {
    const [selectedOption, setSelectedOption] = useState({})
    const [genres, setGenres] = useState([])
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [summary, setSummary] = useState("")
    const [image, setImage] = useState("")
    const [pageCount, setPageCount] = useState(0)


    useEffect(() => {
        getAllGenres().then((genreArray) => {
            setGenres(genreArray)
        })
    }, [])

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    }

    const handleAdd = () => { 
        const newBook = {
            title: title,
            author: author,
            summary: summary,
            genreId: selectedOption,
            image: image,
            pageCount: pageCount
        }
        addABook(newBook)
    }

    return (
        <form>
            <h2>Add A New Book</h2>
            <fieldset>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter the book title"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }}
                    />
                    <label>Author</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter the book's author"
                        value={author}
                        onChange={(event) => {
                            setAuthor(event.target.value)
                        }}

                    />
                    <label>Book Summary</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Summary"
                        value={summary}
                        onChange={(event) => {
                            setSummary(event.target.value)
                        }}
                    />
                    <label># of Pages</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Page Count"
                        value={pageCount}
                        onChange={(event) => {
                            setPageCount(parseInt(event.target.value))
                        }}
                    />
                    <label>Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Image"
                        value={image}
                        onChange={(event) => {
                            setImage(event.target.value)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="button-group">
                    <h3>Choose A Genre</h3>
                    {genres.map((genre) => {
                        return (
                            <label key={genre.id}>
                                <input
                                    type="radio"
                                    id={`option${genre.id}`}
                                    value={genre.id}
                                    onChange={handleOptionChange}
                                />{genre.label}
                            </label>
                        )
                    })}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info" onClick={handleAdd}>Add this book to our site!</button>
                </div>
            </fieldset>
        </form>
    )
}
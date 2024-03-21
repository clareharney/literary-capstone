import { useState } from "react"


export const CreateABookForm = () => {
    

    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
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
                    />
                    <label>Author</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter the book's author"
                    />
                    <label>Book Summary</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Summary"
                    />
                    <label># of Pages</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Page Count"
                    />
                    {/* image ??? how would I insert and image? */}
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>
                        <input 
                            type="radio"
                            id="option1"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                        />Fantasy
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option2"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                        />Science Fiction
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option3"
                            value="option3"
                            checked={selectedOption === 'option3'}
                            onChange={handleOptionChange}
                        />Mystery
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option4"
                            value="option4"
                            checked={selectedOption === 'option4'}
                            onChange={handleOptionChange}
                        />Romance
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option5"
                            value="option5"
                            checked={selectedOption === 'option5'}
                            onChange={handleOptionChange}
                        />Thriller
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option6"
                            value="option6"
                            checked={selectedOption === 'option6'}
                            onChange={handleOptionChange}
                        />Historical Fiction
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option7"
                            value="option7"
                            checked={selectedOption === 'option7'}
                            onChange={handleOptionChange}
                        />Horror
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option8"
                            value="option8"
                            checked={selectedOption === 'option8'}
                            onChange={handleOptionChange}
                        />
                    </label>Biography
                    <label>
                        <input 
                            type="radio"
                            id="option9"
                            value="option9"
                            checked={selectedOption === 'option9'}
                            onChange={handleOptionChange}
                        />Young Adult
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option10"
                            value="option10"
                            checked={selectedOption === 'option10'}
                            onChange={handleOptionChange}
                        />Adventure
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option11"
                            value="option11"
                            checked={selectedOption === 'option11'}
                            onChange={handleOptionChange}
                        />Non-Fiction
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option12"
                            value="option12"
                            checked={selectedOption === 'option12'}
                            onChange={handleOptionChange}
                        />Poetry
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option13"
                            value="option13"
                            checked={selectedOption === 'option13'}
                            onChange={handleOptionChange}
                        />Self-Help
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option14"
                            value="option14"
                            checked={selectedOption === 'option14'}
                            onChange={handleOptionChange}
                        />Cookbook
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option15"
                            value="option15"
                            checked={selectedOption === 'option15'}
                            onChange={handleOptionChange}
                        />Travel
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option16"
                            value="option16"
                            checked={selectedOption === 'option16'}
                            onChange={handleOptionChange}
                        />Graphic Novel
                    </label>
                    <label>
                        <input 
                            type="radio"
                            id="option17"
                            value="option17"
                            checked={selectedOption === 'option17'}
                            onChange={handleOptionChange}
                        />Classic Literature
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info">Add this book to our site!</button>
                </div>
            </fieldset>
        </form>
    )
}
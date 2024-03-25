export const getAllBooks = () => {
    return fetch(`http://localhost:8088/books`).then((res) => res.json())
}

export const getBookById = (bookId) => {
    return fetch(`http://localhost:8088/books/${bookId}`).then((res) => res.json())
}

export const getUserBooks = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}?_embed=userBooks`).then((res) => res.json())
}

export const getUserBookshelves = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}?_embed=bookshelves`).then((res) => res.json())
}



// export const deleteBook = (bookId) => {
//     return fetch(`http://localhost:8088/userBooks?bookId=${bookId}`, {
//         method : "DELETE"
//     })
// }

// add a DELETE service for when a user wants to remove a book from a bookshelf
export const deleteUserBook = (userBookId) => {
    return fetch(`http://localhost:8088/userBooks/${userBookId}`, {
        method : "DELETE"
    })
}

export const addABook = (bookObj) => {
    return fetch(`http://localhost:8088/books`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(bookObj)
    }).then((res) => res.json())
}

export const addABookToUserBooks = (bookObj, userId) => {
    return fetch(`http://localhost:8088/userBooks`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(bookObj)
    })
}

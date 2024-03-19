export const getAllBooks = () => {
    return fetch(`http://localhost:8088/books`).then((res) => res.json())
}

export const getUserBooks = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}?_embed=userBooks`).then((res) => res.json())
}

export const deleteBook = (bookId) => {
    return fetch(`http://localhost:8088/userBooks?bookId=${bookId}`, {
        method : "DELETE"
    })
}

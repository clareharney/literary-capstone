// STILL NEED TO DO
// add a POST service for when a user "creates" a new book-- needs to be added to AllBooks
// add a PUT service for when user edits profile
// add a DELETE service for when user wants to delete a book from their userBooks
// add a POST service for when user creates a new bookshelf
// add a POST service for when user adds a book to one of their bookshelves


export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
    )
}

export const getUserAndTheirBooks = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}?_embed=userBooks`).then((res) => res.json())
}
export const getUserById = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`).then((res) =>
        res.json()
    )
}


export const createUser = (user) => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json())
}

export const updateUser = (user) => {
     return fetch(`http://localhost:8088/users/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
     })
}

export const deleteBookshelf = (bookshelfId) => {
    return fetch(`http://localhost:8088/bookshelves/${bookshelfId}`, {
        method: "DELETE",
    })
}

export const deleteFromUserBooks = () => { 
    return fetch(`http://localhost:8088/users/${userId}?_embed=userBooks`,{
        method: "DELETE",
    })
}

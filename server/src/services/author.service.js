import Author from "../models/author.model"

export const getAuthors = async () => {
    const authors = await Author.find()
    return authors
}

export const getAuthorById = async (id) => {
    const author = await Author.findById(id)
    return author
}

export const createAuthor = async (author) => {
    const newAuthor = await Author.create(author)
    return newAuthor
}

export const updateAuthor = async (id, author) => {
    const updatedAuthor = await Author.findByIdAndUpdate(id, author, { new: true })
    return updatedAuthor
}

export const deleteAuthor = async (id) => {
    const deletedAuthor = await Author.findByIdAndDelete(id)
    return deletedAuthor
}


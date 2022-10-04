import Book from "../models/book.model"

export const getBooks = async (query) => {
    const books = await Book.find({ ...query })
    return books
}

export const getBookById = async (id) => {
    const book = await Book.findById(id)
    return book
}

export const createBook = async (book) => {
    const newBook = await Book.create(book)
    return newBook
}

export const updateBook = async (id, book) => {
    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true })
    return updatedBook
}

export const deleteBook = async (id) => {
    const deletedBook = await Book.findByIdAndDelete(id)
    return deletedBook
}


import querystring from 'querystring';
import Book from "../models/Book.js";


const bookService = {
    getAll(filter = {}) {
        const query = Book.find();

        if (filter.where) {
            const q = querystring.parse(filter.where.replaceAll('"', ''))

            query.find(q)
        }

        return query;
    },
    getOne(bookId) {
        return Book.findById(bookId);
    },
    create(bookData, userId) {
        return Book.create({ ...bookData, _ownerId: userId });
    },
    delete(bookId) {
        return Book.findByIdAndDelete(bookId);
    },
    update(bookId, bookData) {
        return Book.findByIdAndUpdate(bookId, bookData, { runValidators: true });
    }
};

export default bookService;

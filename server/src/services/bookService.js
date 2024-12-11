import querystring from 'querystring';
import Book from "../models/Book.js";


const bookService = {
    getAll(filter = {}) {
        const query = Book.find();

        if (filter.where) {
            const q = querystring.parse(filter.where.replaceAll('"', ''))

            query.find(q)
        }

        if(filter.name) {
            query.find({name: {$regex: filter.name, $options: 'i'}});
        }

        if(filter.search) {
            query.find({name: {$regex: filter.search, $options: 'i'}});
        }

        return query;
    },
    getOne(bookId) {
        return Book.findById(bookId);
    },
    create(bookData, userId) {
        return Book.create({ ...bookData, _userId: userId });
    },
    delete(bookId) {
        return Book.findByIdAndDelete(bookId);
    },
    update(bookId, bookData) {
        return Book.findByIdAndUpdate(bookId, bookData, { runValidators: true });
    }
};

export default bookService;

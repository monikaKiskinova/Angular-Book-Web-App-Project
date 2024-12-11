import { Router } from 'express';
import bookService from '../services/bookService.js';
import { getErrorMessage } from '../utils/errorUtils.js';

const bookController = Router();

bookController.get('/', async (req, res) => {
    const query = req.query;

    let books;

    if(query.hasOwnProperty('limit')) {
        books = await bookService.getAll().limit(query.limit).lean().sort({$natural:-1});
    } else {
        books = await bookService.getAll(query);
    }

    res.json(books);
});

bookController.post('/', async (req, res) => {
    const userId = req.user?._id;
    const bookData = req.body;

    try {
        const book = await bookService.create(bookData, userId);
        res.json(book);
    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err) })
    }

});

bookController.get('/:bookId', async (req, res) => {
    const book = await bookService.getOne(req.params.bookId);

    res.json(book);
});

bookController.delete('/:bookId', async (req, res) => {
    try {
        await bookService.delete(req.params.bookId);

        res.status(204).end();
    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err) })
    }
});

bookController.put('/:bookId', async (req, res) => {
    const bookData = req.body;
    const bookId = req.params.bookId;

    try {
        const updatedBook = await bookService.update(bookId, bookData);

        res.json(updatedBook)
    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err) })
    }
});

export default bookController;

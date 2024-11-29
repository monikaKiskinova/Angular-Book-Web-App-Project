import { Schema, model, Types } from "mongoose";

const bookSchema = new Schema({
    name: String, 
    author: String,
    img: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    },
    year: Number,
    genre: String,
    description: {
        type: String,
        minLength: 10,
    },
    _ownerId: {
        type: Types.ObjectId,
        ref: 'User',
    }, 
    comments: [{
        type: Types.ObjectId,
        ref: 'User', 
    }],
    readList: [{
        type: Types.ObjectId,
        ref: 'User', 
    }], 
    wantToReadList: [{
        type: Types.ObjectId,
        ref: 'User', 
    }],
});

const Book = model('Book', bookSchema);

export default Book;

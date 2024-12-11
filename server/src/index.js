import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'; 
import 'dotenv/config';

import routes from './routes.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const dbUrl = 'mongodb://localhost:27017/the-book-bank';
try {
    // await mongoose.connect('mongodb://localhost:27017', { dbName: 'the-book-bank' });
    const url = process.env.DB_URL || dbUrl;
    await mongoose.connect(url, { dbName: 'the-book-bank' });
    console.log('DB Connected!');
} catch (err) {
    console.log('Cannot connect to DB!');
}

const app = express();

const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(express.json());
// app.use(cors());
app.use(cors(corsOptions));
app.use(authMiddleware);

app.use(routes);

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'));

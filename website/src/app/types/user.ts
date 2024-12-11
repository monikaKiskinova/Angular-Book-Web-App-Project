import { Book } from "./book";

export interface User {
    email: string, 
    password: string,
    _id: string,
    comments: string[],
    readList: Book[],
    wantToReadList: Book[],
    bookProgressList: { title: string, page: number }[],
    isAuth: boolean;
}
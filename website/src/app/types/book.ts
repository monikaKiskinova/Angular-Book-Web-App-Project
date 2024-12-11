import { User } from "./user";

export interface Book {
    title: string, 
    author: string,
    img: string,
    year: number,
    genre: string,
    description: string,
    _userId: User, 
    comments: string[],
    _id: string,
}
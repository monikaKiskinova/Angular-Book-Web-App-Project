import { User } from "./user";

export interface Book {
    title: string, 
    author: string,
    img: string,
    year: number,
    genre: string,
    description: string,
    userId: User, 
    comments: string[],
}
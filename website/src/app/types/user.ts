export interface User {
    email: string, 
    password: string,
    _id: string,
    comments: string[],
    readList: string[],
    wantToReadList: string[],
    bookProgressList: string[],
    isAuth: boolean;
}
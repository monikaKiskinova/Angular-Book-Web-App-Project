import { ResolveFn } from "@angular/router"
import { Book } from "../types/book"
import { inject } from "@angular/core";
import { ApiService } from "../api.service";

export const BookDetailsResolver: ResolveFn<Book> = (route) => {
    const apiService = inject(ApiService); 
    const bookId = route.params['bookId'];
    return apiService.getSingleBook(bookId);
}
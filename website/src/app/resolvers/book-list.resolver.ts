import { ResolveFn } from "@angular/router"
import { Book } from "../types/book"
import { inject } from "@angular/core";
import { ApiService } from "../api.service";

export const BookListResolver: ResolveFn<Book[]> = () => {
    const apiService = inject(ApiService); 
    return apiService.getBooks();
}
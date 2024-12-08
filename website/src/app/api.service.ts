import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Book } from './types/book';
import { User } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // const {apiUrl} = environment;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBooks(limit?: number) {
    let url = `${this.apiUrl}/books`;

    if (limit) {
      url+= `?limit=${limit}`;
    }
    return this.http.get<Book[]>(url);
  }

  getSingleBook(bookId: string) {
    return this.http.get<Book>(`${this.apiUrl}/books/${bookId}`);
  }

  createBook(title: string, author: string, img: string, year: number, genre: string, description: string) {
    const payload = {title, author, img, year, genre, description};
    return this.http.post<Book>('/home', payload);
  }
}

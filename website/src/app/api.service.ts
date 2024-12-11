import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './types/book';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnDestroy {
  // apiUrl = environment.apiUrl;
  userSubscription: Subscription | null = null;

  constructor(private http: HttpClient) { }

  getBooks(limit?: number) {
    // let url = `${this.apiUrl}/books`;
    let url = `/books`;

    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Book[]>(url);
  }

  getSingleBook(bookId: string) {
    return this.http.get<Book>(`/books/${bookId}`);
  }

  createBook(title: string, author: string, img: string, year: number, genre: string, description: string) {
    const payload = {title, author, img, year, genre, description};
    return this.http.post<Book>('/books', payload);
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}

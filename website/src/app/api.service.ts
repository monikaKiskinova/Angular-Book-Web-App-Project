import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Book } from './types/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getBooks(limit?: number) {
    const {apiUrl} = environment;
    let url = `${apiUrl}/books`;

    if (limit) {
      url+= `?limit=${limit}`;
    }
    return this.http.get<Book[]>(url);
  }
}

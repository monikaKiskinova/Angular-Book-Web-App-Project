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
}

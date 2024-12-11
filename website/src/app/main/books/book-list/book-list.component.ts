import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Book } from '../../../types/book';
import { RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  constructor(private apiService: ApiService, private userService: UserService) {} 
  
  ngOnInit(): void {
    this.apiService.getBooks().subscribe((b) => {
      this.books = b;
    })  
  }
}

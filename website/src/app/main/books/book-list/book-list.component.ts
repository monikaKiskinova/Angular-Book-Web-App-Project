import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Book } from '../../../types/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private apiService: ApiService) {} 
  
  ngOnInit(): void {
    this.apiService.getBooks().subscribe((b) => {
      console.log(b);
      this.books = b;
    })  
  }
}

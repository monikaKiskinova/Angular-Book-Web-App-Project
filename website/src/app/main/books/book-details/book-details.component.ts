import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Book } from '../../../types/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit{
  book = {} as Book;
  comments: string[] = [];
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['bookId'];
    this.apiService.getSingleBook(bookId).subscribe((book) => {
      this.book = book;
      this.comments = book.comments;
    })
  }

}

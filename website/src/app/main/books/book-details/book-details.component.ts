import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Book } from '../../../types/book';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit{
  book = {} as Book;
  comments: string[] = [];

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  constructor(private route: ActivatedRoute, 
    private apiService: ApiService, 
    private userService: UserService) {}

  ngOnInit(): void {
    // const bookId = this.route.snapshot.params['bookId'];
    // this.apiService.getSingleBook(bookId).subscribe((book) => {
    //   this.book = book;
    //   this.comments = book.comments;
    // })

    this.book = this.route.snapshot.data['book'];
    this.comments = this.book.comments;
  }

}

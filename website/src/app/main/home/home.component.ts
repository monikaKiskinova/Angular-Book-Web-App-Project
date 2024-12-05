import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../types/book';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  books: Book[] = [];

  constructor(private apiService: ApiService) {} 
  
  ngOnInit(): void {
    this.apiService.getBooks(5).subscribe((b) => {
      console.log(b);
      this.books = b;
    })  
  }
}

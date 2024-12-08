import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../api.service';
import { Book } from '../../../types/book';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  readBooks: Book[] = [];
  wishListBooks: Book[] = [];
  currentBooks: Book[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    
  }

}

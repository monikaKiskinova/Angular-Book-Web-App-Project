import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../../types/book';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../../types/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user = {} as User;
  readBooks: Book[] = [];
  wishListBooks: Book[] = [];
  currentBooks: { title: string, page: number }[] = [];

  formIsShown = false;
  router: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      this.readBooks = user.readList;
      this.wishListBooks = user.wantToReadList; 
      this.currentBooks = user.bookProgressList; 
    }) 
  }

  showAddForm(event: Event) {
    this.formIsShown = !this.formIsShown;
  }

  addBookPages(form: NgForm) {
    const {title, page} = form.value;
    // this.currentBooks.push({title, page});

    this.userService.updateUserList(title, page).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }

}

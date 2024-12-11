import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  constructor(private apiService: ApiService, private router: Router) {}
  
  addBook(form: NgForm) {
    console.log(form);
    
    if(form.invalid) {
      console.log('This form is invalid');
      return;
    }

    const {title, author, img, year, genre, description} = form.value;

    this.apiService.createBook(title, author, img, year, genre, description).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/books']);
  }
}

import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  @ViewChild('addBookForm') form: NgForm | undefined;

  formSubmitHandler() {
    const form = this.form!;

    if(form?.invalid) {
      console.log('This form is invalid');
      return;
    }

    console.log(form.value);
  }
}

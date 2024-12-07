import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formSubmitHandler(form: NgForm) {

    if(form.invalid) {
      console.log('The form is invalid.');
      return;
    }

    console.log(form.value);
  }
}
